function Player({ track }) {
  //console.log(track);
  if (!track) {
    return <h2>Select a track</h2>;
  }
  return (
    <div className="Player">
      <h3>Now Playing:</h3>
      <img src={track.artist.picture_big} alt={track.artist.name} />
      <img src={track.album.cover_big} alt={track.album.title} />
      <p>
        {track.artist.name}: {track.title}
      </p>
      <audio controls src={track.preview}></audio>
    </div>
  );
}

export default Player;
