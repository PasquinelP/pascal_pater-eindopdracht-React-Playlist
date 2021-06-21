import React from "react";
import SongList from "./SongList";
import useApp from "../useApp";

const SongTable = () => {
  const { sortList, sortRating } = useApp();

  return (
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
          <SongList />
        </tbody>
      </table>
  );
};

export default SongTable;
