import React from "react";
import { Link } from 'react-router-dom';
import logo from "../../images/logo.svg";

import "./header.css";

const Header = props => {
  const link = '#Contact';
  return (
    <div className="header">
      <Link className="logo" to='/'><img src={logo} alt="logoTitle" /></Link>
      <a className="pixoul_button contactus-button" href={link}>  
        <span>Contact Us</span>
      </a>
      <button
        className="pixoul_button hamburger-button"
        onClick={props.onMenuClick}
      >
        <div>
          <span id="span-1"></span>
          <span id="span-2"></span>
          <span id="span-3"></span>
        </div>
      </button>
    </div>
  );
};

export { Header };
