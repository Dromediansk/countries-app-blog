import React from "react";
import "./Favourites.css";

// images
import Canada from "../assets/favourites/Canada.jpg";
import China from "../assets/favourites/China.jpg";
import Finland from "../assets/favourites/Finland.jpg";
import Iceland from "../assets/favourites/Iceland.jpg";
import Italy from "../assets/favourites/Italy.jpg";
import Japan from "../assets/favourites/Japan.jpg";
import Thailand from "../assets/favourites/Thailand.jpg";

const Favourites = () => {
  return (
    <div className="favourites-countries">
      <div className="favourites-country">
        <img src={Canada} alt="Canada" />
      </div>
      <div className="favourites-country">
        <img src={China} alt="China" />
      </div>
      <div className="favourites-country">
        <img src={Finland} alt="Finland" />
      </div>
      <div className="favourites-country">
        <img src={Iceland} alt="Iceland" />
      </div>
      <div className="favourites-country">
        <img src={Italy} alt="Italy" />
      </div>
      <div className="favourites-country">
        <img src={Japan} alt="Japan" />
      </div>
      <div className="favourites-country">
        <img src={Thailand} alt="Thailand" />
      </div>
    </div>
  );
};

export default Favourites;
