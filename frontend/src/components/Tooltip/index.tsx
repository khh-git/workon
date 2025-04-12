import { TooltipProps } from "@typelib/components";

const Tooltip = ({ tooltip = "", children }: TooltipProps) => {
  return (
    <div className="relative group flex h-fit">
      {children}
      <span className="tooltip-default">{tooltip}</span>
    </div>
  );
};

export default Tooltip;
