import { LogoText, NavBar, SupportMenu, Views } from "@components";
import { useAppSelector, useAppDispatch } from "@hooks";
import { addNewList } from "@redux/actions";
import { EntrySection, WorkList } from "./components";
import { brandLogo } from "@assets";

const WorkSpace = () => {
  const worklists = useAppSelector((state) => state.worklists);
  const dispatch = useAppDispatch();

  const addList = (text: string | undefined) => {
    if (text != undefined && text != "") dispatch(addNewList(text));
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
          {worklists.map(({ id, title }) => (
            <WorkList key={id} title={title} cards={[]} />
          ))}
          <EntrySection
            entryButtonLabel="Add a List"
            entryButtonStyle="bg-gray-200 px-2 shadow"
            entryFormStyle="shadow"
            textAreaPlaceholder="Enter List Name..."
            formTextAreaStyle=" placeholder:font-semibold"
            onFormSubmit={addList}
          />
        </div>
      </main>

      <footer></footer>
    </>
  );
};

export default WorkSpace;
