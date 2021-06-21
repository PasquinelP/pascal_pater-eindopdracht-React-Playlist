import React from "react";
import FilterGenre from "./FilterGenre";
import FilterRating from "./FilterRating";

const Filters = () => {

  return (
    <div className="filter-options">
      <FilterGenre />
      <FilterRating />
    </div>
  );
};

export default Filters;
