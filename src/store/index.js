import { createStore } from "redux";

const initialState = { count: 0, showCount: true };

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
  if (action.type === "toggle_show_count") {
    return {
      ...state,
      showCount: !state.showCount
      
    }
  }

  return state;
}

const store = createStore(myReducer);

export default store;
