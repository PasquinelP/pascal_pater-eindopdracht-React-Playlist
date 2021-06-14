import React, { useState } from "react";

const initialNewSong = {
  newTitle: "",
  newArtist: "",
  newGenre: "",
  newRating: "",
};



const SongForm = () => {

const [newSong, setNewSong] = useState(initialNewSong);

const handleChange = (event) => {
  const {name, value} = event.target;
  setNewSong({...newSong, [name]: value,})
}

console.log(newSong)

  return (
    <>
      <form
      // onSubmit={(e) => {
      //   handleClickAddGrocery(e, title);
      //   setTitle("");
      // }}
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
        <button type="submit">Voeg toe</button>
      </form>

      <p>
        {newSong.newTitle} {newSong.newArtist}
      </p>
    </>
  );
};

export default SongForm;
