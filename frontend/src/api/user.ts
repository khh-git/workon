import axios, { AxiosResponse } from "axios";

const userSignup = async (
  newUserCreds: {},
  onSuccess: (responce: AxiosResponse) => void,
  onFailure: (err: unknown) => void
) => {
  try {
    const responce = await axios.post(
      "http://localhost:5000/join",
      newUserCreds
    );

    onSuccess(responce);
  } catch (err) {
    onFailure(err);
  }
};

const userLogin = async (
  creds: {},
  onSuccess: (responce: AxiosResponse) => void,
  onFailure: (err: unknown) => void
) => {
  try {
    const response = await axios.post("http://localhost:5000/getin", creds);
    onSuccess(response);
  } catch (err) {
    onFailure(err);
  }
};

const fetchUser = async (
  token: string,
  onSuccess: (responce: AxiosResponse) => void,
  onFailure: (err: unknown) => void
) => {
  try {
    const response = await axios.get("http://localhost:5000/profile", {
      headers: {
        authorization: token,
      },
    });

    onSuccess(response);
  } catch (err) {
    onFailure(err);
  }
};

export { userSignup, userLogin, fetchUser };
