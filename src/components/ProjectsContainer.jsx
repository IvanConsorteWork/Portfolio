import React from 'react';
import './ProjectsContainer.css';
import ProjectCard from './ProjectCard';
import ProjectsData from './ProjectsData';

export default function ProjectsContainer () {
  return (
    <div id='project-section'>
      <h1 id='project-heading'>These are projects I'm passionated about:</h1>
      <div id='project-container'>
        {ProjectsData.map((val, ind) => {
          return (
          <ProjectCard
          key={ind}
          imgs={val.imgs}
          title={val.title}
          text={val.text}
          stack={val.stack}
          features={val.features}
          view={val.view}
          source={val.source} />
          )
        })}
      </div>
    </div>
  )
}

