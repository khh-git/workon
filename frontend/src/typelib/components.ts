import { ReactNode, Ref } from "react";

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
  onClick?: Function;
}

export interface TextRef {
  getText: () => string | undefined;
}
export interface TextAreaProps {
  ref?: Ref<TextRef> | undefined;
  placeholder?: string;
  style?: string;
}
