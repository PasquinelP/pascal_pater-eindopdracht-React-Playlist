import React from "react";
import useApp from "../useApp";
import DeleteIcon from "../DeleteIcon";

const Song = (props) => {
  const { deleteListItem } = useApp();

  return (
    <tr className="song-list__item">
      <td>{props.song.title}</td>
      <td>{props.song.artist}</td>
      <td>{props.song.genre}</td>
      <td>{props.song.rating}</td>
      <td>
        <span onClick={() => deleteListItem(props.song.id)}>
          <DeleteIcon />
        </span>
      </td>
    </tr>
  );
};

export default Song;
