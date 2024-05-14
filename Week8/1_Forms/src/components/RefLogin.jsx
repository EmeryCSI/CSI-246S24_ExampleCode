import { useRef, useState } from "react";

function RefLogin() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  //Here we are going to store mutiple error messages for each input
  //the email could be empty or invalid
  //The password might be to short or missing a symbol etc...
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validateEmail = (email) => {
    // Basic email validation pattern
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const validatePassword = (password) => {
    // Password must be at least 8 characters long
    // and contain at least one number, one uppercase letter, one lowercase letter, and one special character
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
    return pattern.test(password);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    let emailError = "";
    let passwordError = "";

    // Email validation
    if (!email) {
      emailError = "Email is required";
    } else if (!validateEmail(email)) {
      emailError = "Email is not valid";
    }

    // Password validation
    if (!password) {
      passwordError = "Password is required";
    } else if (!validatePassword(password)) {
      passwordError = "Password is not valid";
    }

    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError });
    } else {
      setErrors({ email: "", password: "" });
      // Proceed with form submission
      console.log(`email: ${email}, password: ${password}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input ref={emailRef} id="email" type="email" name="email" />
        </div>
        <div className="control-error">
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            ref={passwordRef}
            id="password"
            type="password"
            name="password"
          />
        </div>
        <div className="control-error">
          {errors.password && <p>{errors.password}</p>}
        </div>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button type="submit" className="button">
          Login
        </button>
      </p>
    </form>
  );
}

export default RefLogin;
