import React from 'react';
import './WorkCard.css';
import { NavLink } from 'react-router-dom';

const WorkCard = (props) => {
  return (
    <div className='project-card'>
        <img src={props.imgsrc} alt='project-preview'/>
        <h2 className='project-title'>{props.title}</h2>
        <div className='project-details'>
            <p>{props.text}</p>
            <div className='project-details-btns'>
                <NavLink target='_blank' to={props.view} className="btn">View</NavLink>
                <NavLink target='_blank' to={props.source} className="btn">Source</NavLink>
            </div>
        </div>
    </div>
  )
}

export default WorkCard