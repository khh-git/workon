import { Button, Icon, Tooltip } from "@components";
import { helpIcon, searchIcon, userIcon } from "@assets";

const NavMenu = () => {
  return (
    <div className="flex items-center ml-auto gap-6">
      <Button style="flex gap-1 items-center px-2 border border-gray-200 rounded-3xl bg-gray-50">
        <Icon
          icon={searchIcon}
          desc="a search icon with ctrl-k text"
          style="w-3.5 h-3.5"
        />
        <span className="text-xs">Ctrl K</span>
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

export default NavMenu;
