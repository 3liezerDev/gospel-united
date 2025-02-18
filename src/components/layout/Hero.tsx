
import { buttonVariants } from "@/components/ui/button"
import { Typewriter } from 'react-simple-typewriter';
import { FaCalendarAlt, FaMapMarkerAlt, FaHandsHelping } from 'react-icons/fa';

const Hero = () => {

  const phrases = [
    { icon: <FaHandsHelping />, text: 'Concierto solidario'  },
    { icon: <FaCalendarAlt />, text: 'Sábado 3 de Mayo' },
    { icon: <FaMapMarkerAlt />, text: ' Calle Valencia #655 BCN' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center">
      {/* Fondo con imagen */}
      <div
        className="absolute inset-0 bg-[url('C:/Users/Zeze/Desktop/GOSPEL-UNITED/gospel-united/src/assets/images/dark.webp')] bg-cover bg-center saturate-150"
        aria-hidden="true"
      ></div>

      {/* Overlay oscuro para mejorar la legibilidad del texto */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Contenido (texto) */}
      <div className="flex flex-col justify-center font-display items-center gap-2 z-10 text-white px-4 mb-20 sm:mb-40">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center">
          GOSPEL UNITED
        </h1>
        <p className="text-sm sm:text-xl md:text-2xl text-center">
          <Typewriter
            words={phrases.map((p) => p.text)}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>
        <a className={buttonVariants({ variant: "default" })} href="">
            + Más información
        </a>
      </div>
    </section>
  );
};

export default Hero;