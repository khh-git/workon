import { DividerProps } from "@typelib/components";
import styles from "./Divider.module.css";

const Divider = ({ text = "" }: DividerProps) => {
  return (
    <div className={styles.container}>
      {text != "" && <span className="text-sm font-semibold">{text}</span>}
    </div>
  );
};

export default Divider;
