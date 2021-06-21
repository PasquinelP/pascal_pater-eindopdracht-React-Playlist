import React from "react";
import useApp from "../useApp";

const FilterGenre = () => {
  const { filteredGenre, handleGenreChange } = useApp();

  return (
    <>
    
      <label htmlFor="filteredGenre">Filter genre:</label>
      <select
        value={filteredGenre}
        onChange={handleGenreChange}
        name="filteredGenre"
      >
        <option value="All">All genres</option>
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

    </>
  );
};

export default FilterGenre;
