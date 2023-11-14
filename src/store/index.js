import { createStore } from "redux";

const initialState = { count: 0 };

function myReducer(state = initialState, action) {
  if (action.type === "increment") {
    return {
      ...state,
      count: state.count + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      ...state,
      count: state.count - 1,
    };
  }
  if (action.type === "increase") {
    return {
      ...state,
      count: state.count + action.amount,
    };
  }

  return state;
}

const store = createStore(myReducer);

export default store;
