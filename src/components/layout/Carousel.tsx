import { useState, useEffect } from "react"; 
import { CardMod } from "../../components/layout/CardMod";
import { carouselImages } from "../../lib/carouselImages";
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
  

  return (
    <div className="mx-auto max-w-[70%] md:max-w-5xl py-6 my-6">
      <h2 className="text-3xl font-bold text-center text-teal-900 mb-10">
        Ven y disfruta con nosotros!
      </h2>
      <Carousel setApi={setApi} className="w-full max-w-full">
        <CarouselContent>
          {carouselImages.map((data, index) => (
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
