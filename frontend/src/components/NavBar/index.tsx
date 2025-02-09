import { ReactNode } from "react";
import styles from "./navbar.module.css";

type NavBarProps = {
  children?: ReactNode;
};

const NavBar = ({ children }: NavBarProps) => {
  return <nav className="flex hover:cursor-pointer">{children}</nav>;
};

export default NavBar;
