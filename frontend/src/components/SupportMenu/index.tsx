import { Button, Icon, Tooltip } from "@components";
import { helpIcon, searchIcon, userIcon } from "@assets";

const SupportMenu = () => {
  return (
    <div className="flex items-center ml-auto gap-3">
      <Button style="hover:bg-transparent">
        <div className="flex gap-1 items-center px-2 py-0.5 border border-gray-200 rounded-full bg-gray-50">
          <Icon
            icon={searchIcon}
            desc="a search icon with ctrl-k text"
            style="w-4 h-4"
          />
          <span className="text-xs text-gray-500 font-medium">Ctrl K</span>
        </div>
      </Button>

      <Tooltip tooltip="Help">
        <Button>
          <Icon
            icon={helpIcon}
            desc="a question mark circled around"
            style="w-5 h-5"
          />
        </Button>
      </Tooltip>

      <Tooltip tooltip="Account">
        <Button>
          <Icon icon={userIcon} desc="a user" style="w-5 h-5" />
        </Button>
      </Tooltip>
    </div>
  );
};

export default SupportMenu;
