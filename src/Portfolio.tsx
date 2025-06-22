import { useRef } from 'react'
import { BrowserRouter } from 'react-router-dom'

import './Portfolio.css'

import NavBar from './components/NavBar'
import Home from './sections/Home'
import About from './sections/About'
import Project from './sections/Project'
import Publication from './sections/Publication'
import Footer from './components/Footer'

function App() {
  const HomeRef = useRef<HTMLElement | null>(null)
  const AboutRef = useRef<HTMLElement | null>(null)
  const ProjectRef = useRef<HTMLElement | null>(null)
  const PublicationRef = useRef<HTMLElement | null>(null)

  const ChangeSection = (Section: string) => {
    if (Section === 'Home' && HomeRef.current) {
      HomeRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (Section === 'About' && AboutRef.current) {
      AboutRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (Section === 'Project' && ProjectRef.current) {
      ProjectRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (Section === 'Publication' && PublicationRef.current) {
      PublicationRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <BrowserRouter>
        <NavBar ChangeSection={ChangeSection} />
        <Home RefProp={HomeRef} />
        <About RefProp={AboutRef} />
        <Project RefProp={ProjectRef} />
        <Publication RefProp={PublicationRef} />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
