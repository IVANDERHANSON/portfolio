import './Portfolio.css'
import NavBar from './components/NavBar'
import Home from './sections/Home'
import AboutMe from './sections/AboutMe'
import Project from './sections/Project'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <AboutMe />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}

export default App
