import Heading from "./Components/Heading";
import Content from "./Components/Content";
import { UserProvider } from "./Providers/UserProvider";
function App() {
  return (
    <>
      <h2>App</h2>
      {/* wrap the components that need access to the context
      inside of the provider component */}
      <UserProvider>
        <Heading />
        <Content />
      </UserProvider>
    </>
  );
}

export default App;
