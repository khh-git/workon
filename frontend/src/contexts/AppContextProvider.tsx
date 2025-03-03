import { ReactChildProps } from "@lib/types";
import { ClickAwayProvider } from "./ClickAwayContext";

const AppContextProvider = ({ children }: ReactChildProps) => {
  return <ClickAwayProvider>{children}</ClickAwayProvider>;
};

export default AppContextProvider;
