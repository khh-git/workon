import {
  Box,
  Button,
  Card,
  Icon,
  LogoText,
  Modal,
  TextField,
  Tooltip,
} from "@components";
import EntrySection from "../EntrySection";
import { commentsIcon, deleteIcon, descriptionIcon, menudots } from "@assets";
import { createCard } from "@api/card";
import { deleteList } from "@api/list";
import { TCard } from "@typelib/apiResponce";
import { useState } from "react";

type WorkListProps = {
  listId: string;
  title: string;
  cards: {
    _id: string;
    title: string;
    hasDesc: string;
    totalComments: number;
  }[];
  onAddCardSuccess?: (card: TCard) => void;
  onDeleteListSuccess?: (listId: string) => void;
};

const WorkList = ({
  listId,
  title,
  cards,
  onAddCardSuccess,
  onDeleteListSuccess,
}: WorkListProps) => {
  const [showListActions, setShowListActions] = useState(false);

  const addCard = (text: string) => {
    if (text != "") {
      createCard(listId, text, (responce) => {
        const { newCard } = responce.data;
        onAddCardSuccess?.(newCard);
      });
    }
  };

  const handleDeleteList = () => {
    deleteList(listId, (responce) => {
      onDeleteListSuccess?.(listId);
    });
  };

  const listActions = () => {
    if (!showListActions) {
      setShowListActions(true);
    }
  };

  return (
    <>
      <Box
        style={`w-[245px] h-fit flex flex-col bg-amber-100 px-2 py-1 rounded-md shadow ${
          showListActions ? "relative z-5" : ""
        }`}
      >
        <Box style="flex items-center">
          <TextField
            text={title}
            style=" text-sm text-gray-700 font-semibold p-2 grow-1"
          />
          <Tooltip tooltip="List actions">
            <Button
              style="cursor-pointer hover:bg-gray-200"
              onClick={listActions}
            >
              <Icon icon={menudots} style="w-3.5 h-3.5" />
            </Button>
          </Tooltip>
        </Box>

        {cards?.map(({ _id, title, hasDesc, totalComments }) => (
          <Card
            style="mb-2 min-h-2 active:cursor-grabbing bg-white hover:inset-ring-2 hover:inset-ring-blue-500 cursor-pointer"
            draggable
            key={_id}
            id={_id}
          >
            <TextField text={title} style="text-sm" />
            <Box style="flex items-center gap-4">
              {hasDesc && <Icon icon={descriptionIcon} style="w-3.5 h-3.5" />}
              {totalComments != 0 && (
                <LogoText
                  style="gap-0.5"
                  icon={commentsIcon}
                  iconStyle="w-5"
                  text={totalComments.toString()}
                  textStyle="text-sm text-gray-600 font-semibold"
                />
              )}
            </Box>
          </Card>
        ))}

        <EntrySection
          entryButtonLabel="Add a Card"
          entryButtonStyle="hover:bg-gray-200 rounded-sm w-full cursor-pointer"
          formTextAreaStyle="pb-4 placeholder:italic placeholder:font-semibold"
          textAreaPlaceholder="Enter Card Title ..."
          onFormSubmit={(text = "") => addCard(text ?? "")}
        />

        <Modal
          style="absolute top-0 left-full w-max m-1"
          open={showListActions}
          onClose={() => setShowListActions(false)}
        >
          <Button style="bg-gray-100 cursor-pointer" onClick={handleDeleteList}>
            <LogoText
              icon={deleteIcon}
              iconStyle="w-4 h-4"
              text="Delete"
              textStyle="text-sm text-gray-700 font-semibold"
            />
          </Button>
        </Modal>
      </Box>

      {showListActions && (
        <Box
          style="absolute w-full h-full bg-black/20 top-0 left-0 z-4"
          onClick={() => {
            setShowListActions(false);
          }}
        ></Box>
      )}
    </>
  );
};

export default WorkList;
