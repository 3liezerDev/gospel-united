import { useState } from "react"; 
import { Button } from "../../components/ui/button"; 
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "../ui/badge";

const images = [
    { src: "/assets/images/danza-alabanza01.jpg", alt: "Imagen 1" },
    { src: "/assets/images/pueblo-05.jpg", alt: "Imagen 2" },
    { src: "/assets/images/pueblo-06.jpg", alt: "Imagen 3" },
    { src: "/assets/images/pastores-01.jpg", alt: "Imagen 4" },
  ];

export default function Gallery() { 
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1)); 
  const nextImage = () => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div id="gallery" className="flex flex-col items-center text-center  py-8 px-4 md:px-10">
      {/* Texto Encima del Carrusel */}
      <h2 className="text-3xl sm:text-4xl text-teal-900 md:text-4xl font-medium text-center mb-4">
        Congresos Anteriores
      </h2>
      <p className="text-gray-600 max-w-xl text-lg text-center">
        Disfruta de las imágenes de nuestros eventos anteriores. <br />
        <strong>Ven y acompáñanos en la próxima edición 2025</strong>
      </p>
      <div className="text-center mt-4 mb-6">
        <Badge >
          Entrada Gratis
        </Badge>
      </div>


      {/* Contenedor de la Galería */}
      <div className="relative flex items-center justify-center w-full max-w-5xl">
        {/* Botón Izquierdo */}
        <Button variant="ghost" onClick={prevImage} className="absolute left-0 z-10 p-3">
          <ChevronLeft className="w-12 h-12 text-gray-700 hover:text-black transition-all duration-300 transform hover:scale-110" />
        </Button>

        {/* Imágenes en Capas */}
        <div className="relative w-full h-80 sm:h-96 flex items-center justify-center">
          {images.map((image, index) => {
            const position = (index - currentIndex + images.length) % images.length;
            const isMain = position === 0;
            const scale = isMain ? "scale-100" : "scale-90";
            const opacity = isMain ? "opacity-100" : "opacity-30";

            // Ajuste para no romper en móvil
            const translateX = position === 0 ? "translate-x-0" : position === 1 ? "translate-x-14 md:translate-x-35" : "-translate-x-14 md:-translate-x-30"; // Menos distancia en móvil

            return (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className={`absolute w-[70%] sm:w-[60%] max-w-2xl h-80 object-cover rounded-xl shadow-lg transition-all duration-700 ease-in-out ${scale} ${opacity} ${translateX}`}
                style={{ zIndex: isMain ? 10 : 5 }}
              />
            );
          })}
        </div>

        {/* Botón Derecho */}
        <Button variant="ghost" onClick={nextImage} className="absolute right-0 z-10 p-3">
          <ChevronRight className="w-12 h-12 text-gray-700 hover:text-black transition-all duration-300 transform hover:scale-110" />
        </Button>
      </div>
    </div>
  );
}
