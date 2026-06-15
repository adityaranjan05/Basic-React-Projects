import { useState } from "react";
import "./App.css"

function App() {
  let [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1)
  }

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  const reset = () => {
    setCount(0);
  }

  return (
    <>
      <div className="app_wrapper">
        <h1>Counter App</h1>
        <h3>Current Count: {count}</h3>
        <div className="buttons">
          <button onClick={increase}>Increase</button>
          <button onClick={decrease}>Decrease</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default App;
