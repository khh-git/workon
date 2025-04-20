import { loader } from "@assets";
import { ComponentCommonProps } from "@typelib/components";

const Loader = ({ style }: ComponentCommonProps) => {
  return <img className={`${style}`} src={loader} alt="loader" />;
};

export default Loader;
