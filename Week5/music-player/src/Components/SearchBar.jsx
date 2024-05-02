import { useState } from "react";
function SearchBar({ searchTracks }) {
  //console.log(searchTracks);
  const [searchValue, setSearchValue] = useState("");
  //lets make a function to run when the form is submitted
  const handleSubmit = (e) => {
    //stop from submission from reloading the page
    e.preventDefault();
    //when user clicks search im going to call searchTracks
    searchTracks(searchValue);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
