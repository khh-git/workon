import { useContext, useEffect, useState } from "react";
import { Box, Loader } from "@components";
import { EntrySection, WorkList } from "./components";
import { createList, getLists } from "@api/list";
import { AuthContext } from "@contexts/AuthContext";

type TList = {
  _id: string;
  title: string;
};

const WorkSpace = () => {
  const { user } = useContext(AuthContext);
  const [workLists, setWorkLists] = useState<TList[]>([]);
  const [inPending, setInPending] = useState(true);

  useEffect(() => {
    getUserLists();
  }, []);

  const getUserLists = () => {
    getLists(user.userId, (responce) => {
      const { data } = responce;
      setWorkLists(data);
      setInPending(false);
    });
  };

  const addList = (text: string) => {
    if (text != "") {
      setInPending(true);
      createList(text, user.userId, (response) => {
        getUserLists();
      });
    }
  };

  return !inPending ? (
    <Box style="flex gap-4 *:w-[245px] **:h-fit *:px-2 *:shrink-0 h-full overflow-x-auto overflow-y-hidden">
      {workLists &&
        workLists.map(({ _id, title }: TList) => (
          <WorkList key={_id} title={title} cards={[]} />
        ))}
      <EntrySection
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
