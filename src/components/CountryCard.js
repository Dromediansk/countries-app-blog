import React from "react";
import "./CountryCard.css";

const CountryCard = ({ country }) => {
  return (
    <div className="country-card">
      <h3>{country.name}</h3>
      <div className="country-info-container">
        <h4>Capital:</h4>
        <p>{country.capital}</p>
      </div>
      <div className="country-info-container">
        <img className="country-flag" src={country.flag} alt="Country flag" />
      </div>
    </div>
  );
};

export default CountryCard;
