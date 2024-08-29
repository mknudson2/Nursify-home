import Navbar from './components/Navbar'
import Hero from './components/Hero'
import NursifyServices from './components/NursifyServices'
import ExperienceButtons from './components/ExperienceButtons'
import InteractiveGrid from './components/InteractiveGrid'
import NursifyTeam from './components/NursifyTeam'
import ModuleSlides from './components/ModuleSlides'
import NursifyCertification from './components/NursifyCertification'
import ScrollingReviews from './components/ScrollingReviews'
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/Footer'

import './styles/App.css'
import { useState } from 'react'
import FreeConsultationCTA from './components/FreeConsultationCTA'
import MobileReviews from './components/MobileReviews'
import ResponsiveReviews from './components/ResponsiveReviews'



function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('University Administrations');

  return (
    <>
      <Navbar/>
      <Hero />
      <NursifyServices />
      <FreeConsultationCTA message={'Unlock Your Potential with Nursify Today!'} onClick={function (): void {
        throw new Error('Function not implemented.')
      } } 
        backgroundImage='/potential.png'/>
      <ExperienceButtons onChange={setSelectedCategory}/>
      <InteractiveGrid category={selectedCategory}/>
      <NursifyTeam />
      <FreeConsultationCTA message={'Let Our Expert Team Empower Yours!'} onClick={function (): void {
        throw new Error('Function not implemented.')
      } } 
        backgroundImage='/help.png'/>
      <ModuleSlides />
      <NursifyCertification/>
      {/* <ScrollingReviews /> */}
      <ResponsiveReviews />
      <About />
      <Contact />
      {/* <MobileReviews /> */}
      <Footer />
    </>
  )
}

export default App
