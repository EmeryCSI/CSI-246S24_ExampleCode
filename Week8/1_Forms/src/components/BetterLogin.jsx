//we need state
import { useState } from "react";
function BetterLogin() {
  //handle the form as a whole
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  //handle when item loses focus - onBlur
  //we need to track if the email or password has been touched
  const [edited, setEdited] = useState({
    email: false,
    password: false,
  });
  //validate on every keystroke
  //validate the email
  //if the email is not empty and does not include an @ symbol it is invalid
  //const emailIsInvalid = values.email !== "" && !values.email.includes("@");
  //using blur

  const emailIsInvalid = edited.email && !values.email.includes("@");
  const passwordIsInvalid = edited.password && values.password.length < 6;

  //whenever an input is blurred we set the edited value to true
  const handleInputBlur = (key) => {
    setEdited((previousValues) => ({
      ...previousValues,
      [key]: true,
    }));
  };

  const handleSubmit = (event) => {
    // Prevent the default behavior of the form
    event.preventDefault();
    console.log("submitted");
    console.log(values);
  };

  //only one handle change function
  //we can use the key to determine which input is being changed
  const handleChange = (key, value) => {
    //we are taking in all previous values and using the key to determine which value to change
    setValues((previousValues) => ({
      ...previousValues,
      [key]: value,
    }));
  };

  return (
    // We can handle the submit on the form itself
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            //pass the key and the event to the handleChange function
            onChange={(event) => handleChange("email", event.target.value)}
            //pass the key to the blur handler
            onBlur={() => handleInputBlur("email")}
            value={values.email}
            id="email"
            type="email"
            name="email"
          />
        </div>
        <div className="control-error">
          {emailIsInvalid && <p>Please enter a valid email address</p>}
        </div>
        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            onChange={(event) => handleChange("password", event.target.value)}
            onBlur={() => handleInputBlur("password")}
            value={values.password}
            id="password"
            type="password"
            name="password"
          />
        </div>
        <div className="control-error">
          {passwordIsInvalid && <p>Password must be 6 characters</p>}
        </div>
      </div>

      <p className="form-actions">
        {/* notice how both of these buttons reset the form by default.
          The default behavior of a button instead of a form is to submit it */}
        {/* submit is the default type. We can fix this by setting a type of button */}
        <button type="reset" className="button button-flat">
          Reset
        </button>
        {/* <button type="button" onClick={handleSubmit} className="button">
          Login
        </button> */}
        {/* A better way to to this is to handle the submit on the form */}
        <button type="submit" className="button">
          Login
        </button>
      </p>
    </form>
  );
}

export default BetterLogin;
