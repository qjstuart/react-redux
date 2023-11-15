import { createSlice, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./count";
import authReducer from "./auth"

// const initialCounterState = { count: 0, showCount: true };
// const initialAuthState = { isAuthenticated: false };

// slices can be in separate files
// const countSlice = createSlice({
//   name: "counter",
//   initialState: initialCounterState,
//   reducers: {
//     increment(state) {
//       state.count++;
//     },
//     decrement(state) {
//       state.count--;
//     },
//     increase(state, action) {
//       state.count = state.count + action.payload;
//     },
//     toggle(state) {
//       state.showCount = !state.showCount;
//     },
//   },
// });

// const authSlice = createSlice({
//   name: "auth",
//   initialState: initialAuthState,
//   reducers: {
//     login(state) {
//       state.isAuthenticated = true;
//     },
//     logout(state) {
//       state.isAuthenticated = false;
//     },
//   },
// });

// call configureStore() once
// regardless of how many slices
const store = configureStore({
  // reducer: countSlice.reducer,
  reducer: { count: counterReducer, auth: authReducer },
});

export default store;
