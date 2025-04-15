type S = {
  email: string;
  username: string;
  password: string;
};
type A = {
  type: string;
  payload?: string;
};

const newUserCredInit = {
  email: "",
  username: "",
  password: "",
};

const newUserCredReducer = (state: S, action: A): S => {
  const { email, username, password } = state;

  switch (action.type) {
    case "EMAIL":
      return {
        ...state,
        email: action.payload ?? email,
      };
    case "USERNAME":
      return {
        ...state,
        username: action.payload ?? username,
      };
    case "PASSWORD":
      return {
        ...state,
        password: action.payload ?? password,
      };
    default:
      return state;
  }
};

export { newUserCredInit, newUserCredReducer };
