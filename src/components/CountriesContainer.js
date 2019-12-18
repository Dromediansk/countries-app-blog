import React, { useState, useEffect, useReducer } from "react";
import CountryCard from "./CountryCard";
import AdvancedFilter from "./AdvancedFilter";

// Calls
import { getAllCountries } from "../calls/countries";

import "./CountriesContainer.css";

const CountriesContainer = () => {
  const [countries, setCountries] = useState([]);
  const [filterInput, setFilterInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: "",
      capital: "",
      population: ""
    }
  );

  useEffect(() => {
    getAllCountries().then(response => {
      setCountries(response);
    });
  }, []);

  const handleFilterCountries = event => {
    const { name, value } = event.target;
    setFilterInput({ [name]: value });
  };

  const filterCountries = list => {
    return list.filter(item => {
      return (
        item.name.toLowerCase().includes(filterInput.name.toLowerCase()) &&
        item.capital
          .toLowerCase()
          .includes(filterInput.capital.toLowerCase()) &&
        item.population >= filterInput.population
      );
    });
  };

  const countriesList = filterCountries(countries);

  return (
    <>
      <AdvancedFilter
        searchValue={filterInput}
        handleChangeValue={handleFilterCountries}
      />
      <div className="countries-container">
        {countriesList.map(country => (
          <CountryCard key={country.numericCode} country={country} />
        ))}
      </div>
    </>
  );
};

export default CountriesContainer;
