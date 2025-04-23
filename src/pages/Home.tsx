import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/layout/Hero"
// import  Carousel from "../components/layout/Carousel"
import  Purpose from "../components/layout/Purpose"
import LocationSection from "../components/layout/LocationSection"
import ContactSection from "../components/layout/ContactSection"
import GalleryValencia from "../components/layout/GalleryValencia"
import SpecialInvitation from "../components/layout/SpecialInvitation"





function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Purpose />
      <GalleryValencia />
      <LocationSection />
      <SpecialInvitation />
      <ContactSection />
    </>
  );
}

export default Home
