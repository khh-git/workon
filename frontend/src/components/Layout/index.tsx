import { ComponentCommonProps } from "@typelib/components";
import { LogoText, NavBar, SupportMenu, Views } from "@components";
import { brandLogo } from "@assets";
import { useContext } from "react";
import { AuthContext } from "@contexts/AuthContext";

const Layout = ({ children }: ComponentCommonProps) => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      {isLoggedIn && (
        <header>
          <NavBar>
            <LogoText
              icon={brandLogo}
              iconStyle="w-5.5 h-5.5"
              text="Workon"
              textStyle="text-base font-bold text-gray-600"
            />
            <Views />
            <SupportMenu />
          </NavBar>
        </header>
      )}
      <main className={!isLoggedIn ? "bg-gray-100 " : ""}>{children}</main>
      {isLoggedIn && <footer></footer>}
    </>
  );
};

export default Layout;
