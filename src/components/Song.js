import React, { useContext } from "react";
import { AppContext } from "./AppContext";

const Song = () => {
  const { songs } = useContext(AppContext);

  const song = songs.map((song) => (
    <li key={song.id} value={song.title}>
      <span>{song.title} </span>
      <span>{song.artist} </span>
      <span>{song.genre} </span>
      <span>{song.rating}</span>
    </li>
  ))

  return (
    <>
      {song}
    </>
    
  );
};

export default Song;
