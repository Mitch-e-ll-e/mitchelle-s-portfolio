import React from "react";
import Webdesign from "../Assets/Webdesign.png";
import Webdesign2 from "../Assets/Webdesign2.png";
import Webdesign3 from "../Assets/Webdesign3.png";
import Button3 from "../Assets/Button3.png";
function Projects(){
    return(
        <section id="projects">
            <h1><u>PROJECTS</u> <img src={Button3} alt="image13" className="project-button"/>

            </h1>

            <p className="paragraph1">Dive into a diverse array of projects that demonstrate my versatility<br/> and capability to tackle different aspects of web development.</p>
            <div className="project-container">
        <div className="project-box">
                <img src={Webdesign} alt="image9" className="project-image"/>
                <h3>TASKER</h3>
                <p className="paragraph">👉designed to simplify your daily tasks and transform the way you manage your time.<br/>
                 With a user-friendly interface and powerful features,<br/>
                  Tasker ensures that you can effortlessly create, organize, and track your tasks in one centralized hub</p>

            </div>
            <div className="project-box">
                <img src={Webdesign2} alt="image10" className="project-image"/>
                <h3>PETROL-VEST</h3>
                <p className="paragraph">👉meticulously crafted to empower investors and enthusiasts with comprehensive information, real-time data,<br/>
                 and valuable resources that navigate the dynamic landscape of the petroleum industry.</p>

            </div>

            <div className="project-box">
                <img src={Webdesign3} alt="image11" className="project-image"/>
                <h3>L'virg</h3>
                <p className="paragraph">👉A curated user friendlyspace that celebrates diversity, self-expression, and the artistry of fashion.<br/>
                 Immerse yourself in a world where clothing is more than fabric; it's a statement, an extension of your personality.</p>

            </div>
            
            </div>

        </section>

    );
}

export default Projects;