import { useState } from "react";
function useForm(values) {
  const [formValues, setFormValues] = useState(values);
  //function that handles the change of form imputs
  const handleChange = (e) => {
    //update the state with the new values from the event
    setFormValues((prevValues) => ({
      ...prevValues, // Copy all the previous values into the new state object
      [e.target.name]: e.target.value, // Update only the targeted field value
    }));
  };
  //This hook returns an array containing the form values
  //and a function for changing them
  return [formValues, handleChange];
}

export default useForm;
