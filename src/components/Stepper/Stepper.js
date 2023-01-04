import React, { useState } from "react";
import style from "./Stepper.module.css";

const Stepper = () => {
  let [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className={style.stepper}>
      <button class="steppers" onClick={decrement}>
        -
      </button>
      <p id="count">{count}</p>
      <button class="steppers" onClick={increment}>
        +
      </button>
    </div>
  );
};

export default Stepper;
