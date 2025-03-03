import { MouseEvent } from "react";
import { ButtonProps } from "@typelib/components";

const Button = ({ style = "", onClick = () => {}, children }: ButtonProps) => {
  const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    onClick();
  };

  return (
    <button className={`${style} button-default`} onClick={handleOnClick}>
      {children}
    </button>
  );
};

export default Button;
