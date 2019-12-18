import React from "react";
import "./CountryCard.css";

const CountryCard = ({ country }) => {
  return (
    <div className="country-card">
      <h3>{country.name}</h3>
      <hr />
      <ul className="country-info-list">
        <li className="country-info-item">
          <h4>Capital:</h4>
          <p>{country.capital}</p>
        </li>
        <li className="country-info-item">
          <h4>Population:</h4>
          <p>{country.population}</p>
        </li>
        <li className="country-info-item">
          <h4>Region:</h4>
          <p>{country.region}</p>
        </li>
        <li className="country-info-item">
          <img className="country-flag" src={country.flag} alt="Country flag" />
        </li>
      </ul>
    </div>
  );
};

export default CountryCard;
