import React from 'react';
import introImg from "../assets/intro-bg.jpg";
import ProfilePicture from '../assets/FOTOPERFILLINKEDIN.jpg'

import './Hero.css';

export default function Hero() {
  return (
    <div id='home-hero'>
      <div id='home-mask'>
          <img src={introImg} alt="background"/>
      </div>
      <div id="home-content">
        <div id='home-text-container'>
          <p>Hi! I'm Ivan Consorte, a <span>FRONT-END REACT DEVELOPER </span>specialiced in creating highly functional, scalable, and complete web experiences. With a meticulous attention to detail, I ensure every aspect of your website is flawlessly executed. Let's create exceptional digital experiences together!</p>
        </div>
        <div id='home-img-container'>
          <img src={ProfilePicture} alt='profile-picture' loading='lazy'/>
        </div>
      </div>
    </div>
  )
}
