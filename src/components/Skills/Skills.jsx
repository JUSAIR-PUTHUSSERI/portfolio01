import './skills.css'
import django from '../../assets/img/python django.jpg'
import react from '../../assets/img/reactjs.png'
import tailwindcss from '../../assets/img/Tailwind-CSS.png'

const Skills = () => {
  return (
   <div id='Skills' className="skills">
    <div className="skill-title">
        <h2 className='text-2xl text-cyan-400'>My skills</h2>
    </div>
    <div className="skills-img">
        <div className="react">
            <img src={react} alt="" />
        </div>
        <div className="html">
            <img src={django} alt="" />
        </div>
        <div className="tailwind">
            <img src={tailwindcss} alt="" />
        </div>
     
    </div>
   </div>
  )
}

export default Skills
