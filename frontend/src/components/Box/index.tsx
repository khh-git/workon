import { BoxProps } from "@typelib/components";

const Box = ({ children, style }: BoxProps) => {
  return <div className={`${style}`}>{children}</div>;
};

export default Box;
