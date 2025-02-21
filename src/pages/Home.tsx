import Hero from "../components/layout/Hero"
import  Carousel from "../components/layout/Carousel"
import  Purpose from "../components/layout/Purpose"
import LocationSection from "../components/layout/LocationSection"
import ContactSection from "../components/layout/ContactSection"




function Home() {
 

  return (
    <>
      <Hero />
      <Purpose />
      <Carousel />
      <LocationSection />
      <ContactSection />
    </>
  )
}

export default Home
