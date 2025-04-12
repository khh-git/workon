type S = {
  username: string;
  password: string;
};
type A = {
  type: string;
  payload?: string;
};

const credInit: S = {
  username: "",
  password: "",
};

const credReducer = (state: S, action: A): S => {
  switch (action.type) {
    case "USERNAME":
      return {
        ...state,
        username: action.payload ?? state.username,
      };
    case "PASSWORD":
      return {
        ...state,
        password: action.payload ?? state.password,
      };
    default:
      return state;
  }
};

export { credInit, credReducer };
