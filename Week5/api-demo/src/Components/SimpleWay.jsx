import { useState, useEffect } from "react";
function SimpleWay() {
  // Track the posts with state
  const [posts, setPosts] = useState([]);
  // fetch(url).then(callback that parse the data).then(handle data)
  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //       .then((res) => res.json())
  //       .then((data) => setPosts(data))
  //       .catch((error) => console.log(error));
  //   }, []);
  //it is now more common to use a try/catch async await
  //inside of useEffect I am going to create an async function
  //and then call it
  useEffect(() => {
    //define an async function
    const fetchData = async () => {
      //try our fetch call
      try {
        //await the response from the fetch
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        //We have to check if the response is ok
        if (!response.ok) {
          //checking if the status code is in the 200s
          throw new Error("response not ok");
        }
        const data = await response.json();
        //set the data
        setPosts(data);
      } catch (error) {
        console.log(`There was an error ${error.message}`);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <h2>Simple Way</h2>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default SimpleWay;
