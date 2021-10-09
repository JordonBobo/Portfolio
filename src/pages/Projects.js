import React from "react";
import "./pages.css";
import Project from "../components/projectCard/projectCard";
import Data from "../components/projectCard/projects.json";


function Projects() {

  return (
    <div className="background">
        <h1>Projects: </h1>
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 g-4">
            { Data.projects.map((x) => 
              <div className="container">
                <Project x={x}/>
              </div>
            )}
          
          </div>
        </div>

    </div>
  );
}

export default Projects;
