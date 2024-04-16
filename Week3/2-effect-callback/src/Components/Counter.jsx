import { useState, useEffect } from "react";
function Counter() {
  const [counter, setCounter] = useState(0);
  //useEffect Syntax: useEffect(callback, [dependencies])
  //this will run every update
  useEffect(() => {
    console.log(`Count is ${counter}`);
  });
  return (
    <>
      <h2>Counter</h2>
      <p>{counter}</p>
      <button
        onClick={() => setCounter((currentCounter) => currentCounter + 1)}
      >
        Add 1
      </button>
    </>
  );
}

export default Counter;
