import { createSlice } from "@reduxjs/toolkit";

export const incdecSlice = createSlice({
  name: "incdec",
  initialState: 10,
  reducers: {
    Increment: (state, action) => {
      return (state += action.payload);
    },
    Decrement: (state, action) => {
      return (state -=action.payload);
    },
  },
});

export const { Increment, Decrement } = incdecSlice.actions;
export default incdecSlice.reducer;
