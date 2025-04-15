import { ComponentCommonProps } from "@typelib/components";
import { AuthProvider } from "./AuthContext";
import { ClickAwayProvider } from "./ClickAwayContext";

const AppContextProvider = ({ children }: ComponentCommonProps) => {
  return (
    <ClickAwayProvider>
      <AuthProvider>{children}</AuthProvider>
    </ClickAwayProvider>
  );
};

export default AppContextProvider;
