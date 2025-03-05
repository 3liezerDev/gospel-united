import { useState, useEffect } from "react"; 
import { CardMod } from "../../components/layout/CardMod";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "../../components/ui/carousel";

export function CarouselDApiDemo() {
  const [api, setApi] = useState<CarouselApi>(); 
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // Datos para las tarjetas
  const cardData = [
    {
      imageSrc: "/assets/images/grupo-danza.jpg",
      imageAlt: "Imagen de Danza",
      title: "Danza",
      subtitle: "Expresando la adoración por medio de la danza ",
      notifications: [
        { title: "Coreografía especial de grupo de danza", description: "Grupo oficial del evento" },
        { title: "Participaciones especiales", description: "Grupos invitados" },
        { title: "Presentación oficial en evento gospel united", description: "Sábado 03 de Mayo 2025" },
      ],
      buttonText: "Ver Galería",
    },
    {
      imageSrc: "/assets/images/danza-alabanza01.jpg",
      imageAlt: "Imagen de Alabanza",
      title: "Alabanza y Adoración",
      subtitle: "Elevando nuestras voces en gratitud",
      notifications: [
        { title: "Servicio de adoración en vivo", description: "Salmo 100:2 Adoren al Señor con alegría; vengan ante él con cánticos de júbilo." },
        { title: "Interpretación de alabanza y adoración", description: "Interpretación musical en vivo" },
        { title: "Participaciones especiales", description: "Cantantes invitados" },
      ],
      buttonText: "Ver Galería",
    },
    {
      imageSrc: "/assets/images/pastores-01.jpg",
      imageAlt: "Imagen de Participaciones Especiales",
      title: "Participaciones Especiales",
      subtitle: "Momentos únicos de inspiración y fortalecimiento",
      notifications: [
        { title: "Testimonios impactantes", description: "obras maravillosas de Dios" },
        { title: "Invitados especiales confirmados", description: "Pastores y predicadores" },
        { title: "Presentaciones sorpresa", description: "Teatros, Cantos y más.." },
      ],
      buttonText: "Ver Galería",
    },
  ];

  return (
    <div className="mx-auto max-w-[70%] md:max-w-5xl py-6 my-6">
      <h2 className="text-3xl font-bold text-center text-teal-900 mb-10">
        Ven y disfruta con nosotros!
      </h2>
      <Carousel setApi={setApi} className="w-full max-w-full">
        <CarouselContent>
          {cardData.map((data, index) => (
            <CarouselItem key={index}>
              <CardMod {...data} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Deslizar {current} de {count}
      </div>
    </div>
  );
}

export default CarouselDApiDemo;
