import React from "react";
import Song from "./Song";

const SongList = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Song</th>
          <th>Artist</th>
          <th>Genre</th>
          <th>Rating</th>
        </tr>
        </thead>
        <tbody>
          <Song />
      </tbody>
    </table>
  );
};

export default SongList;
