import { IconProps } from "@typelib/components";

const Icon = ({ icon, style, desc }: IconProps) => {
  return <img className={`${style} icon-default`} src={icon} alt={desc} />;
};

export default Icon;
