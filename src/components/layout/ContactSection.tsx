import { FaWhatsapp, FaEnvelope, FaHandHoldingHeart, FaPhone } from "react-icons/fa";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { buttonVariants } from "../../components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="my-10 max-w-5xl  mx-auto ">
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
                  
                  <a
                    href="https://wa.me/+34657263938" // Reemplaza con tu número de WhatsApp
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex md:gap-2 text-gray-700"
                  >
                    <FaWhatsapp className="text-2xl text-green-500 " />
                    contáctanos por WhatsApp:<strong>Ps. Luis Arriola</strong>
                  </a>
                </li>
                {/* Correo electrónico */}
                <li className="flex items-center gap-2">
                  <FaEnvelope className="text-xl text-gray-700 hover:text-gray-900" />
                  <a
                    href="mailto:sendasdegracia@gmail.com" // Reemplaza con tu correo
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
                  >
                    Escríbenos a sendasdegracia@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <a
                    href="tel:+34657263938" // Reemplaza con tu número
                    className="flex gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-500"
                  >
                  <FaPhone className="text-xl text-gray-700 hover:text-gray-900" />
                    Llamar a <strong>Ps. Luis Arriola</strong>
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
                    <strong>Bizum:</strong> al teléfono  <strong>#123456789</strong> para donar.
                  </p>
                </li>
                {/* Transferencia bancaria */}
                <li className="flex items-center gap-2">
                  <span className="text-xl">🏦</span>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Transferencia bancaria:</strong>
                    <br />
                    Banco: CaixaBank
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
          <a
          href="https://wa.me/+34657263938" // Reemplaza con tu número de WhatsApp
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({ variant: "default" }) + 'bg-green-600 hover:bg-green-700 text-white flex gap-2'}
          >
            <FaHandHoldingHeart className="text-xl" />
            Quiero Ayudar
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;