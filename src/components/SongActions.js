import React from "react";
import useApp from "./useApp";
import Filters from "./Filters";


const SongActions = () => {

  const { deleteSongList } = useApp();


  return (
    <div className="song-list__actions">
      <Filters />
      <div className="song-list__delete">
        <button onClick={deleteSongList}>Empty playlist</button>
      </div>
    </div>
  );
};

export default SongActions;
