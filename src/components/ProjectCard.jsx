import React from 'react';
import './ProjectCard.css';
import Carousel from './Carousel'
import { NavLink } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { BsBoxArrowUpRight } from 'react-icons/bs';

export default function ProjectCard (props) {
  const techStacks = ["React", "Redux Toolkit", "Typescript", "Bootstrap"]
  return (
    <div className='project-card'>
      <div className='project-title'>
        <h2>{props.title}</h2>
      </div>
      <div className='project-img-container'>
        <Carousel slides={props.imgs} />
      </div>  
      <div className='project-description-container'>    
        <div className='project-details'>   
          <div className='project-details-features'>
            <p><span>Built with: </span>{props.stack}</p>  
            <p><span>Features: </span>{props.features}</p>
          </div>
          <div className='project-details-text'>
            <p>{props.text}</p>
          </div>                      
        </div>
        <div className='project-details-btns'>
          <NavLink target='_blank' to={props.view} className="btn nav-link">Live Demo <BsBoxArrowUpRight size={20}/></NavLink>
          <NavLink target='_blank' to={props.source} className="btn nav-link">Code <FaGithub size={20} /></NavLink>
        </div>
      </div>         
    </div>
  )
}

