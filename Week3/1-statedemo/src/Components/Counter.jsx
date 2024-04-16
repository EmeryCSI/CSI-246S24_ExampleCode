//I need to import useState from React
import { useState } from "react";
function Counter() {
  //lets create a state variable called counter
  //const [variable, setVariable] = useState(initialValue)
  const [counter, setCounter] = useState(0);
  //lets make a function that handles the increment click
  function handleIncrement() {
    //We want this function to set the value of counter to counter + 1;
    //You have created a race condition
    //setCounter(counter + 1);
    //setCounter((previousState) => previousState + 1)
    setCounter((previousCounter) => previousCounter + 1);
  }
  return (
    <>
      <h2>Counter</h2>
      <p>Current Count: {counter}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button
        onClick={() => setCounter((previousCounter) => previousCounter - 1)}
      >
        Decrement
      </button>
    </>
  );
}

export default Counter;
