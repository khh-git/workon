import { ChangeEvent, useRef } from "react";
import { TextAreaProps } from "@typelib/components";

const TextArea = ({
  value = "",
  onChange = () => {},
  placeholder,
  style,
}: TextAreaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);

    if (!textareaRef.current) return;
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
  };

  return (
    <textarea
      value={value}
      spellCheck={false}
      ref={textareaRef}
      onChange={handleTextChange}
      autoFocus
      rows={1}
      maxLength={512}
      placeholder={placeholder}
      className={`textarea-default ${style}`}
    />
  );
};

export default TextArea;
