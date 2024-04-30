import { useState, useEffect } from "react";
import { getPosts } from "../Data/PostRepository";
function BetterWay() {
  const [posts, setPosts] = useState([]);
  //track loading or not
  const [loading, setLoading] = useState(true);
  //track if there has been an error
  const [error, setError] = useState(false);
  useEffect(() => {
    //make an async function and call it
    const fetchData = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  //show loading if loading
  if (loading) {
    return <p>Loading...</p>;
  }
  //show error if error
  if (error) {
    return <p>Error, try again later</p>;
  }
  return (
    <>
      <h2>Better Way</h2>
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

export default BetterWay;
