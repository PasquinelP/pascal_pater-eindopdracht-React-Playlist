import React from "react";
import useApp from "./useApp";

const Song = () => {
  const { songs } = useApp();

  const song = songs.map((song) => (
    <tr className="song-list__item" key={song.id}>
      <td>{song.title}</td>
      <td>{song.artist}</td>
      <td>{song.genre}</td>
      <td>{song.rating}</td>
    </tr>
  ));

  return (
    <>
      {song}
    </>
    
  );
};

export default Song;
