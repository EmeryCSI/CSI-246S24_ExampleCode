import { useState, useEffect } from "react";
function Joke() {
  const [joke, setJoke] = useState("");
  //a common use of useEffect is to pull data
  //from an API, file, localStorage
  useEffect(() => {
    //lets create an async function
    async function fetchJoke() {
      try {
        //make the reqest
        const response = await fetch("https://api.chucknorris.io/jokes/random");
        //parse the response the json()
        const data = await response.json();
        console.log(data);
        //the joke is inside the value property
        setJoke(data.value);
      } catch (error) {
        console.log(`Error fetching: ${error}`);
      }
    }
    //I can call my fetchJoke function
    fetchJoke();
  }, []);
  return (
    <>
      <h2>Random Chuck Norris Joke</h2>
      <p>{joke}</p>
    </>
  );
}

export default Joke;
