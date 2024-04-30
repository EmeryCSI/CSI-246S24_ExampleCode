//were gonna use axios
import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

//Im going to make a function that I want to be able to import
export const getPosts = async () => {
  //axios.get(url, parameters)
  try {
    const response = await axios.get(BASE_URL);
    //automatically parses to json and it is inside of data object
    return response.data;
  } catch (error) {
    throw error;
  }
};
