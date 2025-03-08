import { configureStore } from "@reduxjs/toolkit";
import { worklistReducer } from "@redux/reducers";

const store = configureStore({
  reducer: {
    worklists: worklistReducer,
  },
});

export { store };
