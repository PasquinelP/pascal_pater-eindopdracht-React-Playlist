import React, { useContext } from "react";
import { AppContext } from "./AppContext";

const Song = () => {
  const { songs } = useContext(AppContext);

  const song = songs.map((song) => (
    <tr key={song.id}>
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
