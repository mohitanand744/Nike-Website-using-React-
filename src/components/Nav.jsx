import React from "react";
import Button from "./Button";

const Nav = () => {
  return (
    <div className="Nav">
      <div className="logoContainer">
        <img
          src="https://1000logos.net/wp-content/uploads/2017/03/Nike-Logo-1971-now.png"
          alt=""
        />
      </div>
      <div className="NavLinks">
        <a href="#" className="Active">
          Home
        </a>
        <a href="#">About</a>
        <a href="#">Latest Of Nike</a>
        <a href="#">Contact</a>
      </div>

      <div className="registrationFormsBtns">
        <Button Color={"Transparent"} text={"Login"} />
        <Button Color={"Orange"} text={"Sign Up"} />
      </div>
      <div className="menu">
        <img
          src="https://img.icons8.com/cotton/64/sneakers--v2.png"
          alt="sneakers--v2"
        />
      </div>
    </div>
  );
};

export default Nav;
