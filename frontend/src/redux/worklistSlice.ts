import { createSlice } from "@reduxjs/toolkit";
import { generateID } from "@utils";

type NewList = {
  id: string;
  title: string;
};

const init: NewList[] = [];

const worklistSlice = createSlice({
  name: "worklist",
  initialState: init,
  reducers: {
    addNewList: (state, action) => {
      state.push({ id: generateID(), title: action.payload });
    },
  },
});

export const { addNewList } = worklistSlice.actions;

export default worklistSlice.reducer;
