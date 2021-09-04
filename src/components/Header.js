import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <HomeIcon fontSize="inherit" className="home" />
      </Link>
      <h1>Financial Advisor</h1>
    </div>
  );
};

export default Header;
