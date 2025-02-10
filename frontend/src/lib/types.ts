import { ReactNode } from "react";

export interface ReactChildProps {
  children?: ReactNode;
}

export interface IconProps {
  icon: string;
  style?: string;
  desc: string;
}

export interface ButtonProps extends ReactChildProps {
  style?: string;
}
