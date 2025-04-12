import { Icon } from "@components";
import { brandLogo } from "@assets";
import { TitleProps } from "@typelib/components";

const Title = ({ logoStyle, titleStyle, title = "Workon" }: TitleProps) => {
  return (
    <div className="p-1 flex gap-2 items-center justify-center cursor-default">
      <Icon
        icon={brandLogo}
        desc="a rounded square box with checklist items"
        style={logoStyle}
      />
      <span className={`${titleStyle} title-default`}>{title}</span>
    </div>
  );
};

export default Title;
