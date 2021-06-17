import React from "react";
import Song from "./Song";
import useApp from "./useApp";


const SongList = () => {

  const { deleteSongList, sortByTitle } = useApp();

  return (
    <div className="song-list">
      <table>
        <thead>
          <tr>
            <th>
              <span onClick={sortByTitle}>Song</span>
            </th>
            <th>Artist</th>
            <th>Genre</th>
            <th>Rating</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <Song />
        </tbody>
      </table>
      <button className="song-list__delete" onClick={deleteSongList}>
        Empty playlist
      </button>
    </div>
  );
};

export default SongList;
