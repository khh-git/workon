import { useRef } from "react";
import { TextArea, WorkSpaceForm } from "@components";
import { TextRef } from "@typelib/components";

type WorkListProps = {
  title: string;
  cards: [];
};

const WorkList = ({ title }: WorkListProps) => {
  const textRef = useRef<TextRef>(null);

  return (
    <div className="bg-amber-100 px-2 py-1 rounded-md ">
      <div className="text-sm text-gray-700 font-semibold p-2">{title}</div>

      <WorkSpaceForm
        formLabel="Add a Card"
        labelStyle="hover:bg-blue-100 rounded-xl w-full"
        onFormSubmit={() => {
          console.log("yeah");
        }}
      >
        <TextArea
          ref={textRef}
          placeholder="Enter a Title"
          style="text-sm font-semibold text-gray-600 inset-ring-2 inset-ring-blue-500 hover:inset-ring-0 placeholder:text-sm placeholder"
        />
      </WorkSpaceForm>
    </div>
  );
};

export default WorkList;
