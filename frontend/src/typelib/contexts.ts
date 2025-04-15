export enum EStatus {
  None,
  Success,
  Failed,
}

export type TAuthInit = {
  isLoggedIn: boolean;
  loginStatus: EStatus;
  signUpStatus: EStatus;
  login: () => void;
  logout: () => void;
  signUp: () => void;
};

export type TCallback = (() => void) | null;

export type TClickAwayInit = {
  addClickAwayCallback: (callback: TCallback) => void;
  removeClickAwayCallback: () => void;
};
