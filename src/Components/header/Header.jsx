import React from "react";

import "./header.css";

import selfimg from "../../assets/debupic.webp";
import { Promotional } from "../promotional/Promotional";
import HeaderScocials from "./HeaderScocials";
const Header = () => {
  return (
    <header
      
    >
      <div  className="container header-container">
        <h5>Hello, I am</h5>
        <h1>Debanshu Pati</h1>

        <Promotional />
          <HeaderScocials />
        <div className="me">

          <img src={selfimg} alt="" />

        </div>
          <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;
