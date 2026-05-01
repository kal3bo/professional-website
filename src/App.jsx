import './App.css'
import BackgroundEffects from './components/BackgroundEffects.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import FC26Feature from './components/FC26Feature.jsx'
import OtherProjectsCarousel from './components/OtherProjectsCarousel.jsx'
import ImpactStats from './components/ImpactStats.jsx'
import ToolkitMarquee from './components/ToolkitMarquee.jsx'
import Platforms from './components/Platforms.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'

function App() {
  return (
    <div className="app-shell">
      <BackgroundEffects />
      <Nav />
      <main>
        <Hero />
        <FC26Feature />
        <OtherProjectsCarousel />
        <Education />
        <ImpactStats />
        <ToolkitMarquee />
        <Platforms />
        <Contact />
      </main>
    </div>
  )
}

export default App
