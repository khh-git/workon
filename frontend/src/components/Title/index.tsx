import { Button, Icon } from "@components";
import { brandLogo } from "@assets";

const Title = () => {
  return (
    <Button style="flex gap-2 items-center p-1 rounded-sm hover:bg-gray-100">
      <Icon
        icon={brandLogo}
        desc="a rounded square box with checklist items"
        style="w-6 h-6"
      />
      <span className="text-lg font-medium text-gray-700">Workon</span>
    </Button>
  );
};

export default Title;
