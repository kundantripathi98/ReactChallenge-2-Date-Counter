import { useState } from "react";
import Step from "./components/Step";
import Count from "./components/Count";

export const useStep = () => {
  const [step, setStep] = useState(1);
  return { step, setStep };
};

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Step />
    </div>
  );
}
