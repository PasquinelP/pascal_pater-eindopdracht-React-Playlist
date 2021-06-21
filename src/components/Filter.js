import React from "react";
import useApp from "./useApp";

const Filter = () => {
  
  const { filteredGenre, filteredRating, handleGenreChange, handleRatingChange } = useApp();


  return (
    <div className="filter-options">

      {/* Filter genre */}
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

      {/* Filter rating */}
      <label htmlFor="filteredRating">Filter rating:</label>
      <select
        value={filteredRating}
        onChange={handleRatingChange}
        name="filteredRating"
      >
        <option value="All">All ratings</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      
    </div>
  );
};

export default Filter;
