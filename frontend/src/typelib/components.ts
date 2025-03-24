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

export type ModalProps = {
  open: boolean;
  onClose: () => void;
} & ReactChildProps;

export type TitleProps = {
  logoStyle?: string;
  titleStyle?: string;
};

export interface TextAreaProps {
  ref?: Ref<TextRef> | undefined;
  placeholder?: string;
  style?: string;
}
export interface TextRef {
  getText: () => string | undefined;
}

export type WSFormProps = {
  labelStyle?: string;
  formLabel: string;
  onFormSubmit: () => void;
} & ReactChildProps;
