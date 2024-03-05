import React from "react";
import Education2 from "../Assets/Education2.png";
import javascript from "../Assets/javascript.png";
import nodejs from "../Assets/nodejs.png";
import reactjs from "../Assets/reactjs.png";
import html from "../Assets/html.png";
import css from "../Assets/css.png";
const Footer = () => {
    const handleClick = () => {
        console.log("Hire me button clicked");}
    return(
        <section className="footer">
            <div className="footer-container">
                <div className="education">
                    <img src={Education2} alt="image5" className="education-image"/>
                </div>

                <div className="technology">
                    <h4>Technologies I Use</h4>
                    <div className="image-container">
                        <div className="java">
                        <img src={javascript} alt="image7" className="technology-image" />
                        </div>
                        <div className="node">
                            <img src={nodejs} alt="image8" className="technology-image"/>
                        </div>
                    <div className="react">
                    <img src={reactjs} alt="image9" className="technology-image"/>
                    </div>
                    <div className="html"> 
                    <img src={html} alt="image10" className="technology-image"/>

                    </div>
                   
                    <div className="css">
                    <img src={css} alt="image11" className="technology-image"/>

                    </div>
                    


                  </div>
                </div>
            </div>
            

            <button className="download-cv-button" onClick={handleClick}>
      Download CV <span className="download-icon">&#x21aa;</span> </button>


        </section>
    );
}
 
export default Footer;