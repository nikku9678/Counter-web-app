import React, { useState } from "react";
import "./Counter.css";
function Counter() {
  const [count, setCount] = useState(0);

  const [startValue, setStartValue] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [Counter_name, setCounter_name] = useState("Hello Counter");
  const [name, showName] = useState(true);
  const [start, setStart] = useState(false);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleStart = () => {
    setStart(!start);

    setStartValue(Number(inputValue));
    setCount(Number(inputValue));
    setInputValue(0);
  };

  const handleName = () => {
    showName(!name);
  };

  const handleReset = () => {
    setCount(0);
    setStartValue(0);
    setInputValue("");
  };
  const handleSetValue = () => {
    setStart(!start);
    setCount(Number(inputValue));
  };

  return (
    <div className="counter">
      <h1>{Counter_name}</h1> 
      
      <p style={{ fontSize: "30px" }}>Count: {count}</p>
      <div className="counter-btn">
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
      </div>
      {start ? (
        <>
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter a start value"
          />
          <button onClick={handleSetValue}>Set</button>
        </>
      ) : (
        <>
          <button onClick={handleStart}>Start</button>
        </>
      )}

      <button onClick={handleReset}>Reset</button>

      {name ? (
        <>
          <button onClick={handleName} id="set_name">
            Counter name
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            value={Counter_name}
            onChange={(e) => setCounter_name(e.target.value)}
          />
          <button onClick={() => showName(!name)}>Set</button>
        </>
      )}
    </div>
  );
}

export default Counter;
