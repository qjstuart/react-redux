import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { count: 0, showCount: true };

// slices can be in separate files
const countSlice = createSlice({
  name: "counter",
  initialState,
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

// function myReducer(state = initialState, action) {
//   if (action.type === "increment") {
//     return {
//       ...state,
//       count: state.count + 1,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       ...state,
//       count: state.count - 1,
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       ...state,
//       count: state.count + action.amount,
//     };
//   }
//   if (action.type === "toggle_show_count") {
//     return {
//       ...state,
//       showCount: !state.showCount,
//     };
//   }

//   return state;
// }

const store = configureStore({
  reducer: countSlice.reducer,
});

export const countActions = countSlice.actions;

export default store;
