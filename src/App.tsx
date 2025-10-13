import AboutMe from "./components/AboutMe"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import SkillsSection from "./components/SkillsSection"
import MyProjects from "./components/MyProjects"
import LetsConnect from "./components/LetsConnect"
import Footer from "./components/Footer"


function App() {

  return (
     <div className="relative">
      <Navbar />
      <div className="min-h-screen w-full 
      bg-gradient-to-r from-[rgba(253,111,0,0.9)] to-[#0e0e0e] 
      animate-gradient-x text-white">
      <Hero />
      <AboutMe />
      <SkillsSection />
      <MyProjects />
      <LetsConnect />
      </div>
      <Footer />
    </div>
  )
}

export default App
