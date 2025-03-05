import { FaMapMarkerAlt, FaBus, FaTrain, FaCar } from "react-icons/fa";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { buttonVariants } from "../../components/ui/button";

const LocationSection = () => {

  const placeDetail = [
    {
      index: 1,
      title: "Fecha:",
      subtitle:"Sábado 3 de Mayo de 2025"
    },
    {
      index: 2,
      title: "Hora:",
      subtitle:"16:00 PM - 19:00 PM"
    },
    {
      index: 3,
      title: "Lugar:",
      subtitle:"Carrer de València, 655, 08026 Barcelona, España"
    },
  ]


  return (
    <section id="location" className="py-12">
        <h2 className="text-3xl sm:text-4xl text-teal-900 md:text-4xl font-medium text-center ">
          Ubicación y Medios de Transporte
        </h2>
      <div className=" max-w-5xl mx-auto py-4 px-4 h-full "
      >
        
        <Card className=" flex flex-col md:justify-around md:items-center md:flex-row shadow-md h-full px-6 py-2 my-10">
      {placeDetail.map((data) => (
        
            <div
              key={data.index}
              className="grid grid-cols-[25px_1fr] items-start py-2 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-teal-700" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {data.title}
                </p>
                <p className="text-sm text-muted-foreground">{data.subtitle}</p>
              </div>
            </div>
          ))}
          </Card>

        {/* Contenedor de la información */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full mt-8">
          {/* Tarjeta de ubicación */}
          <Card className="shadow-lg h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-xl " />
                <span>Ubicación</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              El evento será en el auditorio de <strong>Carrer de València, 655, 08026 Barcelona, España</strong>, una zona céntrica y de fácil acceso en la ciudad.
            </p>
              {/* Mapa embebido (puedes usar Google Maps o cualquier otro servicio) */}
              <div className="w-full h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.2458251675207!2d2.189293938017501!3d41.41218210280729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a328cd979353%3A0x4be349a879100e73!2sCarrer%20de%20Val%C3%A8ncia%2C%20655%2C%20Sant%20Mart%C3%AD%2C%2008026%20Barcelona%2C%20Espa%C3%B1a!5e0!3m2!1ses!2spe!4v1740065003688!5m2!1ses!2spe"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </CardContent>
          </Card>

          {/* Tarjeta de medios de transporte */}
          <Card className="shadow-lg h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FaBus className="text-xl" />
                <span>Medios de Transporte del Evento</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-8">
                {/* Autobús */}
                <li className="flex items-center gap-6">
                  <FaBus className="text-4xl text-gray-500" />
                  <p className="text-gray-700">
                    <strong>Autobús: H10, 33, 34, 62, V25. </strong>Estas rutas tienen paradas en las proximidades de Carrer de València, 655.
                  </p>
                </li>
                {/* Tren */}
                <li className="flex items-center gap-6">
                  <FaTrain className="text-2xl text-gray-500" />
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Metro: L1 (Roja) </strong> La estación Clot es la más cercana a la dirección mencionada.
                  </p>
                </li>
                {/* Auto */}
                <li className="flex items-center gap-6">
                  <FaCar className="text-4xl text-gray-500" />
                  <p className="text-gray-700">
                    <strong>Auto:</strong> La ubicación es accesible en coche, con opciones de estacionamiento en las inmediaciones.
                  </p>
                </li>
                
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Botón de acción */}
        <div className="text-center mt-8">
          <a
          href="https://www.google.com/maps/place/Carrer+de+Val%C3%A8ncia,+655,+08026+Barcelona,+Espa%C3%B1a" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={buttonVariants({ variant: "default" })}> 
          <FaMapMarkerAlt className="text-md" />
            Obtener Dirección
          </a>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;