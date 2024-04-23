import { UserContext } from "../Providers/UserProvider";
import { useContext, useState } from "react";
function Heading() {
  //To get the data from the provider
  //we call useContext and pass the context
  const { user, login, logout } = useContext(UserContext);
  //lets create a state variable to hold the username
  const [username, setUsername] = useState("");
  return (
    <>
      {/* I want to conditionally render something if a user
      is logged in, something else if not logged in */}
      {user ? (
        <div>
          <p>{user.name} is logged in</p>
          <button onClick={logout}>Log out</button>
        </div>
      ) : (
        <div>
          <h4>Please log in: </h4>
          <input
            type="text"
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <button onClick={() => login(username)}>Log in</button>
        </div>
      )}
    </>
  );
}

export default Heading;
