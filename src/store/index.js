import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { count: 0, showCount: true };
const initialAuthState = { isAuthenticated: false };

// slices can be in separate files
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

console.log(countSlice);

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// call configureStore() once
// regardless of how many slices
const store = configureStore({
  // reducer: countSlice.reducer,
  reducer: { count: countSlice.reducer, auth: authSlice.reducer },
});

export const countActions = countSlice.actions;
export const authActions = authSlice.actions;

export default store;
