import React, { useRef, useReducer } from "react";
import CountryCard from "../components/CountryCard/CountryCard";
import AdvancedFilter from "../components/AdvancedFilter/AdvancedFilter";
import { useFetch } from "../utils/customHooks";
import { Spinner } from "../utils/Spinner";

import "./CountriesContainer.css";

const CountriesContainer = () => {
  const componentIsMounted = useRef(true);
  const [filterInput, setFilterInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: "",
      capital: "",
      population: "",
    }
  );
  const { data, loading, error } = useFetch(
    "https://restcountries.eu/rest/v2/all",
    componentIsMounted,
    []
  );

  const handleFilterCountries = (event) => {
    const { name, value } = event.target;
    setFilterInput({ [name]: value });
  };

  const filterCountries = (list) => {
    return list.filter((item) => {
      return (
        item.name.toLowerCase().includes(filterInput.name.toLowerCase()) &&
        item.capital
          .toLowerCase()
          .includes(filterInput.capital.toLowerCase()) &&
        item.population >= filterInput.population
      );
    });
  };

  const countriesList = filterCountries(data);

  return (
    <>
      <AdvancedFilter
        searchValue={filterInput}
        handleChangeValue={handleFilterCountries}
      />
      <div className="countries-container" data-testid="countries-container">
        {loading ? (
          <Spinner />
        ) : error ? (
          <div data-testid="error-message">Ooops. An error occured!</div>
        ) : (
          countriesList.map((country) => (
            <CountryCard key={country.numericCode} country={country} />
          ))
        )}
      </div>
    </>
  );
};

export default CountriesContainer;
