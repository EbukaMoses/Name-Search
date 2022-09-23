import React from "react";
import "./Header.css";
import Logo from "./image/head-img.png";

const Header = ({ headTitle, headerExpanded }) => {
  return (
    <div className="head-container">
      <img
        src={Logo}
        className={`headerImg ${
          headerExpanded ? "head-image-expanded" : "head-image-contracted"
        }`}
        alt="logo"
      />
      <h1
        className={`head-text ${
          headerExpanded ? "head-text-expanded" : "head-text-contracted"
        }`}
      >
        {headTitle}
      </h1>
    </div>
  );
};

export default Header;
