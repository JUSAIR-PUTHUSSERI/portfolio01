import './about.css'
import myimg2 from '../../assets/img/myimg2.jpg'
const About = () => {
  return (
    <div id='About' className="about">
        <div className="img">
            <img src={myimg2} alt="" />
        </div>
        <div className="about-section">
            <div className="about-about">
                <h2 className='text-2xl text-cyan-400'>About</h2>
            </div>
            <div className="about-desc">
                <p>Currently i&apos;am not working i&apos;am doing  
                masters in computer science in calicut
                 university in kerala, I&apos;  am 
                  continuously learning new things from Utube and 
                  other some online platforms   </p>
            </div>
                  <button className='border-solid border-2 border-cyan-400 hover:text-black hover:bg-cyan-400'>Dowload CV</button>
        </div>
    </div>
  )
}

export default About
