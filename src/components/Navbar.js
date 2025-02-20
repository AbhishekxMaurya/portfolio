import "./Navbarstyles.css";
import { FaBars, FaTimes } from 'react-icons/fa';
import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [color , setColor] = useState(false);
  const changeColor = () =>{
    if(window.scrollY >= 100){
        setColor (true);
    }
    else setColor(false);
  }

 window.addEventListener("scroll" , changeColor);
  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Portfolio.</h1>
      </Link>
      <ul className={click ? "nav_menu active" : "nav_menu"}>
        <li>
          <Link to="/" onClick={handleClick}>Home</Link>
        </li>
        <li>
          <Link to="/project" onClick={handleClick}>Project</Link>
        </li>
        <li>
          <Link to="/about" onClick={handleClick}>About</Link>
        </li>
        <li>
          <Link to="/contact" onClick={handleClick}>Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#F0F8FF" }} />
        ) : (
          <FaBars size={20} style={{ color: "#F0F8FF" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
