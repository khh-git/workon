import { useEffect, useState } from "react";
import axios from "axios";
import { useCreateContext } from "@hooks";
import { EStatus, TAuthInit } from "@typelib/contexts";
import { ComponentCommonProps } from "@typelib/components";
import { setItemInLocalStorage, getItemInLocalStorage } from "@utils";

const init: TAuthInit = {
  isLoggedIn: false,
  loginStatus: EStatus.None,
  signUpStatus: EStatus.None,
  login: () => {},
  logout: () => {},
  signUp: () => {},
};

const AuthContext = useCreateContext(init);

const AuthProvider = ({ children }: ComponentCommonProps) => {
  const [signUpStatus, setSignUpStatus] = useState(EStatus.None);
  const [loginInfo, setLoginInfo] = useState({
    isLoggedIn: false,
    loginStatus: EStatus.None,
  });

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const signUp = async (newUserCreds: {}, successCallback: () => void) => {
    try {
      const responce = await axios.post(
        "http://localhost:5000/join",
        newUserCreds
      );
      console.log(responce);

      setSignUpStatus(EStatus.Success);
      successCallback();
    } catch (err) {
      console.log(err);
      setSignUpStatus(EStatus.Failed);
    }
  };

  const login = async (creds: {}) => {
    try {
      const response = await axios.post("http://localhost:5000/getin", creds);
      console.log(response);
      setItemInLocalStorage("token", `Bearer ${response.data.token}`);
      fetchUserProfile();
    } catch (err) {
      console.log("Error: ", err);
      setLoginInfo({ ...loginInfo, loginStatus: EStatus.Failed });
    }
  };

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get("http://localhost:5000/profile", {
        headers: {
          authorization: getItemInLocalStorage("token"),
        },
      });
      console.log(response);

      setLoginInfo({
        ...loginInfo,
        isLoggedIn: true,
        loginStatus: EStatus.Success,
      });
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  return (
    <AuthContext.Provider value={{ signUpStatus, ...loginInfo, signUp, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
