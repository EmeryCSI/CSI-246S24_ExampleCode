import { useState } from "react";
function Conditional({ isLoading }) {
  //lets add a boolean state variable
  const [show, setShow] = useState(false);
  //lets add a function that will toggle that variable
  const toggle = () => {
    //remember we never change a state variable directly
    //instead we provide a callback function to change it
    setShow((show) => !show);
  };
  //The simplest way to conditional render

  if (isLoading) {
    return (
      <>
        <h3>Loading...</h3>
      </>
    );
  } else {
    return (
      <>
        <h3>Done Loading</h3>
        {/* We cannot just use an if down here 
        Conditional rendering with ternary*/}
        {show ? (
          <div>
            <h2>Show is true</h2>
            <p>This is using a ternary</p>
          </div>
        ) : (
          <div>
            <h2>Show is false</h2>
            <p>This is using a ternary</p>
          </div>
        )}
        {/* Using Logical && - ShortCircuiting */}
        {show && (
          <div>
            <h2>Show is true</h2>
            <p>This is using logical &&</p>
          </div>
        )}
        <button onClick={toggle}>Toggle Show</button>
      </>
    );
  }
}

export default Conditional;
