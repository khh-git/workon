import { Button, Icon } from "@components";
import { brandLogo } from "@assets";

const Title = () => {
  return (
    <Button style="flex gap-2 items-center px-3 py-1">
      <Icon
        icon={brandLogo}
        desc="a rounded square box with checklist items"
        style="w-5 h-5"
      />
      <span className="text-base font-bold text-gray-600">Workon</span>
    </Button>
  );
};

export default Title;
