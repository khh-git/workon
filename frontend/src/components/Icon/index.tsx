import { IconProps } from "@lib/types";

const Icon = ({ icon, style, desc }: IconProps) => {
  return <img className={`${style} icon-default`} src={icon} alt={desc} />;
};

export default Icon;
