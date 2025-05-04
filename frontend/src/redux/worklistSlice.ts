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
    addListAction: (state, action) => {
      state.push({ id: generateID(), title: action.payload });
    },
    updateListAction: (state, action) => {},
    deleteListAction: (state, action) => {},
  },
});

export const { addListAction, updateListAction, deleteListAction } =
  worklistSlice.actions;

export default worklistSlice.reducer;
