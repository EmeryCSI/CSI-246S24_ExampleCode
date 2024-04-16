import { useState } from "react";
function GroceyList() {
  //state can also be used to track arrays
  const [groceries, setGroceries] = useState(["Milk", "Eggs", "Bread"]);
  const [newItem, setNewItem] = useState("");
  //function that handles adding to the array
  //we need to setGroceries to a new array with newItem
  const handleAdd = () => {
    //lets add new item to setGroceries
    //use the spread operator
    setGroceries([...groceries, newItem]);
    setNewItem("");
  };
  return (
    <>
      <h2>Grocery List</h2>
      <ul>
        {groceries.map((element, index) => {
          return <li key={index}>{element}</li>;
        })}
      </ul>
      <input
        onChange={(e) => setNewItem(e.target.value)}
        value={newItem}
        type="text"
      />
      <button onClick={handleAdd}>Add to list</button>
    </>
  );
}

export default GroceyList;
