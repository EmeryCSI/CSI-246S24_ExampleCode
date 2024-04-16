import { useState, useEffect } from "react";
function Area() {
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [area, setArea] = useState(0);
  //lets create an effect that runs whenever length or
  //width are updated
  //useEffect(callback, [dependencies])
  useEffect(() => {
    setArea(length * width);
  }, [length, width]);
  return (
    <>
      <h2>Area</h2>
      <div>
        <label htmlFor="length">Length: </label>
        <input
          onChange={(e) => setLength(e.target.value)}
          type="number"
          value={length}
          id="length"
        />
      </div>
      <div>
        <label htmlFor="width">Width: </label>
        <input
          onChange={(e) => setWidth(e.target.value)}
          type="number"
          value={width}
          id="length"
        />
      </div>
      <div>
        <p>Area of rectangle: {area}</p>
      </div>
    </>
  );
}

export default Area;
