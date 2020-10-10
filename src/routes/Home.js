import React from "react";
import "./Home.css";

import WelcomeImg from "../assets/home_page.png";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div data-testid="home-page" className="home-page-container">
      <h2>{t("welcome")}!</h2>
      <h4>{t("appAbout")}</h4>
      <h5>{t("explore")}</h5>
      <div className="home-page-banner-image">
        <img src={WelcomeImg} alt="World" />
      </div>
    </div>
  );
};

export default Home;
