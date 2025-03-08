import { createSlice } from "@reduxjs/toolkit";

type NewList = {
  id: number;
  title: string;
};

const init: NewList[] = [];

const worklistSlice = createSlice({
  name: "worklist",
  initialState: init,
  reducers: {
    addNewList: (state, action) => {
      state.push({ id: 1, title: action.payload });
    },
  },
});

export const { addNewList } = worklistSlice.actions;

export default worklistSlice.reducer;
