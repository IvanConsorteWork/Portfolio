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
      <h2 className='project-title'>{props.title}</h2>
      <div className='project-img-container'>
        <Carousel slides={props.imgs} />
      </div>  
      <div className='project-description-container'>
        <div className ='project-stacks'>
          {techStacks?.map((val) => {
            return (
                <div>{val}</div>
            )
          })}
        </div>         
        <div className='project-details'>     
          <p><span>Features: </span>{props.features}</p>
          <p>{props.text}</p>            
        </div>
        <div className='project-details-btns'>
          <NavLink target='_blank' to={props.view} className="btn" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '7px'}}>Live Demo <BsBoxArrowUpRight size={25}/></NavLink>
          <NavLink target='_blank' to={props.source} className="btn" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '7px'}}>Code <FaGithub size={30} /></NavLink>
        </div>
      </div>         
    </div>
  )
}

