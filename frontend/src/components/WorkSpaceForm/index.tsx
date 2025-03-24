import { useState } from "react";
import { Button, Icon, Modal } from "@components";
import { crossCircleIcon, plusCircleIcon, tickCircleIcon } from "@assets";
import { WSFormProps } from "@typelib/components";
import styles from "./WorkSpaceForm.module.css";

const WorkSpaceForm = ({
  formLabel,
  labelStyle,
  onFormSubmit,
  children,
}: WSFormProps) => {
  const [showForm, setShowForm] = useState(false);

  const fillForm = () => {
    setShowForm(true);
  };
  const closeForm = () => {
    setShowForm(false);
  };
  const onSubmit = () => {
    onFormSubmit();
    closeForm();
  };

  return (
    <>
      {!showForm && (
        <Button style={`${styles.addList} ${labelStyle}`} onClick={fillForm}>
          <Icon icon={plusCircleIcon} desc="plus circled" />
          <span className="text-sm font-semibold text-gray-600">
            {formLabel}
          </span>
        </Button>
      )}
      <Modal open={showForm} onClose={closeForm}>
        <div className="bg-amber-100 rounded-md flex flex-col gap-1 p-2">
          {children}
          <div className="flex items-center gap-5">
            <Button style="bg-transparent" onClick={onSubmit}>
              <Icon icon={tickCircleIcon} desc="tick circled" style="w-5 h-5" />
            </Button>
            <Button style="bg-transparent" onClick={closeForm}>
              <Icon
                icon={crossCircleIcon}
                desc="cross circled"
                style="w-5 h-5"
              />
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default WorkSpaceForm;
