import React, { useState } from "react";

const SongForm = () => {

const {title, artist, genre, rating} = useState();

const handleChange = () => {
  
}

  return (
    <form
      // onSubmit={(e) => {
      //   handleClickAddGrocery(e, title);
      //   setTitle("");
      // }}
    >
      <input
        type="text"
        name="title"
        value={title}
        onChange={handleChange}
        placeholder="Add song title"
      />
      <input
        type="text"
        name="artist"
        value={artist}
        onChange={handleChange}
        placeholder="Add artist"
      />
      <input
        type="text"
        name="genre"
        value={genre}
        onChange={handleChange}
        placeholder="Add genre"
      />
      <input
        type="text"
        name="rating"
        value={rating}
        onChange={handleChange}
        placeholder="Add rating"
      />
      <button type="submit">Voeg toe</button>
    </form>
  );
};

export default SongForm;
