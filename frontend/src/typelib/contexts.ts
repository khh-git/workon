export type Callback = (() => void) | null;

export type ClickAwayInit = {
  addClickAwayCallback: (callback: Callback) => void;
  removeClickAwayCallback: () => void;
};
