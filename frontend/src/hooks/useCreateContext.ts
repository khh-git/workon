import { createContext } from "react";

const useCreateContext = (defaultValue: any) => {
  return createContext(defaultValue);
};

export default useCreateContext;
