//we need state
import { useState } from "react";
function Login() {
  //we can either handle each input separately or we can handle the form as a whole
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    // Prevent the default behavior of the form
    event.preventDefault();
    console.log("email ", email);
    console.log("password, ", password);
    console.log("submitted");
  };

  //Create ChangeListeners which handle the input changes
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    // We can handle the submit on the form itself
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            onChange={handleEmailChange}
            value={email}
            id="email"
            type="email"
            name="email"
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            onChange={handlePasswordChange}
            value={password}
            id="password"
            type="password"
            name="password"
          />
        </div>
      </div>

      <p className="form-actions">
        {/* notice how both of these buttons reset the form by default.
          The default behavior of a button instead of a form is to submit it */}
        {/* submit is the default type. We can fix this by setting a type of button */}
        <button className="button button-flat">Reset</button>
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

export default Login;
