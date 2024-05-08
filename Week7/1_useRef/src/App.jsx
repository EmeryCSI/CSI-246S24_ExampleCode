import IntroUseRef from "./components/IntroUseRef";
import PreviousValues from "./components/PreviousValues";
import CameraRef from "./components/CameraRef";
function App() {
  return (
    <>
      <h2>App</h2>
      <p>useRef() is a hook that allows for direct DOM access in react.</p>
      <p>It is used to store references to DOM nodes or React elements.</p>
      <IntroUseRef />
      <p>
        A common use of ref is to track a previous value of a state variable.
      </p>
      <PreviousValues />
      <p>Another common use of ref is to access the camera.</p>
      <CameraRef />
    </>
  );
}

export default App;
