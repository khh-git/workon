import { Box, Card, Icon, LogoText, TextField } from "@components";
import EntrySection from "../EntrySection";
import { commentsIcon, descriptionIcon } from "@assets";
import { createCard } from "@api/card";
import { TCard } from "@typelib/apiResponce";

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
};

const WorkList = ({
  listId,
  title,
  cards,
  onAddCardSuccess,
}: WorkListProps) => {
  const addCard = (text: string) => {
    if (text != "") {
      createCard(listId, text, (responce) => {
        const { newCard } = responce.data;
        onAddCardSuccess?.(newCard);
      });
    }
  };

  return (
    <Box style="flex flex-col bg-amber-100 px-2 py-1 rounded-md shadow">
      <TextField
        text={title}
        style=" text-sm text-gray-700 font-semibold p-2"
      />

      {cards?.map(({ _id, title, hasDesc, totalComments }) => (
        <Card
          style="mb-2 active:cursor-grabbing bg-white"
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
        entryButtonStyle="hover:bg-gray-200 rounded-sm w-full"
        formTextAreaStyle="pb-4 placeholder:italic placeholder:font-semibold"
        textAreaPlaceholder="Enter Card Title ..."
        onFormSubmit={(text = "") => addCard(text ?? "")}
      />
    </Box>
  );
};

export default WorkList;
