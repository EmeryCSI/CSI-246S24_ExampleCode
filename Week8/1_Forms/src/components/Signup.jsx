function Signup() {
  // Using the FormData Constructor to get the values of the inputs
  // The FormData constructor takes in the target and returns a FormData object
  const handleSubmit = (event) => {
    event.preventDefault();
    //Create a new form data object
    const formData = new FormData(event.target);
    //The get function allows us to get the value of the input by the name
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(`email: ${email}, password: ${password}`);
    //We can also create an object from the FormData object
    //entires returns an iterator of all the key value pairs
    console.log(formData.entries());
    //We can use the spread operator to create an object from the iterator
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    //You will notice that the checkboxes are not included in the object
    //This is because the checkboxes are not checked
    //We can use the getAll function to get all the values of the checkboxes
    const acquisition = formData.getAll("acquisition");
    console.log(acquisition);
    //We can merge the data object with the acquisition array
    const mergedData = { ...data, acquisition };
    console.log(mergedData);

    //If you want to reset the form after submission
    //This is the same method that is called when you click the reset button
    event.target.reset();
  };

  //lets explore validation
  //There are different ways to validate a form
  //You can validate with every keystroke - Here you need to use the onChange event and state
  //You can validate when input loses focus - Here you need to use the onBlur event and state
  //You can validate on submit - Here you just need the onsubmit event, state is optional. This would work with useRef
  //You can use built in validation attributes - This is the easiest way to validate a form

  return (
    <form onSubmit={handleSubmit}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className="control">
        {/* In order to use FormData all inputs must have the name prop */}
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" />
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            required
            minLength={6}
          />
        </div>

        <div className="control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
            required
            minLength={6}
          />
        </div>
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name="first-name" required />
        </div>

        <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="last-name" required />
        </div>
      </div>

      <div className="control">
        <label htmlFor="phone">What best describes your role?</label>
        <select id="role" name="role">
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
          />
          <label htmlFor="google">Google</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>

        <div className="control">
          <input type="checkbox" id="other" name="acquisition" value="other" />
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input type="checkbox" id="terms-and-conditions" name="terms" />I
          agree to the terms and conditions
        </label>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button type="submit" className="button">
          Sign up
        </button>
      </p>
    </form>
  );
}

export default Signup;
