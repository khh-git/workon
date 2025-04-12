import { ChangeEvent, useRef, useState } from "react";
import { cross, loader } from "@assets";
import { InputProps } from "@typelib/components";
import styles from "./Input.module.css";

const Input = ({
  value = undefined,
  onChange = () => {},
  type,
  placeholder,
}: InputProps) => {
  const [ucVal, setUcVal] = useState("");
  const ipRef = useRef<HTMLInputElement>(null);

  const isControlled = value != undefined;
  const currentVal = isControlled ? value : ucVal;

  const handleText = (e: ChangeEvent<HTMLInputElement>) => {
    if (isControlled) {
      onChange(e.target.value);
    } else {
      setUcVal(e.target.value);
    }
  };
  const clearText = () => {
    if (isControlled) {
      onChange("");
    } else {
      setUcVal("");
    }

    ipRef.current?.focus();
  };

  return (
    <div className={styles.container}>
      <input
        ref={ipRef}
        className={styles.ip}
        type={type}
        value={currentVal}
        onChange={handleText}
        spellCheck={false}
        placeholder={placeholder}
      />
      {currentVal != "" && (
        <button className="cursor-pointer" onClick={clearText}>
          <img className="w-6 h-6" src={cross} alt="cross" />
          {/* <img className="w-6 h-6 animate-spin" src={loader} alt="loader" /> */}
        </button>
      )}
    </div>
  );
};

export default Input;
