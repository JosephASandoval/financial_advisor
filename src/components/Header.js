import React from "react";
import { Link } from "react-router-dom";
import homeImg from "../images/home.png";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img id="top-logo" src={homeImg} alt="home" />
      </Link>
      <div id="app-title">Financial Advisor</div>
    </header>
  );
};

export default Header;
