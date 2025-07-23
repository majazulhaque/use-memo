import { useMemo, useState } from "react";
import useCustomUseMemo from "./hooks/custom-use-memo";
import "./styles.css";

function expensiveCalculation(num) {
  console.log("Running expensiveCalculation...");
  for (let i = 0; i < 100000; i++) {}
  return num * 2;
}

export default function App() {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState("");

  const doubledValue = useCustomUseMemo(
    () => expensiveCalculation(counter),
    [counter]
  );
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <h2>Doubled Value: {doubledValue}</h2>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something..."
      />
    </div>
  );
}
