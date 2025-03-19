import { useState, useEffect } from "react";
import { FaWhatsapp, FaEnvelope, FaHandHoldingHeart, FaPhone, FaCopy, FaCheck } from "react-icons/fa";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { toast } from "sonner";
import ContactModal from "../layout/Modal";

const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const iban = "ES14 2100 3052 7122 0071 0808";

  // Reset copied state when component unmounts or after timeout
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (copied) {
      timer = setTimeout(() => setCopied(false), 2000);
    }
    return () => clearTimeout(timer);
  }, [copied]);

  const handleCopy = async () => {
    try {
      // Para dispositivos móviles, usamos un enfoque más robusto
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(iban);
        setCopied(true);
        toast.success("IBAN copiado al portapapeles", {
          description: iban,
          duration: 2000,
        });
      } else {
        // Fallback para navegadores que no soporten clipboard API
        const textArea = document.createElement("textarea");
        textArea.value = iban;
        textArea.style.position = "fixed";  // Evita scroll
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        const successful = document.execCommand("copy");
        document.body.removeChild(textArea);
        
        if (successful) {
          setCopied(true);
          toast.success("IBAN copiado al portapapeles", {
            description: iban,
            duration: 2000,
          });
        } else {
          throw new Error("Fallback copy failed");
        }
      }
    } catch (err) {
      console.error("Error al copiar:", err);
      toast.error("Error al copiar", {
        description: "Intenta seleccionar y copiar manualmente",
        duration: 3000,
      });
    }
  };

  return (
    <section id="contact" className="my-10 max-w-5xl mx-auto">
      <div className="container px-4">
        <h2 className="text-3xl sm:text-4xl text-teal-900 md:text-4xl font-medium text-center mb-12">
          Contacto y Donaciones
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FaHandHoldingHeart className="text-xl" />
                <span>Contacto</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
            <ul className="space-y-4">
              <li className="flex items-center  gap-2">
                <div className=" mx-auto md:mx-4">
                  <p className="text-gray-700">
                    Encargado: <strong>Luis Arriola</strong>
                  </p>
                </div>
                
              </li>
              <div className="flex justify-center items-center md:flex-col md:justify-start md:items-start">
              <li>
                <a 
                  href="https://wa.me/+34657263938" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center sm:justify-start gap-3 p-3 rounded-lg hover:bg-green-50 transition-colors text-gray-700"
                >
                  <FaWhatsapp className="text-4xl sm:text-2xl text-green-500" />
                  <span className="hidden sm:inline">Contáctanos por WhatsApp: <strong>Luis Arriola</strong></span>
                  <span className="sm:hidden font-medium">WhatsApp</span>
                </a>
              </li>
              
              <li>
                <a 
                  href="tel:+34657263938" 
                  className="flex items-center justify-center sm:justify-start gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors text-gray-700"
                >
                  <FaPhone className="text-3xl sm:text-2xl text-blue-500" />
                  <span className="hidden sm:inline">Llamar a: <strong>Luis Arriola</strong></span>
                  <span className="sm:hidden font-medium">Llamar</span>
                </a>
              </li>
              </div>
          </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FaHandHoldingHeart className="text-xl" />
                <span>Donaciones</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <FaEnvelope className="text-xl text-gray-700 hover:text-gray-900" />
                  <a href="mailto:sendasdegraciabcn@gmail.com" className="text-gray-700 hover:text-blue-500">
                    Escríbenos a: <strong>sendasdegraciabcn@gmail.com</strong>
                  </a>
                </li>
                {/* <li className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🏦</span>
                    <p className="text-gray-700">
                      <strong>Transferencia bancaria:</strong>
                    </p>
                  </div>
                  
                  <div className="ml-3 ">
                    <p className="text-gray-700">Banco: CaixaBank</p>
                    
                    <div className="flex flex-col sm:flex-row sm:gap-2 items-start sm:items-center mt-2">
                      <div className="md:w-auto font-mono text-nowrap bg-gray-50 p-2 rounded border border-gray-200 mr-2 select-all">
                        {iban}
                      </div>
                      
                      <button 
                        onClick={handleCopy} 
                        type="button"
                        className=" mt-2 sm:mt-0 flex items-center justify-center gap-2 py-3 px-4 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-800 transition-colors duration-200 touch-action-manipulation cursor-pointer active:bg-gray-300 min-h-10 min-w-24"
                        style={{ WebkitTapHighlightColor: 'transparent' }}
                      >
                        {copied ? (
                          <>
                            <FaCheck className="text-green-600" />
                            <span>¡Copiado!</span>
                          </>
                        ) : (
                          <>
                            <FaCopy />
                            <span className="block md:hidden">Copiar IBAN</span>
                            <span className="hidden md:block">IBAN</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </li> */}
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-8">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">¡Sé parte de esto!</h3>
          <p className="text-gray-700 mb-6">
            Tu apoyo hace posible que este evento sea una realidad. ¡Únete y haz la diferencia!
          </p>
          <ContactModal trigger={
            <Button>
              <FaHandHoldingHeart className="text-xl" />
              Quiero Ayudar
            </Button>
          } /> 
        </div>
      </div>
    </section>
  );
};

export default ContactSection;