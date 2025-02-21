import { Button, Icon } from "@components";
import { downIcon, upIcon } from "@assets";

const Views = () => {
  return (
    <div className="ml-2 flex gap-2">
      <Button style="flex gap-1 items-center px-3 py-1">
        <span className="text-sm font-medium text-gray-700">Workspaces</span>
        <Icon
          icon={downIcon}
          desc="a search icon with ctrl-k text"
          style="w-3 h-2"
        />
      </Button>
      <Button style="flex gap-1 items-center px-3 py-1">
        <span className="text-sm font-medium text-gray-700">Recent</span>
        <Icon
          icon={downIcon}
          desc="a search icon with ctrl-k text"
          style="w-3 h-2"
        />
      </Button>
      <Button style="flex gap-1 items-center px-3 py-1">
        <span className="text-sm font-medium text-gray-700">Starred</span>
        <Icon
          icon={downIcon}
          desc="a search icon with ctrl-k text"
          style="w-3 h-2"
        />
      </Button>
    </div>
  );
};

export default Views;
