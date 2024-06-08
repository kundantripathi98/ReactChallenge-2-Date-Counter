import { useState } from "react";
import Text from "./Text";

let Count = ({ step }) => {
  const [count, setCount] = useState(0);
  const [currentDate, setCurrentDate] = useState(new Date());

  function decreaseCount(days) {
    setCount((c) => c - step);
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - days);
    setCurrentDate(newDate);
  }

  function increaseCount(days) {
    setCount((c) => c + step);
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + days);
    setCurrentDate(newDate);
  }

  return (
    <div className="App">
      <div className="StepCounter">
        <button onClick={() => decreaseCount(step)}>-</button>
        <h1>Count : {count}</h1>
        <button onClick={() => increaseCount(step)}>+</button>
      </div>

      <Text count={count} currentDate={currentDate} />
    </div>
  );
};

export default Count;
