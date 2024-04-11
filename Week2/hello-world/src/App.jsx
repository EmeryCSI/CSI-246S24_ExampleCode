//Before we can use a component we need to import it
import Heading from "./Components/Heading";
//All a component is at its core is a
//JavaScript function
//We are going to return jsx which looks
//a lot like html
function App() {
  //We can only return one parent element
  //If we need to return more than one element
  //you must wrap them in a parent element
  const message = "Components are re-usable";
  return (
    //This is using a fragment
    <>
      <h1>Hello World</h1>
      <Heading headingText="Passed via props"></Heading>
      <Heading headingText="My First React App" />
      {/* We can also pass variables to components */}
      <Heading headingText={message}></Heading>
      <p>This is my first app</p>
    </>
  );
}

//Need to export the component
export default App;
