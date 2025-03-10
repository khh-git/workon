import { useContext, useEffect } from "react";
import { ModalProps } from "@typelib/components";
import { ClickAwayContext } from "@contexts/ClickAwayContext";

const Modal = ({ open, onClose, children }: ModalProps) => {
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
        >
          {children}
        </div>
      )}
    </>
  );
};

export default Modal;
