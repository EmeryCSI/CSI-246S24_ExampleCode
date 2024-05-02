import { useState } from "react";
import axios from "axios";
import SearchBar from "./Components/SearchBar";
import TrackList from "./Components/TrackList";
import Player from "./Components/Player";
import "./App.css";

function App() {
  //  I can import information from .env
  // import.meta.env.NAME_OF_KEY
  const BASE_URL = import.meta.env.VITE_DEEZER_SEARCH_URL;
  const API_KEY = import.meta.env.VITE_DEEZER_API_KEY;
  const API_HOST = import.meta.env.VITE_DEEZER_API_HOST;
  // console.log(BASE_URL);
  // console.log(API_KEY);
  // console.log(API_HOST);
  //we need to keep track of all the songs that came back
  const [tracks, setTracks] = useState([]);
  //we need track the song that the user selected
  const [currentTrack, setCurrentTrack] = useState(null);
  //we need a function that takes in a query sends a request to the API
  //and then updates tracks
  //lets make an async function that takes in a query
  const searchTracks = async (query) => {
    const options = {
      method: "GET",
      url: BASE_URL,
      params: { q: query },
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": API_HOST,
      },
    };

    try {
      const response = await axios.request(options);
      // axios automatically parses the response to json and makes it available via a data object
      //console.log(response.data);
      setTracks(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="App">
      <SearchBar searchTracks={searchTracks} />
      <TrackList setCurrentTrack={setCurrentTrack} tracks={tracks} />
      <Player track={currentTrack} />
    </div>
  );
}

export default App;
