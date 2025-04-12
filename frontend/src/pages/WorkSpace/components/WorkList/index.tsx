import { Box } from "@components";
import EntrySection from "../EntrySection";

type WorkListProps = {
  title: string;
  cards: [];
};

const WorkList = ({ title }: WorkListProps) => {
  return (
    <Box style="bg-amber-100 px-2 py-1 rounded-md shadow">
      <div className="text-sm text-gray-700 font-semibold p-2">{title}</div>

      <EntrySection
        entryButtonLabel="Add a Card"
        entryButtonStyle="hover:bg-gray-200 rounded-sm w-full"
        formTextAreaStyle="pb-4 placeholder:italic placeholder:font-semibold"
        textAreaPlaceholder="Enter Card Title ..."
        onFormSubmit={() => {
          console.log("yeah");
        }}
      />
    </Box>
  );
};

export default WorkList;
