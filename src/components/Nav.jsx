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
          width="50"
          height="50"
          src="https://img.icons8.com/ios/50/climbing-shoes.png"
          alt="climbing-shoes"
        />
      </div>
    </div>
  );
};

export default Nav;
