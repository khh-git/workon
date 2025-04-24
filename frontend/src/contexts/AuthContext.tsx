import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import { useCreateContext } from "@hooks";
import { EStatus, TAuthInit } from "@typelib/contexts";
import { ComponentCommonProps } from "@typelib/components";
import { setItemInLocalStorage, getItemInLocalStorage } from "@utils";
import { userLogin, userSignup, fetchUser } from "@api/user";
import { useNavigate } from "react-router";

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
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const signUp = async (newUserCreds: {}, onSuccess: () => void) => {
    userSignup(
      newUserCreds,
      (responce: AxiosResponse) => {
        setSignUpStatus(EStatus.Success);
        onSuccess();
      },
      (error: unknown) => {
        setSignUpStatus(EStatus.Failed);
      }
    );
  };

  const login = async (creds: {}, onSuccess: () => void) => {
    userLogin(
      creds,
      (responce: AxiosResponse) => {
        const { data } = responce;
        setItemInLocalStorage("token", `Bearer ${data.token}`);
        fetchUserProfile();
        navigate("/");
      },
      (error: unknown) => {
        setLoginInfo({ ...loginInfo, loginStatus: EStatus.Failed });
      }
    );
  };

  const logout = () => {};

  const fetchUserProfile = async () => {
    const token = getItemInLocalStorage("token");

    fetchUser(
      token ?? "",
      (response: AxiosResponse) => {
        const { data } = response;
        setUser(data);
        setLoginInfo({
          ...loginInfo,
          isLoggedIn: true,
          loginStatus: EStatus.Success,
        });
      },
      (error: unknown) => {
        setLoginInfo({ ...loginInfo, loginStatus: EStatus.Failed });
      }
    );
  };

  return (
    <AuthContext.Provider
      value={{ user, signUpStatus, ...loginInfo, signUp, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
