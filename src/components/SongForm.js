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
  const [errorMessage, setErrorMessage] = useState(false);

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
      setErrorMessage(false);
    } else {
      setMessage("Please fill out all the fields");
      setErrorMessage(true);
    }
  };

  
  return (
    <div className="song-form">
      <div
        className={`song-form__message ${
          errorMessage ? "song-form__message--error" : ""
        }`}
      >
        {message}
      </div>

      <form
        onSubmit={(event) => {
          onSubmit(event);
        }}
        className="song-form__entry"
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
        <select
          value={newSong.newGenre}
          onChange={handleChange}
          name="newGenre"
        >
          <option value="">Add genre</option>
          <option value="Blues">Blues</option>
          <option value="Country">Country</option>
          <option value="HipHop">HipHop</option>
          <option value="Jazz">Jazz</option>
          <option value="Nederpop">Nederpop</option>
          <option value="Pop">Pop</option>
          <option value="Reggae">Reggae</option>
          <option value="Rock and Roll">Rock and Roll</option>
          <option value="Rock">Rock</option>
        </select>
        <select
          value={newSong.newRating}
          onChange={handleChange}
          name="newRating"
        >
          <option value="">Select a rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button type="submit">Add new song</button>
      </form>
    </div>
  );
};

export default SongForm;
