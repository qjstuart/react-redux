import { useSelector, useDispatch } from "react-redux";

import { countActions } from "../store";
import classes from "./Counter.module.css";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const showCount = useSelector((state) => state.showCount);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(countActions.toggle());
  };

  const incrementHandler = () => {
    dispatch(countActions.increment());
  };

  const decrementHandler = () => {
    dispatch(countActions.decrement());
  };

  const increaseHandler = () => {
    dispatch(countActions.increase(10));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCount && <div className={classes.value}>{count}</div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increase by 10</button>
      </div>
    </main>
  );
};

export default Counter;
