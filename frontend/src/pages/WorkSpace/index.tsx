import { useContext, useEffect, useState } from "react";
import { LogoText, NavBar, SupportMenu, Views } from "@components";
import { EntrySection, WorkList } from "./components";
import { brandLogo } from "@assets";
import { createList, getLists } from "@api/list";
import { AuthContext } from "@contexts/AuthContext";

type TList = {
  _id: string;
  title: string;
};

const WorkSpace = () => {
  const { user, isLoggedIn } = useContext(AuthContext);
  const [workLists, setWorkLists] = useState<TList[]>([]);

  useEffect(() => {
    if (isLoggedIn) {
      getLists(user.userId, (responce) => {
        const { data } = responce;
        setWorkLists(data);
      });
    }
  }, [isLoggedIn]);

  const addList = (text: string) => {
    if (text != "" && isLoggedIn) {
      createList(text, user.userId, (response) => {
        getLists(user.userId, (responce) => {
          const { data } = responce;
          setWorkLists(data);
        });
      });
    }
  };

  return (
    <>
      <header>
        <NavBar>
          <LogoText
            icon={brandLogo}
            iconStyle="w-5.5 h-5.5"
            text="Workon"
            textStyle="text-base font-bold text-gray-600"
          />
          {/* <Views /> */}
          <SupportMenu />
        </NavBar>
      </header>

      <main>
        <div className="flex gap-4 *:w-[245px] **:h-fit *:px-2 *:shrink-0 h-full overflow-x-auto overflow-y-hidden">
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
        </div>
      </main>

      <footer></footer>
    </>
  );
};

export default WorkSpace;
