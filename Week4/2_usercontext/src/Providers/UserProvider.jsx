import { createContext, useState } from "react";
//step 1 create a context that can be imported
export const UserContext = createContext();

//step 2 - Create a provider component
//the provider will give access to the context
export function UserProvider(props) {
  //make a state variable to hold the user
  const [user, setUser] = useState(null);

  //lets make a function that simulates logging a user in
  const login = (username) => {
    //set the name property to the username
    setUser({ name: username });
  };
  //logout
  const logout = () => {
    setUser(null);
  };
  //step 3 return the provider component. all of the information
  //we want to make available via context goes to a value prop
  //render any children inside of the provider
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {/* This renders any components that were passed into props
        via children */}
      {props.children}
    </UserContext.Provider>
  );
}
