import Counter from "./Components/Counter";
import Area from "./Components/Area";
import Time from "./Components/Time";
import Joke from "./Components/Joke";
import StudentList from "./Components/StudentList";
import UpdateMessage from "./Components/UpdateMessage";
import { useState } from "react";
function App() {
  const [message, setMessage] = useState("");
  return (
    <>
      {/* <h2>App</h2>
      <Counter />
      <Area />
      <Time /> */}
      {/* <Joke /> */}
      {/* <h3>Message: {message}</h3>
      <UpdateMessage setMessage={setMessage} /> */}
      <StudentList />
    </>
  );
}

export default App;
