import { Button, Icon, Tooltip } from "@components";
import { helpIcon, searchIcon, userIcon } from "@assets";
import "./SupportMenu.css";

const SupportMenu = () => {
  return (
    <div className="flex items-center ml-auto sm:gap-3">
      <Button style="search-button">
        <Icon icon={searchIcon} desc="a search icon with ctrl-k text" />
        <span className="text-xs text-gray-500 font-medium hidden lg:block">
          Ctrl K
        </span>
      </Button>

      <Tooltip tooltip="Help">
        <Button>
          <Icon icon={helpIcon} desc="a question mark circled around" />
        </Button>
      </Tooltip>

      <Tooltip tooltip="Account">
        <Button>
          <Icon icon={userIcon} desc="a user" />
        </Button>
      </Tooltip>
    </div>
  );
};

export default SupportMenu;
