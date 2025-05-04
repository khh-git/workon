import { useContext, useEffect, useState } from "react";
import { Box, Loader } from "@components";
import { EntrySection, WorkList } from "./components";
import { createList, getLists } from "@api/list";
import { AuthContext } from "@contexts/AuthContext";
import { TCard, TList } from "@typelib/apiResponce";

const WorkSpace = () => {
  const { user } = useContext(AuthContext);
  const [workLists, setWorkLists] = useState<TList[]>([]);
  const [inPending, setInPending] = useState(true);

  useEffect(() => {
    getLists(user.userId, (responce) => {
      const { data } = responce;
      setWorkLists(data);
      setInPending(false);
    });
  }, []);

  const addList = (text: string) => {
    if (text != "") {
      createList(text, user.userId, (response) => {
        const { newList } = response.data;
        const { _id, title, cards } = newList;
        setWorkLists((prev) => [...prev, { _id, title, cards }]);
      });
    }
  };

  const onDeleteListSuccess = (listId: string) => {
    workLists.forEach((list, index, arr) => {
      if (list._id === listId) {
        arr.splice(index, 1);
      }
    });
    setWorkLists([...workLists]);
  };

  const addCardSuccess = (listId: string, card: TCard) => {
    workLists.forEach((list, index, arr) => {
      if (list._id === listId) {
        arr[index].cards.push(card);
      }
    });
    setWorkLists([...workLists]);
  };

  return !inPending ? (
    <Box style="flex gap-4  *:px-2 *:shrink-0 h-full overflow-x-scroll ">
      {workLists &&
        workLists.map(({ _id, title, cards }: TList) => (
          <WorkList
            key={_id}
            listId={_id}
            title={title}
            cards={cards}
            onAddCardSuccess={(card) => addCardSuccess(_id, card)}
            onDeleteListSuccess={(listId) => onDeleteListSuccess(listId)}
          />
        ))}
      <EntrySection
        style="w-[245px]"
        entryButtonLabel="Add a List"
        entryButtonStyle="bg-gray-200 px-2 shadow"
        entryFormStyle="shadow"
        textAreaPlaceholder="Enter List Name..."
        formTextAreaStyle=" placeholder:font-semibold"
        onFormSubmit={(text) => addList(text ?? "")}
      />
    </Box>
  ) : (
    <Loader style="w-10 h-10 animate-spin absolute top-1/2 left-1/2 -translate-1/2" />
  );
};

export default WorkSpace;
