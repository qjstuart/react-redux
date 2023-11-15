import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { count: 0, showCount: true };

const countSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    increase(state, action) {
      state.count = state.count + action.payload;
    },
    toggle(state) {
      state.showCount = !state.showCount;
    },
  },
});

export const countActions = countSlice.actions;

export default countSlice.reducer;
