import React from "react";
import useApp from "./useApp";
import Filter from "./Filter";


const SongActions = () => {

  const { deleteSongList } = useApp();


  return (
    <div className="song-list__actions">
      <Filter />
      <div className="song-list__delete">
        <button onClick={deleteSongList}>Empty playlist</button>
      </div>
    </div>
  );
};

export default SongActions;
