import React from 'react';
import { MyProjects } from './Projects';
import { Link } from 'react-router-dom';

const ProjectDetails = (props) => {
  console.log(props)

  const getProject = (id) => {
    const theProject = oneProject => {
      return oneProject.id === id;
    }
    return MyProjects.find(theProject)
  };
  
  const { params } = props.match;
  const foundProject = getProject(params.id);
   
  return (
    <div>
      <h2>{ foundProject.name } <span style={{fontSize:"14px"}}>{ foundProject.year }</span></h2>
      <h3>Used technologies: { foundProject.technologies }</h3>
      <p>{ foundProject.description }</p>
      <Link to='/projects'>Back</Link>
    </div>
  )
}

export default ProjectDetails;