import './contact.css'
const Contact = () => {
  return (
    <div id='Contact' className='contact'>
      <h2 className='text-2xl'>Contact Me</h2>
      <div className="card">
        <div className="instagram">
        <a href="https://www.instagram.com/jusair_jsr/">
        <i className="fa-brands fa-instagram"></i>
        </a>
        </div>
        <div className="Linkedin">
        <a href="https://in.linkedin.com/in/jusairjsr">
          <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
        
        <div className="Github">
          <a href="https://github.com/JUSAIR-PUTHUSSERI">
        <i className="fa-brands fa-github"></i>
        </a>
        </div>
        <div className="telegram">
          <a href="#">
        <i className="fa-brands fa-telegram"></i>
        </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
