import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"
import "./Footerstyles.css" 

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container"> 
            <div className="left">
                
            <div className="location"> 
                <FaHome size={20} style={{color: "#fff" , marginRight: "2rem"}}/>
                <div>
                    <p>Noida - Uttar Pradesh</p>              
                    <p>India</p>              
                </div>
            </div>
            <div className="phone">
                <h4>

                <FaPhone  size={20} style={{color: "#fff" , marginRight: "2rem"}}/>
                +91-9999193079
                </h4>
            </div>
            <div className="email">
                <h4>
                <FaMailBulk  size={20} style={{color: "#fff" , marginRight: "2rem"}}/>
                mauryabhishek@382gmail.com 
                </h4>
            </div>
            </div>
            <div className="right"> 
                <h4>
                    I'guess that all about 
                </h4>
                <p>Wanna tell little about you!? How about dropping a text or reach out to me via mail anyways here are my social just for you </p>
                <div className="social">
  <a href="https://www.linkedin.com/in/abhishekxmaurya/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}}/>
  </a>
  <a href="https://www.instagram.com/abhishekx11?igsh=a3RwcXM4NjdqdTlo&utm_source=qr" target="_blank" rel="noopener noreferrer">
    <FaInstagram size={30} style={{color: "#fff", marginRight: "1rem"}}/>
  </a>
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    <FaFacebook size={30} style={{color: "#fff", marginRight: "1rem"}}/>
  </a>
  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
    <FaTwitter size={30} style={{color: "#fff", marginRight: "1rem"}}/>
  </a>
</div>
            </div>

        </div>
      
    </div>
  )
}

export default Footer
