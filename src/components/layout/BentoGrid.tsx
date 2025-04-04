import { Card, CardContent } from "../ui/card";
import GuestCard from "../../components/layout/GuestCard";
import { images } from "../../lib/guestImages";
import { FaArrowRight } from "react-icons/fa";

export default function BentoGrid() {
  return (
    <div>
      <h2 className="text-3xl sm:text-4xl text-teal-900 md:text-4xl font-medium text-center my-12 ">
          Unidos en solidaridad con un propósito
      </h2>
      <section className="w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[200px] gap-4 p-6">
            
        {/* Texto informativo */}
        
      <Card className="lg:col-span-1 lg:row-span-1 col-span-1 row-span-1 bg-gray-50  shadow-md text-gray-700">
          <CardContent className="p-4">

            <h2 className="text-xl font-bold">Invitación especial</h2>
            <p className="text-sm text-muted-foreground mt-2">
              Un saludo muy especial de nuestros amigos y hermanos para cada uno de vosotros, no te lo pierdas dale play al video 
              <FaArrowRight className="inline-block mr-2" />
              ¡Te esperamos!
            </p>
            
          </CardContent>
        </Card>



        {/* Video principal (ocupa 3 columnas y 2 filas) */}
        <Card className="lg:col-span-3 lg:row-span-2 col-span-1 row-span-1">
          <CardContent className="w-full h-full p-0">
            <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-lg">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/NJGwMTlcHFo"
                title="Saludo Especial - Gospel United"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </CardContent>
        </Card>

        {/* Galería de invitados */}
        {images.map((img, index) => (
          <GuestCard key={index} {...img} />
        ))}
      </section>
    </div>
  );
}
