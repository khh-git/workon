import { TextAreaProps } from "@typelib/components";
import { useImperativeHandle, useRef } from "react";

const TextArea = ({ ref, placeholder, style }: TextAreaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleTextChange = () => {
    if (!textareaRef.current) return;
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
  };

  useImperativeHandle(
    ref,
    () => {
      return {
        getText() {
          return textareaRef.current?.value;
        },
      };
    },
    []
  );

  return (
    <textarea
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
