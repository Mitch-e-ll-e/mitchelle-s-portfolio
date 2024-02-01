import React from "react";
import Button4 from "../Assets/Button4.png";
import GoziePic2 from "../Assets/GoziePic2.png";
import Amazon from "../Assets/Amazon.png";
import Dribble from "../Assets/Dribble.png";
import linkedin from "../Assets/Linkedin.png";
import Microsoft from "../Assets/Microsoft.png";
import Spotify2 from "../Assets/Spotify2.png";

function Main(){
    return(
       <section id="main"> 
        <div className="main-container">
         <div className="main-child">
         <p>  <b> 👋  Hello, I'm Mitchelle.</b> <br/><br/>
            A passionate and creative web developer with a keen eye for <br/>
            detail and a love for crafting clean, efficient, and responsive websites.<br/> 
            With a solid foundation in front-end and back-end technologies,<br/>
             I specialize in translating ideas and concepts into digital solutions<br/>
              that not only meet but exceed expectations.<br/><br/>
              <button><img src={Button4} alt="Hire me" className="image1"/></button><br/>
            </p>
            </div>
            <div className="main-child">
            <img src={GoziePic2} alt="image2" className="image2"/>
            </div>
            </div>
            <p><b>I've worked with over 100+ happy clients all over the world.</b> <br/>
    Over the course of my professional journey, <br/>
    I've had the privilege of collaborating with over 100+ satisfied clients from diverse corners of the globe.<br/>
     This experience has been immensely rewarding, as it allowed me to engage with a wide range of projects,<br/>
      each presenting its unique challenges and opportunities. </p>
      <img src={Amazon} alt="image3" className="app-image"/>
      <img src={Dribble} alt="image4" className="app-image"/>
      <img src={linkedin} alt="image5" className="app-image"/>
      <img src={Microsoft} alt="image6" className="app-image"/>
      <img src={Spotify2} alt="image8" className="app-image"/>
    
        
       </section>
        
    );
} 
export default Main;