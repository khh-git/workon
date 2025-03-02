import { MouseEvent } from "react";
import { ButtonProps } from "@lib/types";

const Button = ({ style = "", onClick = () => {}, children }: ButtonProps) => {
  const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    // e.stopPropagation();
    onClick();
  };

  return (
    <button className={`${style} button-default`} onClick={handleOnClick}>
      {children}
    </button>
  );
};

export default Button;
