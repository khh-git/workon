import { Icon } from "@components";
import { brandLogo } from "@assets";

const Title = () => {
  return (
    <div className="p-1 flex gap-2 items-center cursor-default">
      <Icon
        icon={brandLogo}
        desc="a rounded square box with checklist items"
        style="w-5 h-5"
      />
      <span className="text-base font-bold text-gray-600">Workon</span>
    </div>
  );
};

export default Title;
