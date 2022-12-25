import { createSlice } from "@reduxjs/toolkit";
interface initialState {
  count: number;
}
const initialState: initialState = {
  count: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state): void => {
      state.count++;
    },
    decrement: (state): void => {
      if (state.count != 0) state.count--;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export default counterSlice.reducer;
export const { increment, decrement, reset } = counterSlice.actions;
