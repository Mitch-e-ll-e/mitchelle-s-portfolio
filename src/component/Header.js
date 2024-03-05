import React from "react";
import Gozie from "../Assets/GoziePic2.png";
import Mitchelle from "../Assets/Mitchelle.png";
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
                <button onClick={handleClick}>Contact</button>
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
                
    
            
        </header>
    );
}

export default Header;