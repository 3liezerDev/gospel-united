const Hero = () => {
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
        <p className="text-md sm:text-xl md:text-2xl text-center">Concierto solidario</p>
      </div>
    </section>
  );
};

export default Hero;