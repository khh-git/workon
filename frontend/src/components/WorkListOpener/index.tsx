import { useRef, useState } from "react";
import { useAppDispatch } from "@hooks";
import { addNewList } from "@redux/actions";
import { Button, Icon, Modal, TextArea } from "@components";
import { crossCircle, plusCircle, tickCircle } from "@assets";
import { TextRef } from "@typelib/components";
import styles from "./WorkListOpener.module.css";

const WorkListOpener = () => {
  const [showForm, setShowForm] = useState(false);
  const textRef = useRef<TextRef>(null);
  const dispatch = useAppDispatch();

  const fillForm = () => {
    setShowForm(true);
  };
  const closeForm = () => {
    setShowForm(false);
  };
  const createList = () => {
    const listName = textRef.current?.getText();
    dispatch(addNewList(listName));
    setShowForm(false);
  };

  return (
    <>
      {!showForm && (
        <Button style={styles.addList} onClick={fillForm}>
          <Icon icon={plusCircle} desc="plus circled" />
          <span className="text-sm font-semibold text-gray-700">Add List</span>
        </Button>
      )}
      <Modal open={showForm} onClose={closeForm}>
        <div className="bg-amber-100 p-2 rounded-md gap-1">
          <TextArea
            ref={textRef}
            placeholder="Enter List Name..."
            style="text-sm text-gray-600 font-semibold inset-ring-2 inset-ring-blue-500 placeholder:text-sm placeholder:font-semibold "
          />
          <div className="flex items-center gap-5">
            <Button style="bg-transparent" onClick={createList}>
              <Icon icon={tickCircle} desc="tick circled" style="w-5 h-5" />
            </Button>
            <Button style="bg-transparent" onClick={closeForm}>
              <Icon icon={crossCircle} desc="cross circled" style="w-5 h-5" />
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default WorkListOpener;
