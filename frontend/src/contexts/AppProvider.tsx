import { ReactChildProps } from "@lib/types";
import { ClickAwayProvider } from "./ClickAwayContext";

const AppProvider = ({ children }: ReactChildProps) => {
  return <ClickAwayProvider>{children}</ClickAwayProvider>;
};

export default AppProvider;
