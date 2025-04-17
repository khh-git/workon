import { Box, Card, Icon, LogoText, TextField } from "@components";
import EntrySection from "../EntrySection";
import { commentsIcon, descriptionIcon } from "@assets";

type WorkListProps = {
  title: string;
  cards?: {
    cardId: number;
    cardTitle: string;
    desc: string;
    comments: { commentBy: string; comment: string }[];
  }[];
};

const WorkList = ({ title, cards }: WorkListProps) => {
  return (
    <Box style="flex flex-col bg-amber-100 px-2 py-1 rounded-md shadow">
      <TextField
        text={title}
        style=" text-sm text-gray-700 font-semibold p-2"
      />

      {cards?.map(({ cardId, cardTitle, desc, comments }) => (
        <Card
          style="mb-2 active:cursor-grabbing bg-white"
          draggable
          key={cardId}
          id={cardId}
        >
          <TextField text={cardTitle} style="text-sm" />
          <Box style="flex items-center gap-4">
            {desc && <Icon icon={descriptionIcon} style="w-3.5 h-3.5" />}
            {comments.length != 0 && (
              <LogoText
                style="gap-0.5"
                icon={commentsIcon}
                iconStyle="w-5"
                text={comments.length.toString()}
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
        onFormSubmit={() => {
          console.log("yeah");
        }}
      />
    </Box>
  );
};

export default WorkList;
