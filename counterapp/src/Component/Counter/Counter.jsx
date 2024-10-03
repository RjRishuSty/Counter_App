import React, { useState } from "react";
import Styles from "./Counter.module.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={Styles.card}>
      <h2 className={Styles.heading}>Counter App</h2>
      <p className={Styles.countValue}>Count: {`${count}`}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
