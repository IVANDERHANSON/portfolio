import './Portfolio.css'

import NavBar from './components/NavBar'
import Home from './sections/Home'
import AboutMe from './sections/AboutMe'
import Project from './sections/Project'
import Publication from './sections/Publication'
import Footer from './components/Footer'

import { useRef } from 'react'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const HomeRef = useRef<HTMLElement | null>(null)
  const AboutMeRef = useRef<HTMLElement | null>(null)
  const ProjectRef = useRef<HTMLElement | null>(null)
  const PublicationRef = useRef<HTMLElement | null>(null)

  const ChangeSection = (Section: string) => {
    if (Section === 'Home' && HomeRef.current) {
      HomeRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (Section === 'AboutMe' && AboutMeRef.current) {
      AboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
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
        <AboutMe RefProp={AboutMeRef} />
        <Project RefProp={ProjectRef} />
        <Publication RefProp={PublicationRef} />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
