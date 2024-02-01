import React from "react";
import Education2 from "../Assets/Education2.png";
import Header from "../Assets/Header.png";
import Tools2 from "../Assets/Logo2.png";
import Downloadcv2 from "../Assets/Downloadcv2.png";
function Footer() {
  return (
    <section id="footer">
        <div className="footer-container">
          
            
            <div className="footer-child" id="education">
        <img src={Education2} alt="image25" className="education-image" />
</div>
<div className="footer-child2" id="technology">
    <img src={Header} alt="image26" className="technology-image"/>
    <img src={Tools2} alt="image27" className="technology-image2"/>
    
  </div>
  </div>
 <img src={Downloadcv2} alt="image28" className="footer-image"/>
    </section>
  );
}

export default Footer;
