import React from "react";
import "./AdvancedFilter.css";

const AdvancedFilter = ({ searchValue, handleChangeValue }) => (
  <form className="filter-container">
    <input
      data-testid="filter-input-name"
      type="text"
      name="name"
      value={searchValue.name}
      onChange={(e) => handleChangeValue(e)}
      placeholder="country"
      className="filter-input"
      autoFocus
    />
    <input
      data-testid="filter-input-capital"
      type="text"
      name="capital"
      value={searchValue.capital}
      onChange={(e) => handleChangeValue(e)}
      placeholder="capital"
      className="filter-input"
    />
    <input
      data-testid="filter-input-population"
      type="number"
      min="0"
      name="population"
      className="filter-input"
      placeholder="population"
      value={searchValue.population}
      onChange={(e) => handleChangeValue(e)}
    />
  </form>
);

export default AdvancedFilter;
