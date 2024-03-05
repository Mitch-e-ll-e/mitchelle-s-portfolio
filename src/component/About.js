import React from "react";
import Microsoft from "../Assets/Microsoft..png";
import Spotify2 from "../Assets/Spotify2.png";
import Linkedin from "../Assets/Linkedin.png";
import Google from "../Assets/Google..png";
import Dribble from"../Assets/Dribble..png";
import Amazon from "../Assets/Amazon..png";

const About = () =>  {
    return(
        <section className="about">
            <div className="about-bio">
            <p>
                I'm a full stack developer, Proficient in building seamless user interfaces and <br/>
                 robust server-side functionalities. 
                As a versatile full stack software developer, I have a strong foundation in  front end  technologies.<br/>
                 My expertise lies in HTML, CSS, and JavaScript for front end development<br/>
                 I am proficient in using front end frameworks like React and Angular,<br/>
                  which allow me to create complex and dynamic web interfaces.
            </p>
            </div>
            <div className="social-media-apps">
                <img src={Microsoft} alt="Microsoft"/>
                <img src={Spotify2} alt="Spotify"/>
                <img src={Linkedin} alt="Linkedin"/>
                <img src={Google} alt="Google"/>
                <img src={Dribble} alt="Dribble"/>
                <img src={Amazon} alt="Amazon"/> 
            </div>
        </section>
    );
}

export default About;