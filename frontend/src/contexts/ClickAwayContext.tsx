import { createContext, useRef } from "react";
import { ReactChildProps } from "@lib/types";

type Init = {
  registerClickAwayCallback: (callback: () => void) => void;
};

const init: Init = {
  registerClickAwayCallback: () => {},
};
const ClickAwayContext = createContext(init);

const ClickAwayProvider = ({ children }: ReactChildProps) => {
  const clickAwayCallback = useRef<() => void | null>(null);

  const registerClickAwayCallback = (callback: () => void) => {
    clickAwayCallback.current = callback;
  };
  const handleOnClick = () => {
    clickAwayCallback.current?.();
  };

  return (
    <ClickAwayContext.Provider value={{ registerClickAwayCallback }}>
      <div onClick={handleOnClick}>{children}</div>
    </ClickAwayContext.Provider>
  );
};

export { ClickAwayContext, ClickAwayProvider };
