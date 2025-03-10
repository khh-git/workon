import { useRef } from "react";
import { TextArea, WorkList, WorkSpaceForm } from "@components";
import { useAppSelector, useAppDispatch } from "@hooks";
import { TextRef } from "@typelib/components";
import { addNewList } from "@redux/actions";

const WorkSpace = () => {
  const worklists = useAppSelector((state) => state.worklists);
  const textRef = useRef<TextRef>(null);
  const dispatch = useAppDispatch();

  const addList = () => {
    const listName = textRef.current?.getText();
    dispatch(addNewList(listName));
  };

  return (
    <div className="flex gap-3 *:w-[245px] **:h-fit *:px-2 *:shrink-0 h-full overflow-x-auto overflow-y-hidden">
      {worklists.map(({ id, title }) => (
        <WorkList key={id} title={title} cards={[]} />
      ))}
      <WorkSpaceForm
        formLabel="Add a List"
        labelStyle="bg-gray-200 rounded-xl px-2"
        onFormSubmit={addList}
      >
        <TextArea
          ref={textRef}
          placeholder="Enter List Name..."
          style="text-sm font-semibold text-gray-600 inset-ring-2 inset-ring-blue-500 placeholder:text-sm placeholder"
        />
      </WorkSpaceForm>
    </div>
  );
};

export default WorkSpace;
