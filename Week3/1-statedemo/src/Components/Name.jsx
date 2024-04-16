import { useState } from "react";
function Name() {
  //lets make state variables for firstName
  //and lastName
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  //log the variables
  //console.log(firstName);
  //console.log(setFirstName);
  const handleFirstNameChange = (e) => {
    //lets just log the event
    //console.log(e);
    //console.log(e.target.value);
    //The value is working
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    //lets just log the event
    //console.log(e);
    //console.log(e.target.value);
    //The value is working
    setLastName(e.target.value);
  };
  return (
    <>
      <h2>Name</h2>
      <div>
        <label htmlFor="first-name">First Name:</label>
        <input
          onChange={handleFirstNameChange}
          id="first-name"
          value={firstName}
          type="text"
        />
      </div>
      <div>
        <label htmlFor="last-name">Last Name:</label>
        <input
          onChange={handleLastNameChange}
          id="last-name"
          value={lastName}
          type="text"
        />
      </div>
      <div>
        <h4>First Name: {firstName}</h4>
        <h4>Last Name: {lastName}</h4>
        <h4>Full Name: {firstName + " " + lastName}</h4>
      </div>
    </>
  );
}

export default Name;
