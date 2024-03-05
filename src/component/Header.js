import React from "react";
import Gozie from "../Assets/GoziePic2.png";
import Mitchelle from "../Assets/Mitchelle.png";
import Microsoft from "../Assets/Microsoft..png";
import Spotify2 from "../Assets/Spotify2.png";
import Linkedin from "../Assets/Linkedin.png";
import Dribble from"../Assets/Dribble..png";
import Amazon from "../Assets/Amazon..png";
const  Header = ()  =>  {
    const handleClick = () => {
        console.log("Hire me button clicked");}
    return(
        <header className="header">
            <nav className= "navbar">
                <div className="logo">
                    <img src={Mitchelle} alt="logo1"/>
                </div>
            <div className="contact">
                <button className="contact-btn" onClick={handleClick}>Contact</button>
            </div>
            </nav>
            <div className="header-container">
            
            <div className="write-ups">
            <h1>👋 Hey, I'm Mitchelle.</h1>
                <h2> A Full-Stack Developer.</h2>
                <button onClick={handleClick}>Hire Me</button>


            </div>
            <div  className="image">
                <img src={Gozie} alt="goziepic2" className="headerimage"/>

            </div>
                </div>
                
    <div className="about-container">

        <div className="about">
        <p className="head-paragraph">
                I'm a full stack developer, Proficient in building seamless<br/>
                 user interfaces and robust server-side functionalities. <br/>
                As a versatile full stack software developer, I have a strong<br/>
                 foundation in  front end  technologies.<br/>
                 My expertise lies in HTML, CSS, and JavaScript for front end development<br/>
                 I am proficient in using front end frameworks like React and Angular,<br/>
                  which allow me to create complex and dynamic web interfaces.
            </p>
        </div>

        <div className="social-media-apps">
         <img src={Microsoft} alt="Microsoft"/>
        <img src={Spotify2} alt="Spotify"/>
         <img src={Linkedin} alt="Linkedin"/>
       <img src={Dribble} alt="Dribble"/>
         <img src={Amazon} alt="Amazon"/> 

    </div>
    </div>  
        </header>
    );
}

export default Header;