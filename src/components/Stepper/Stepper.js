import style from "./Stepper.module.css";

const Stepper = ({ itemQuantity, increment, decrement }) => {
  return (
    <div className={style.stepper}>
      <button class="steppers" onClick={decrement}>
        -
      </button>
      <p id="count">{itemQuantity}</p>
      <button class="steppers" onClick={increment}>
        +
      </button>
    </div>
  );
};

export default Stepper;
