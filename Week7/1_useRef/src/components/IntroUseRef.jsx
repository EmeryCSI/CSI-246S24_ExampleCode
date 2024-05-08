import { useRef } from "react";
function IntroUseRef() {
  //create a ref object and assign it a value of null
  const inputRef = useRef(null);
  console.log(inputRef);
  const focusInput = () => {
    //current property of the ref object is used to access the DOM element
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "lightblue";
  };

  return (
    <>
      <h2>Use Ref to access an element</h2>
      {/* create an element with the ref attribute */}
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus</button>
    </>
  );
}

export default IntroUseRef;
