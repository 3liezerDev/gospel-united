import Hero from "./components/layout/Hero"
import  Carousel from "./components/layout/Carousel"
import  Purpose from "./components/layout/Purpose"
import Navbar from "./components/layout/Navbar"
import LocationSection from "./components/layout/LocationSection"
import ContactSection from "./components/layout/ContactSection"




function App() {
 

  return (
    <>
      <Navbar />
      <Hero />
      <Purpose />
      <Carousel />
      <LocationSection />
      <ContactSection />
    </>
  )
}

export default App
