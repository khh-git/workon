import { WorkListOpener } from "@components";
import { useAppSelector } from "@hooks";

const WorkSpace = () => {
  const worklists = useAppSelector((state) => state.worklists);

  return (
    <div className="flex gap-3 items-center *:w-[245px] ">
      <WorkListOpener />
    </div>
  );
};

export default WorkSpace;
