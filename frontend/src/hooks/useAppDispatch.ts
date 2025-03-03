import { AppDispatch } from "@typelib/redux";
import { useDispatch } from "react-redux";

const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default useAppDispatch;
