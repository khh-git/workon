import { Box, Button, Icon, TextArea } from "@components";
import { crossCircleIcon, tickCircleIcon } from "@assets";
import { TextEntryFormProps } from "@typelib/components";
import { useState } from "react";

const TextEntryForm = ({
  style,
  textAreaStyle,
  textAreaPlaceholder,
  onSubmit = () => {},
  onClose = () => {},
}: TextEntryFormProps) => {
  const [textVal, setTextVal] = useState("");

  const handleSubmit = () => {
    onSubmit(textVal);
  };

  return (
    <Box style={`${style}`}>
      <TextArea
        value={textVal}
        onChange={(val = "") => setTextVal(val)}
        placeholder={textAreaPlaceholder}
        style={`text-sm inset-ring-2 inset-ring-blue-500 placeholder:text-sm ${textAreaStyle}`}
      />
      <Box style="flex items-center gap-5">
        <Button style="bg-transparent" onClick={handleSubmit}>
          <Icon icon={tickCircleIcon} desc="tick circled" style="w-5 h-5" />
        </Button>
        <Button style="bg-transparent" onClick={onClose}>
          <Icon icon={crossCircleIcon} desc="cross circled" style="w-5 h-5" />
        </Button>
      </Box>
    </Box>
  );
};

export default TextEntryForm;
