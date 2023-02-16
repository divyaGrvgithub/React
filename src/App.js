import React, { useState } from "react";
import './App.css'
import Button from './Components/Button';
 

export default function App() {
  const [count, setCount] = useState(0);

  let incrementCount = () => {
    setCount(count + 1);
  };

  let decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="app">
      <div>
        <div className="count">
          <h3>Counter:</h3>
          <h1>{count}</h1>
        </div>
        <div className="buttons">
          <Button title={"+IncrementCount"} action={incrementCount} />
          <Button title={"-DecrementCount"} action={decrementCount} />
        </div>
      </div>
    </div>
  );
}