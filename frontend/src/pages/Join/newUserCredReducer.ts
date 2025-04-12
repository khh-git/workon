type S = {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
};
type A = {
  type: string;
  payload?: string;
};

const newUserCredInit = {
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
};

const newUserCredReducer = (state: S, action: A): S => {
  const { email, username, password, confirmPassword } = state;

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
    case "CONFIRM_PASSWORD":
      return {
        ...state,
        confirmPassword: action.payload ?? confirmPassword,
      };
    default:
      return state;
  }
};

export { newUserCredInit, newUserCredReducer };
