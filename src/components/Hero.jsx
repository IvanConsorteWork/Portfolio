import './Hero.css'
import ProfilePicture from '../assets/FOTOPERFILLINKEDIN.jpg'

export default function Hero () {
  return (
    <div id="hero">
      <div id='hero-text'>
        <p>Hi! I'm Ivan Consorte, a <span>FRONT-END REACT DEVELOPER</span> specialiced in creating highly functional, scalable, and complete web experiences. With a meticulous attention to detail, I ensure every aspect of your website is flawlessly executed. Let's create exceptional digital experiences together!</p>
      </div>
      <div id='hero-img'>
        <img src={ProfilePicture} alt='profile-picture' loading='lazy'/>
      </div>
  </div>
  )
}