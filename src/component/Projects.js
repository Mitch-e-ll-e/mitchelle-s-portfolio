import React from "react";
import Webdesign from"../Assets/Webdesign.png";
import Webdesign2 from "../Assets/Webdesign2.png";
import Webdesign3 from "../Assets/Webdesign3.png";
import Button3 from "../Assets/Button3.png";

const Projects = () =>  {
    return(
        <section className="projects">
            <h2 className="project-paragraph"><u>Projects</u> <img src={Button3} alt="image1"className="project-button"/>  
            </h2>
            <p className="paragraph1" >Dive into a diverse array of projects that demonstrate my versatility,<br/>
             Each is evidence of my dedication to pushing limits and creating inventive solutions.</p>
            <div className="projects-container">
                <div className="project-box">
                <img src={Webdesign} alt="image2"/>
                <h3>TASKER</h3>
                <p className="paragraph">👉designed to simplify your daily tasks and transform the way you manage your time.<br/>
                 With a user-friendly interface and powerful features,<br/>
                  Tasker ensures that you can effortlessly create, organize, and track your tasks in one centralized hub</p>

            </div>

            <div className="project-box">
                <img src={Webdesign2} alt="image3"/>
                <h3>PETROL-VEST</h3>
                <p className="paragraph"> 👉 meticulously crafted to empower investors and enthuiasts with comprehensiveinformation.<br/>
                Our user-friendly interface ensures a seamless experience, allowing you to take control of<br/>
                 your fuel management with just a few taps.</p>
            </div>

            <div className="project-box">
                <img src={Webdesign3} alt="image4"/>
                <h3>L'VIRG</h3>
                <p className="paragraph"> 👉 A curated user friendly space that celebrates diversity, self-expression,and the artistry of fashion.<br/>
                Immerse yourself in a world where clothing is more thst fabric; Its a statement, an expresion of your personality
                </p>

            </div>
            </div>
        </section>
    )
}

export default Projects;
