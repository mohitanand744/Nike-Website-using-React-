import React from "react";

const HeroImg = ({ url }) => {
  return (
    <div className="HeroImg">
      <img className="heroimage" src={url} alt="img" />
    </div>
  );
};

export default HeroImg;
