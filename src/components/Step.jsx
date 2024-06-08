import { useState } from "react";
import Count from "./Count";
let Step = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="App">
      <div className="StepCounter">
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <h1>Step : {step}</h1>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>

      <Count step={step} />
    </div>
  );
};

export default Step;
