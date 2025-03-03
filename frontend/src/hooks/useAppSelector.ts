import { RootState } from "@typelib/redux";
import { useSelector } from "react-redux";

const useAppSelector = useSelector.withTypes<RootState>();

export default useAppSelector;
