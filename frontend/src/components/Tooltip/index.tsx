import { ReactChildProps } from "@lib/types";

const Tooltip = ({
  tooltip = "",
  children,
}: ReactChildProps & { tooltip: string }) => {
  return (
    <div className="relative group">
      {children}
      <span className="tooltip-default">{tooltip}</span>
    </div>
  );
};

export default Tooltip;
