import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counterSlice",
  initialState: initialState,
  reducers: {
    increment: (state, action) => {
      console.log(action, "hihi");
      state.count = state.count + action.payload;
      // state.count = state.count + action.payload
    },
  },
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;
