import Hero from "../components/layout/Hero"
import  Carousel from "../components/layout/Carousel"
import  Purpose from "../components/layout/Purpose"
import LocationSection from "../components/layout/LocationSection"
import ContactSection from "../components/layout/ContactSection"
import Gallery from "../components/layout/Gallery"
import BentoGrid from "../components/layout/BentoGrid"




function Home() {
 

  return (
    <>
      <Hero />
      <Purpose />
      <Gallery />
      <LocationSection />
      <BentoGrid />
      <Carousel />
      <ContactSection />
    </>
  )
}

export default Home
