import { useState, useEffect } from "react";
function Time() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  //lets use an effect to create an interval
  //clear the interval in the cleanup function
  useEffect(() => {
    const myTimer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    //if I return a function from inside of the effect callback function
    //that function will run when the component is unmounted
    return () => {
      clearInterval(myTimer);
    };
  }, []); //this effect will run once on page load
  return (
    <>
      <h2>Current Time: {time}</h2>
    </>
  );
}

export default Time;
