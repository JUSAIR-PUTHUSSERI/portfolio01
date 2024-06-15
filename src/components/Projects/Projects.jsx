import './project.css'
import fruit from '../../assets/img/Fruit_shop.png'
import login from '../../assets/img/login-page.png'
import resort from '../../assets/img/Resort.png'
const Projects = () => {
  return (
    <div id='Projects' className='project'>
       <div className="project-title">
        <h2 className='text-2xl text-cyan-400'>Projects</h2>
    </div>
    <div className="project-img">
        <div className="fruit-shop">
            <img src={fruit} alt="" />
        </div>
        <div className="login-page">
            <img src={login} alt="" />
        </div>
        <div className="registration">
            <img src={resort} alt="" />
        </div>
     
    </div>
      
    </div>
  )
}

export default Projects
