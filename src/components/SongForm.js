import React, { useState } from "react";
import useApp from "./useApp";

const SongForm = () => {
  const { addSong } = useApp();

  const initialNewSong = {
    newTitle: "",
    newArtist: "",
    newGenre: "",
    newRating: "",
  };

  const initialMessage = "Enter a new song to the playlist";

  const [newSong, setNewSong] = useState(initialNewSong);
  const [message, setMessage] = useState(initialMessage);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewSong({ ...newSong, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (
      newSong.newTitle !== "" &&
      newSong.newArtist !== "" &&
      newSong.newGenre !== "" &&
      newSong.newRating !== ""
    ) {
      addSong(event, newSong);
      setNewSong(initialNewSong);
      setMessage(initialMessage);
    } else {
      setMessage("Please fill out all the fields");
    }
  };

  return (
    <>
      <div>{message}</div>

      <form
        onSubmit={(event) => {
          onSubmit(event);
        }}
      >
        <input
          type="text"
          name="newTitle"
          value={newSong.newTitle}
          onChange={handleChange}
          placeholder="Add song title"
        />
        <input
          type="text"
          name="newArtist"
          value={newSong.newArtist}
          onChange={handleChange}
          placeholder="Add artist"
        />
        <input
          type="text"
          name="newGenre"
          value={newSong.newGenre}
          onChange={handleChange}
          placeholder="Add genre"
        />
        <input
          type="text"
          name="newRating"
          value={newSong.newRating}
          onChange={handleChange}
          placeholder="Add rating"
        />
        <button type="submit">Add new song</button>
      </form>

    </>
  );
};

export default SongForm;
