import React from "react";
import Song from "./Song";
import useApp from "./useApp";


const SongList = () => {

  const { deleteSongList, sortList, sortRating } = useApp();

  return (
    <div className="song-list">
      <table>
        <thead>
          <tr>
            <th>
              <span onClick={sortList}>Title</span>
            </th>
            <th>
              <span onClick={sortList}>Artist</span>
            </th>
            <th>
              <span onClick={sortList}>Genre</span>
            </th>
            <th>
              <span onClick={sortRating}>Rating</span>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <Song />
        </tbody>
      </table>
      <div className="song-list__delete">
        <button onClick={deleteSongList}>Empty playlist</button>
      </div>
    </div>
  );
};

export default SongList;
