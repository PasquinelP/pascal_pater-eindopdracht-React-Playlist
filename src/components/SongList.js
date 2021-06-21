import React from "react";
import useApp from "./useApp";
import Song from "./Song";


const SongList = () => {
  const { songs, filteredGenre, filteredRating } = useApp();

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

  const songsList = filteredList.map((song) => (
    <Song key={song.id} song={song} />
  ));

  return (
    <>
      {songsList}
    </>
    
  );
};

export default SongList;
