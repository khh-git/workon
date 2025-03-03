import { useContext, useEffect } from "react";
import { ReactChildProps } from "@typelib/components";
import { ClickAwayContext } from "@contexts/ClickAwayContext";

const Modal = ({
  open,
  onClose,
  children,
}: ReactChildProps & { open: boolean; onClose: () => void }) => {
  const { registerClickAwayCallback } = useContext(ClickAwayContext);

  useEffect(() => {
    if (open) {
      registerClickAwayCallback(() => {
        onClose();
      });
    } else {
      registerClickAwayCallback(() => {});
    }
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
