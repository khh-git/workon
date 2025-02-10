import { ButtonProps } from "@lib/types";

const Button = ({
  style = "p-1 rounded-sm hover:bg-gray-100",
  children,
}: ButtonProps) => {
  return (
    <button className={`hover:cursor-pointer ${style}`}>{children}</button>
  );
};

export default Button;
