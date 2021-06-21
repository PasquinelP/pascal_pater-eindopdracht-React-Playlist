import React from "react";
import useApp from "../useApp";

const FilterRating = () => {
  const { filteredRating, handleRatingChange } = useApp();

  return (
    <>

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

    </>
  );
};

export default FilterRating;
