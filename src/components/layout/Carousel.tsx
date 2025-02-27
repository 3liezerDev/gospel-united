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
      imageSrc: "/assets/images/danza-01.jpg",
      imageAlt: "Notification Image",
      title: "Danza",
      subtitle: "Participación especial de danza",
      notifications: [
        { title: "Your call has been confirmed.", description: "1 hour ago" },
        { title: "You have a new message!", description: "1 hour ago" },
        { title: "Your subscription is expiring soon!", description: "2 hours ago" },
      ],
      buttonText: "Mark as Read",
    },
    {
      imageSrc: "/assets/images/danza-alabanza01.jpg",
      imageAlt: "Notification Image",
      title: "Alabanza y adoración",
      subtitle: "You have 2 new updates.",
      notifications: [
        { title: "New version available.", description: "30 mins ago" },
        { title: "Security patch applied.", description: "2 hours ago" },
        { title: "Server maintenance at midnight.", description: "4 hours ago" },
      ],
      buttonText: "Update Now",
    },
    {
      imageSrc: "/assets/images/jovenes.jpg",
      imageAlt: "Notification Image",
      title: "Participaciones especiales",
      subtitle: "Check the latest alerts.",
      notifications: [
        { title: "Suspicious login detected.", description: "10 mins ago" },
        { title: "Server maintenance at midnight.", description: "4 hours ago" },
        { title: "Server maintenance at midnight.", description: "4 hours ago" },
      ],
      buttonText: "View Alerts",
    },
  ];

  return (
    <div className="mx-auto max-w-[70%] md:max-w-5xl py-6 my-6">
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
