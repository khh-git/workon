import { createContext, useRef } from "react";
import { ReactChildProps } from "@typelib/components";
import { Callback, ClickAwayInit } from "@typelib/contexts";

const init: ClickAwayInit = {
  addClickAwayCallback: () => {},
  removeClickAwayCallback: () => {},
};

const ClickAwayContext = createContext(init);

const ClickAwayProvider = ({ children }: ReactChildProps) => {
  const clickAwayCallback = useRef<() => void | null>(null);

  const addClickAwayCallback = (callback: Callback) => {
    clickAwayCallback.current = callback;
  };
  const removeClickAwayCallback = () => {
    clickAwayCallback.current = null;
  };
  const handleOnClick = () => {
    clickAwayCallback.current?.();
  };

  return (
    <ClickAwayContext.Provider
      value={{ addClickAwayCallback, removeClickAwayCallback }}
    >
      <div onClick={handleOnClick}>{children}</div>
    </ClickAwayContext.Provider>
  );
};

export { ClickAwayContext, ClickAwayProvider };
