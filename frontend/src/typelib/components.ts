import { ReactNode } from "react";

export type ComponentCommonProps = {
  children?: ReactNode;
  style?: string;
};

type ComponentType<T> = {
  [K in keyof T]: T[K];
} & ComponentCommonProps;

export type ButtonProps = ComponentType<{
  onClick?: Function;
}>;

export type BoxProps = ComponentCommonProps;

export type CardProps = ComponentType<{
  id: number;
  draggable: boolean;
}>;

export type DividerProps = {
  text?: string;
};

export type EntrySectionProps = ComponentType<{
  entryButtonStyle?: string;
  entryButtonLabel: string;
  entryFormStyle?: string;
  formTextAreaStyle?: string;
  textAreaPlaceholder?: string;
  onFormSubmit: (text?: string) => void;
}>;

export type IconProps = ComponentType<{
  icon: string;
  desc?: string;
}>;

export type InputProps = ComponentType<{
  value?: string;
  onChange?: (text?: string) => void;
  type?: string;
  placeholder?: string;
}>;

export type LogoTextProps = ComponentType<{
  icon: string;
  text: string;
  textStyle?: string;
  iconStyle?: string;
}>;

export type ModalProps = ComponentType<{
  open: boolean;
  onClose: () => void;
}>;

export type TitleProps = {
  logoStyle?: string;
  titleStyle?: string;
  title?: string;
};

export type TextAreaProps = ComponentType<{
  value?: string;
  onChange?: (text?: string) => void;
  placeholder?: string;
}>;

export type TextEntryFormProps = ComponentType<{
  textAreaStyle?: string;
  textAreaPlaceholder?: string;
  onSubmit?: (text?: string) => void;
  onClose?: () => void;
}>;

export type TextFieldProps = ComponentType<{
  text: string;
}>;

export type TooltipProps = ComponentType<{
  tooltip: string;
}>;
