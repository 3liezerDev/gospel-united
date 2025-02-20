import { FaMapMarkerAlt, FaBus, FaTrain, FaCar, FaBicycle } from "react-icons/fa";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const LocationSection = () => {
  return (
    <section className="py-12">
      <div className=" max-w-5xl mx-auto px-4 h-full ">
        {/* Título de la sección */}
        <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-center mb-8">
          Ubicación y Medios de Transporte
        </h2>

        {/* Contenedor de la información */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
          {/* Tarjeta de ubicación */}
          <Card className="shadow-lg h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-xl" />
                <span>Ubicación</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus ut augue a faucibus.
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
                <span>Medios de Transporte</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {/* Autobús */}
                <li className="flex items-center gap-2">
                  <FaBus className="text-xl text-gray-700 dark:text-gray-300" />
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Autobús:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </li>
                {/* Tren */}
                <li className="flex items-center gap-2">
                  <FaTrain className="text-xl text-gray-700 dark:text-gray-300" />
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Tren:</strong> Cras finibus ut augue a faucibus.
                  </p>
                </li>
                {/* Auto */}
                <li className="flex items-center gap-2">
                  <FaCar className="text-xl text-gray-700 dark:text-gray-300" />
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Auto:</strong> In iaculis at diam suscipit sodales.
                  </p>
                </li>
                {/* Bicicleta */}
                <li className="flex items-center gap-2">
                  <FaBicycle className="text-xl text-gray-700 dark:text-gray-300" />
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Bicicleta:</strong> Sed rutrum lobortis ultrices.
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Botón de acción */}
        <div className="text-center mt-8">
          <Button>
          <FaMapMarkerAlt className="text-md" />
            Obtener Dirección
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;