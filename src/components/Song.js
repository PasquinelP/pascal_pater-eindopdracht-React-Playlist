import React from "react";
import useApp from "./useApp";
import DeleteIcon from "./DeleteIcon";

const Song = () => {
  const { songs, deleteListItem, filteredGenre, filteredRating } = useApp();

  let filteredList = [...songs];

  // filtering for genre
  if (filteredGenre !== "All") {
    filteredList = filteredList.filter((song) => {
      return song.genre === filteredGenre;
    });
  }

  // filtering for rating
  if (filteredRating !== "All") {
    filteredList = filteredList.filter((song) => {
      return song.rating === parseInt(filteredRating);
    });
  }

  const song = filteredList.map((song) => (
    <tr className="song-list__item" key={song.id}>
      <td>{song.title}</td>
      <td>{song.artist}</td>
      <td>{song.genre}</td>
      <td>{song.rating}</td>
      <td>
        <span onClick={() => deleteListItem(song.id)}>
          <DeleteIcon />
        </span>
      </td>
    </tr>
  ));

  return (
    <>
      {song}
    </>
    
  );
};

export default Song;
