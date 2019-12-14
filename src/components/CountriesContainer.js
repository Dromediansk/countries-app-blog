import React, { useState, useEffect } from "react";
import CountryCard from "./CountryCard";

// Calls
import { getAllCountries } from "../calls/countries";

import "./CountriesContainer.css";

const CountriesContainer = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getAllCountries().then(response => {
      setCountries(response);
    });
  }, []);

  console.log("countries", countries);

  return (
    <div className="countries-container">
      {countries.map(country => {
        return <CountryCard key={country.numericCode} country={country} />;
      })}
    </div>
  );
};

export default CountriesContainer;
