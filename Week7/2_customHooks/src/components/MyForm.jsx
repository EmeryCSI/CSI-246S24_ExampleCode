import useForm from "../hooks/useForm";
function MyForm() {
  //bring in our custom hook
  const [formValues, handleChange] = useForm({ name: "", age: "" });
  console.log(formValues);
  return (
    <>
      <h2>MyForm</h2>
      <form>
        <input
          // use our custom hook to handle the change event
          onChange={handleChange}
          value={formValues.name}
          type="text"
          name="name"
          placeholder="Enter Your Name"
        />
        <input
          onChange={handleChange}
          value={formValues.age}
          type="text"
          name="age"
          placeholder="Enter Your Age"
        />
      </form>
    </>
  );
}

export default MyForm;
