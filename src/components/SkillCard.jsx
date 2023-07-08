import React from 'react'
import './SkillCard.css'

export default function SkillCard (props) {
  return (
    <div className='skill-box'>
        <img src={props.img} alt={`${props.name} icon`} />
        <p>{props.name}</p>
    </div>
  )
}
