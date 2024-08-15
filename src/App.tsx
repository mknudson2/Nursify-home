import Navbar from './components/Navbar'
import Hero from './components/Hero'
import NursifyServices from './components/NursifyServices'
import ExperienceButtons from './components/ExperienceButtons'
import InteractiveGrid from './components/InteractiveGrid'
import NursifyTeam from './components/NursifyTeam'
import ModuleSlides from './components/ModuleSlides'
import ScrollingReviews from './components/ScrollingReviews'
import NursifyCertification from './components/NursifyCertification'
import Footer from './components/Footer'

import './styles/App.css'
import { useState } from 'react'
import FreeConsultationCTA from './components/FreeConsultationCTA'



function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('University Administrations');

  return (
    <>
      <Navbar/>
      <Hero />
      <NursifyServices />
      <FreeConsultationCTA message={'Unlock Your Potential with Nursify Today!'} onClick={function (): void {
        throw new Error('Function not implemented.')
      } } />
      <ExperienceButtons onChange={setSelectedCategory}/>
      <InteractiveGrid category={selectedCategory}/>
      <NursifyTeam />
      <ModuleSlides />
      <NursifyCertification/>
      <ScrollingReviews />
      <Footer />
    </>
  )
}

export default App
