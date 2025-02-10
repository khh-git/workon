import { IconProps } from "@lib/types";

const Icon = ({ icon, style, desc }: IconProps) => {
  return <img className={style} src={icon} alt={desc} />;
};

export default Icon;
