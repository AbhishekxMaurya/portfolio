import { Link } from "react-router-dom"
import "./AboutContentstyles.css"
import React1 from "../assets/stocks.jpg"
import React2 from "../assets/gym2.jpg"
import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am i?...</h1>
            <p>Well few things apart from building and learning tech. I also like to get my self active and fit therefore I have made gym a part of my daily routine. Another thing that interest is stocks and how the securities market works. At last I believe the best way to learning something is to try out it by yourself </p>
            <Link to={'/contact'} >
            <button className="btn">Contact</button></Link>
        </div>
        <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={React1} className="img" alt="true"/>
            </div>
            <div className="img-stack bottom">
                <img src={React2} className="img" alt="true"/>
            </div>
        </div>

        </div>
      
    </div>
  )
}

export default AboutContent
