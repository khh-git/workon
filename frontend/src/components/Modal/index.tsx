import { useContext, useEffect } from "react";
import { ModalProps } from "@typelib/components";
import { ClickAwayContext } from "@contexts/ClickAwayContext";

const Modal = ({ style, open, onClose, children }: ModalProps) => {
  const { addClickAwayCallback, removeClickAwayCallback } =
    useContext(ClickAwayContext);

  useEffect(() => {
    if (open) {
      addClickAwayCallback(() => {
        onClose();
      });
    }
    return () => {
      removeClickAwayCallback();
    };
  }, [open]);

  return (
    <>
      {open && (
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={style}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default Modal;
