import React from "react";
import SongTable from "./SongTable";


const SongContainer = () => {

  return (
    <div className="song-list">
      <div className="song-list__message">* to sort click on column names</div>
      <SongTable />
    </div>
  );
};

export default SongContainer;
