import "./HeroImgstyles.css"

import React from 'react'
import { Link } from "react-router-dom"

import Introimg from "../assets/intro.jpg"
const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro_img" src={Introimg} alt="Introimg"/>
        <div className="content">
            <p>Hi , I am Abhishek</p>
            <h1>An Engineering Senior</h1>
            <div>
                <Link to='/project' className="btn">Projects</Link>
                <Link to='/contact' className="btn btn-light">Contact</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HeroImg
