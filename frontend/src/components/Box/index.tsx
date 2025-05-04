import { BoxProps } from "@typelib/components";

const Box = ({ children, style, onClick }: BoxProps) => {
  return (
    <div className={`${style}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Box;
