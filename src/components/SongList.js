import React from "react";
import Song from "./Song";
import useApp from "./useApp";


const SongList = () => {

  const { sortList, sortRating } = useApp();

  return (
    <div className="song-list">
      <div className="song-list__message">* to sort click on column names</div>
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
    </div>
  );
};

export default SongList;
