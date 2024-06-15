import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Profile from './components/Home/Profile'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'


function App() {

  return (
    <>
  <div className="relative h-full w-full bg-black">
    <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#151100_1px,transparent_1px),linear-gradient(to_bottom,#151100_1px,transparent_1px)] bg-[size:14px_24px]"></div>
    <Navbar/>
    <Profile/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
   
    </div>
  
    </>
  )
}

export default App
