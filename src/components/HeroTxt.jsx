import React from "react";
import Button from "./Button";

const HeroTxt = () => {
  return (
    <div className="text">
      <p className="Brand">Nike Mercurial</p>
      <h1>Nike Air Max 270</h1>
      <p className="details">
        Step up your game with Nike's latest collection. Whether you're hitting
        the gym or the streets, our shoes offer unparalleled comfort and style.
        Experience the innovation of Nike Air technology for a smooth,
        responsive ride. Elevate your footwear and conquer every step with
        confidence.
      </p>
      <Button Color={"Orange"} text={"Get These Products"} />
    </div>
  );
};

export default HeroTxt;
