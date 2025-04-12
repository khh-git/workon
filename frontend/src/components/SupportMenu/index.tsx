import { Button, Icon, Tooltip } from "@components";
import { helpIcon, searchIcon, userIcon } from "@assets";
import styles from "./SupportMenu.module.css";

const SupportMenu = () => {
  return (
    <div className="flex items-center ml-auto sm:gap-3">
      <Button style={styles.searchButton}>
        <Icon
          icon={searchIcon}
          desc="a search icon with ctrl-k text"
          style="w-4 h-4"
        />
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
          <Icon icon={userIcon} desc="a user" style="w-5 h-5" />
        </Button>
      </Tooltip>
    </div>
  );
};

export default SupportMenu;
