import { v4 as uuidv4 } from "uuid";

export const generateID = () => uuidv4();

export const setItemInLocalStorage = (keyname: string, keyvalue: string) => {
  window.localStorage.setItem(keyname, keyvalue);
};
export const getItemInLocalStorage = (keyname: string): string | null => {
  return window.localStorage.getItem(keyname);
};
