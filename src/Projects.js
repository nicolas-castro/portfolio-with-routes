import React from 'react';
import { NavLink } from 'react-router-dom';


export  const MyProjects = [
    {
        id: "1a",
        name: "The Frogger Clone",
        year: 2017,
        technologies: "JavaScript, jQuery",
        description: "The first project game clone."
    },
    {
        id: "2b",
        name: "iTravel",
        year: 2017,
        technologies: "Mongo DB, ExpressJS, NodeJS, JavaScript, HTML, CSS",
        description: "Web App that allows logged in users to share their experiences about travel destinations."
    },
    {
        id: "3c",
        name: "The Plan",
        year: 2017,
        technologies: "Mongo DB, ExpressJS, Angular2, NodeJS, JavaScript, HTML, CSS",
        description: "Web App that allows logged in users to plan your next activity with your friends or business partners."
    }
  ]

const Projects = () => {
 
  return (
    <div>
      <h2>Projects:</h2>
      {MyProjects.map((eachProject, index) => {
        return (
          <div key={eachProject.id}>
            <h3>
              <NavLink
                exact
                activeStyle={{ fontWeight: 'bold', color: 'red' }}
                to={`/projects/${eachProject.id}`}
              >
                {eachProject.name}
              </NavLink>
            </h3>{' '}
            <h4>{eachProject.technologies}</h4>
            <hr />
          </div>
        )
      })}
  </div>
  )
}

export default Projects;
