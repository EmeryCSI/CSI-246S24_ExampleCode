import { useState } from "react";
function useLocalStorage(key, initialValue) {
  //function which gets the item from storage
  const getInitialValue = () => {
    //get the item from storage
    const item = localStorage.getItem(key);
    //return the item if one was found
    //else return the initial value
    return item ? JSON.parse(item) : initialValue;
  };
  //you can pass a function to useState
  //to calculate the initial state
  const [storedValue, setStoredValue] = useState(getInitialValue);

  //function that wraps the useState setter
  // Define setValue function which updates the state and syncs it with local storage
  const setValue = (value) => {
    try {
      // Determine the value to store. If 'value' is a function, call it with the current state
      // as an argument to get the new value. Otherwise, use 'value' directly.
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      // Update the React state with the new value
      setStoredValue(valueToStore);

      // Update local storage with the new value. Convert the value to a JSON string first,
      // since local storage can only store strings.
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // If an error occurs during the update process, log it to the console
      console.log(error);
    }
  };
  //return an array containing the value and the setValue function
  return [storedValue, setValue];
}

export default useLocalStorage;
