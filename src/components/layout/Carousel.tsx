import { useState, useEffect } from "react"; // Importa solo useState y useEffect
import { CardMod } from "@/components/layout/CardMod";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

// Define el componente CarouselDApiDemo
export function CarouselDApiDemo() {
  const [api, setApi] = useState<CarouselApi>(); // Usa useState directamente
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mx-auto max-w-[70%] py-6 my-6">
      <Carousel setApi={setApi} className="w-full max-w-full">
        <CarouselContent>
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index}>
              <CardMod />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>
  );
}

// Exporta el componente por defecto
export default CarouselDApiDemo;