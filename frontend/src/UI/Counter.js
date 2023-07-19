import { useEffect, useState } from "react";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";

import classes from "./Counter.module.css";

const Counter = ({ onChange, value = 0 }) => {
  const [count, setCount] = useState(value);

  useEffect(() => {
    if (onChange) {
      onChange(count);
    }
  }, [count]);

  return (
    <div className={classes.container}>
      <BiSolidUpArrow
        className={classes.arrow}
        color="#6638dd"
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      />
      <p>{count}</p>
      <BiSolidDownArrow
        className={classes.arrow}
        color="#6638dd"
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
      />
    </div>
  );
};

export default Counter;
