import './Portfolio.css'

import NavBar from './components/NavBar'
import Home from './sections/Home'
import AboutMe from './sections/AboutMe'
import Project from './sections/Project'
import Publication from './sections/Publication'
import Footer from './components/Footer'

import FotoProfile from './assets/Foto Profile.png'
import LinkedInLogo from './assets/LinkedIn.svg'

function App() {
  return (
    <>
      <NavBar />
      <Home FotoProfile={FotoProfile} LinkedInLogo={LinkedInLogo} />
      <AboutMe />
      <Project />
      <Publication />
      <Footer />
    </>
  )
}

export default App
