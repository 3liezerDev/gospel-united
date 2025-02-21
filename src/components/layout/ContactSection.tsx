import { FaWhatsapp, FaEnvelope, FaHandHoldingHeart } from "react-icons/fa";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 max-w-5xl  mx-auto ">
      <div className="containerpx-4">
        {/* Título de la sección */}
        <h2 className="text-3xl sm:text-4xl text-teal-900 md:text-4xl font-medium text-center mb-12">
          Contacto y Donaciones
        </h2>

        {/* Contenedor de la información */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Tarjeta de contacto */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FaHandHoldingHeart className="text-xl" />
                <span>Contacto</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {/* WhatsApp */}
                <li className="flex items-center gap-2">
                  <FaWhatsapp className="text-2xl text-teal-500 hover:text-gray-900" />
                  <a
                    href="https://wa.me/1234567890" // Reemplaza con tu número de WhatsApp
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700"
                  >
                    Envíanos un mensaje por WhatsApp
                  </a>
                </li>
                {/* Correo electrónico */}
                <li className="flex items-center gap-2">
                  <FaEnvelope className="text-xl text-gray-700 hover:text-gray-900" />
                  <a
                    href="mailto:info@gospelunited.com" // Reemplaza con tu correo
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
                  >
                    Escríbenos a info@gospelunited.com
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Tarjeta de donaciones */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FaHandHoldingHeart className="text-xl" />
                <span>Donaciones</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {/* Bizum */}
                <li className="flex items-center gap-2">
                  <span className="text-xl">💳</span>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Bizum:</strong> Usa el código <strong>12345</strong> para donar.
                  </p>
                </li>
                {/* Transferencia bancaria */}
                <li className="flex items-center gap-2">
                  <span className="text-xl">🏦</span>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Transferencia bancaria:</strong>
                    <br />
                    Banco: Gospel United Bank
                    <br />
                    IBAN: ES12 3456 7890 1234 5678 9012
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Llamado a la acción */}
        <div className="text-center mt-8">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            ¡Sé parte de esto!
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Tu apoyo hace posible que este evento sea una realidad. ¡Únete y haz la diferencia!
          </p>
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            Quiero Ayudar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;