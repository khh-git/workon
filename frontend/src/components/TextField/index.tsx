import { TextFieldProps } from "@typelib/components";

const TextField = ({ text, style }: TextFieldProps) => {
  return <span className={`${style}`}>{text}</span>;
};

export default TextField;
