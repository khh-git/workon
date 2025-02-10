import { ReactChildProps } from "@lib/types";

const Tooltip = ({
  tooltip = "",
  children,
}: ReactChildProps & { tooltip?: string }) => {
  return (
    <div className="relative group">
      {children}
      <span className="hidden px-1 py-px absolute top-[150%] left-1/2 -translate-x-1/2 text-xs bg-gray-600 text-white rounded-sm group-hover:block">
        {tooltip}
      </span>
    </div>
  );
};

export default Tooltip;
