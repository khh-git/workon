import { useRef } from "react";
import { useCreateContext } from "@hooks";
import { ComponentCommonProps } from "@typelib/components";
import { TCallback, TClickAwayInit } from "@typelib/contexts";

const init: TClickAwayInit = {
  addClickAwayCallback: () => {},
  removeClickAwayCallback: () => {},
};

const ClickAwayContext = useCreateContext(init);

const ClickAwayProvider = ({ children }: ComponentCommonProps) => {
  const clickAwayCallback = useRef<() => void | null>(null);

  const addClickAwayCallback = (callback: TCallback) => {
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
