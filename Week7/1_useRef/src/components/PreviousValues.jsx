import { useState, useRef, useEffect } from "react";
function PreviousValues() {
  const [inputValue, setInputValue] = useState(0);
  const previousInputValue = useRef(0);

  useEffect(() => {
    // Update the previous value ref only after rendering
    previousInputValue.current = inputValue;
  }, [inputValue]); // Depend on inputValue to update after it changes

  const handleIncrement = () => {
    previousInputValue.current++;
  };

  const handleDecrement = () => {
    previousInputValue.current--;
  };

  return (
    <div>
      <h1>Track Previous Input</h1>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(parseInt(e.target.value))}
        placeholder="Type a number..."
      />

      <div>
        <p>Current Input: {inputValue}</p>
        <p>Previous Input: {previousInputValue.current}</p>
        <div>
          <h3>Change Previous Value</h3>
          <p>Notice that this does not trigger a re render of the component</p>
          <button onClick={handleIncrement}>+</button>
          <button onClick={handleDecrement}>-</button>
        </div>
      </div>
    </div>
  );
}

export default PreviousValues;
