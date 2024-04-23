import { useContext } from "react";
import { UserContext } from "../Providers/UserProvider";
function Content() {
  //we can get the user from context
  const { user } = useContext(UserContext);
  return (
    <>
      {user ? (
        <div>
          <h4>{user.name}</h4>
          <p>Here is the exclusive content</p>
        </div>
      ) : (
        <div>
          <p>Please login for exclusive content</p>
        </div>
      )}
    </>
  );
}

export default Content;
