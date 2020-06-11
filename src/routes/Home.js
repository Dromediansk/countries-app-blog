import React from "react";
import "./Home.css";

import WelcomeImg from "../assets/home_page.png";

const Home = () => {
  return (
    <div data-testid="home-page" className="home-page-container">
      <h2>Welcome!</h2>
      <h4>
        In this app you can check basic data of all countries in the world.
      </h4>
      <h5>Feel free to explore!</h5>
      <div className="home-page-banner-image">
        <img src={WelcomeImg} alt="World" />
      </div>
    </div>
  );
};

export default Home;
