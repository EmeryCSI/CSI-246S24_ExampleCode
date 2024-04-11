import UserCard from "./Components/UserCard";
import CardStyledInComponent from "./Components/CardStyledInComponent";
import CardStyledWithProps from "./Components/CardStyledWithProps";
//import the css files
import "./App.css";
function App() {
  //Array of User Objects
  const users = [
    {
      username: "johnDoe123",
      phone: "123-456-7890",
      email: "johndoe@example.com",
      address: "123 Main St, Anytown, AN 12345",
    },
    {
      username: "janeDoe456",
      phone: "987-654-3210",
      email: "janedoe@example.com",
      address: "456 Oak St, Sometown, SM 65432",
    },
    {
      username: "samSmith789",
      phone: "555-678-1234",
      email: "samsmith@example.com",
      address: "789 Pine St, Yourtown, YT 78901",
    },
  ];
  return (
    <>
      <h2>Hello World</h2>
      <UserCard
        userName="Test User"
        phone="123-456-7890"
        email="none@none.com"
        address="123 Nowhere St"
      ></UserCard>
      <CardStyledInComponent
        userName="Test User"
        phone="123-456-7890"
        email="none@none.com"
        address="123 Nowhere St"
      />
      <CardStyledWithProps
        userName="Test User"
        phone="123-456-7890"
        email="none@none.com"
        address="123 Nowhere St"
        color="blue"
        backgroundColor="orange"
        // This prop has a default value of 20px
        // if nothing is passed to it
        borderRadius="100px"
      />
      <h2>These cards are rendered using the array data</h2>
      {/* render a usercard for each user in the users array - map() */}
      {users.map((user, index) => {
        return (
          <UserCard
            key={index}
            userName={user.username}
            phone={user.phone}
            email={user.email}
            address={user.address}
          />
        );
      })}
    </>
  );
}

export default App;
