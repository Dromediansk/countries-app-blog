import React from "react";
import "./NotFoundPage.css";
import notFoundImg from "../assets/notFound.png";

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-img">
        <img src={notFoundImg} alt="Astronaut lost in space" />
      </div>
      <div className="not-found-paragraph">
        <h3>This Page is Lost in Space</h3>
        <p>
          You thought this mission to the moon would be a quick six month thing.
          Your neighbor offered to look after your dog. Your high school math
          teacher was impressed. He once said you wouldn’t amount to
          anything.You sure showed him. But now here you are, fifty feet from
          your spaceship with no way to get back. Your dog will be so sad. Your
          math teacher will be so smug. Pretty devastating.
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
