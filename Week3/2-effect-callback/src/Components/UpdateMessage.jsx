function UpdateMessage(props) {
  return (
    <>
      <h2>Change The Message in App.jsx</h2>
      {/* We can call the function that was passed in */}
      <button onClick={() => props.setMessage("Changed from Child")}>
        Change App.jsx
      </button>
    </>
  );
}

export default UpdateMessage;
