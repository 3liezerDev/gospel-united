
import { buttonVariants } from "../../components/ui/button"
import { Typewriter } from 'react-simple-typewriter';
import { cn } from "../../lib/utils"


const Hero = () => {

  const phrases = [
    {  text: 'Concierto solidario'  },
    {  text: 'Fecha: Sábado 3 de Mayo de 2025' },
    {  text: 'Lugar: Calle Valencia #655 BCN' },
    {  text: 'Hora: 16:00 PM - 19:00 PM' },
  ];

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-cover bg-center">
      {/* Fondo con imagen */}
      <div
        className="absolute inset-0 bg-[url('/assets/images/dark.webp')] bg-cover bg-center saturate-150"
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
        <a 
          href="#purpose"
          className={cn(
            buttonVariants({ variant: "default" }),
          )}
        >
          + Más información
        </a>
      </div>
    </section>
  );
};

export default Hero;