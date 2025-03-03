import { ReactChildProps } from "@typelib/components";

const NavBar = ({ children }: ReactChildProps) => {
  return <nav className="flex items-center">{children}</nav>;
};

export default NavBar;
