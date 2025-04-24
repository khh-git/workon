import { ComponentCommonProps } from "@typelib/components";

const NavBar = ({ children }: ComponentCommonProps) => {
  return <nav className="flex items-center">{children}</nav>;
};

export default NavBar;
