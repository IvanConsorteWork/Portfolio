import './About.css'
import SkillCard from '../components/SkillCard'
import SkillsData from '../components/SkillsData'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import  { HiMail } from 'react-icons/hi'

export default function About () {
  return (
    <div id='about'>
      <div id='about-header'>
        <h1>Welcome to my portfolio.</h1>
        <h1>It's nice to have you here!</h1>
      </div>      
      <div id='about-text'>
        <p>I'm a curious web developer from Mar del Plata, Buenos Aires, Argentina driven by the thrill of creating feature-rich applications that perfectly align with user needs. Also, I have an eye for bugs and problem-solving and I work every day for developing this as an asset.</p>

        <p>Not only am I a dedicated self-learner, but I also have a passion for learning from and teaching others, sharing our experiences. I like to take the intiative and I embrace challenges as opportunities to expand my knowledge and skills.</p>
      </div>
      <div id='about-skills'>
        <h2>Techs stacks I use</h2>
        <div id='about-skills-container'>
						{SkillsData.map((val, ind) => {
							return (
								<SkillCard 
										key = {ind}
										name = {val.name}
										img = {val.img}
								/>
							)
						})}
					</div>
      </div>
      <div id='contact'>
        <h2>Let's get in touch</h2>
        <div id='social-media'>
          <a href='mailto:ivanconsortework@gmail.com'>
            Email
            <HiMail size={20} />
          </a>
          <a href='https://www.linkedin.com/in/ivanconsorte23/'>
            Linkedin
            <BsLinkedin size={20} />
          </a>
          <a href='https://github.com/IvanConsorteWork'>
            Github
            <BsGithub size={20} />
          </a>
        </div>
      </div>
    </div>
  )
}