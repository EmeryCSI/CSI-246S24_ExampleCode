function TrackList({ tracks, setCurrentTrack }) {
  console.log(tracks);

  const handleSelect = (track) => {
    console.log(track);
    setCurrentTrack(track);
  };
  return (
    <ul>
      {tracks.map((track) => {
        return (
          <li key={track.id} onClick={() => handleSelect(track)}>
            {track.artist.name} {track.title}
          </li>
        );
      })}
    </ul>
  );
}

export default TrackList;
