import { useState } from "react";
import { Box, Button, LogoText, Modal, TextEntryForm } from "@components";
import { plusCircleIcon } from "@assets";
import { EntrySectionProps } from "@typelib/components";

const EntrySection = ({
  style,
  entryButtonLabel,
  entryButtonStyle,
  entryFormStyle,
  formTextAreaStyle,
  textAreaPlaceholder,
  onFormSubmit,
}: EntrySectionProps) => {
  const [showForm, setShowForm] = useState(false);

  const fillForm = () => {
    setShowForm(true);
  };
  const closeForm = () => {
    setShowForm(false);
  };
  const onSubmit = (text: string | undefined) => {
    onFormSubmit(text);
    closeForm();
  };

  return (
    <Box style={style}>
      {!showForm && (
        <Button
          style={`flex gap-3 items-center ${entryButtonStyle}`}
          onClick={fillForm}
        >
          <LogoText
            icon={plusCircleIcon}
            text={entryButtonLabel}
            textStyle="text-sm font-semibold text-gray-600"
          />
        </Button>
      )}
      <Modal open={showForm} onClose={closeForm}>
        <TextEntryForm
          style={`bg-amber-100 rounded-md flex flex-col gap-1 p-2 ${entryFormStyle}`}
          onSubmit={onSubmit}
          onClose={closeForm}
          textAreaStyle={formTextAreaStyle}
          textAreaPlaceholder={textAreaPlaceholder}
        />
      </Modal>
    </Box>
  );
};

export default EntrySection;
