import { ButtonProps } from "@lib/types";

const Button = ({ style = "", children }: ButtonProps) => {
  return <button className={`${style} button-default`}>{children}</button>;
};

export default Button;
