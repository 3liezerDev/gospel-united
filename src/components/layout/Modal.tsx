import React, { useState, useEffect, ReactNode } from "react";
import { 
  FaWhatsapp, 
  FaEnvelope, 
  FaHandHoldingHeart, 
  FaPhone, 
  FaCopy, 
  FaCheck 
} from "react-icons/fa";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";

interface ContactModalProps {
  trigger: ReactNode;
}

const ContactModal: React.FC<ContactModalProps> = ({ trigger }) => {
  // const iban = "ES14 2100 3052 7122 0071 0808";
  const email = "sendasdegraciabcn@gmail.com";
  const phone = "+34657263938";


  const [copiedIban, setCopiedIban] = useState(false);
  const [copiedName, setCopiedName] = useState(false);

  useEffect(() => {
    if (copiedIban) {
      const timer = setTimeout(() => setCopiedIban(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copiedIban]);

  useEffect(() => {
    if (copiedName) {
      const timer = setTimeout(() => setCopiedName(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copiedName]);

  const handleCopy = async (text: string, type: string, setCopied: React.Dispatch<React.SetStateAction<boolean>>) => {
    try {
      // Para dispositivos móviles, usamos un enfoque más robusto
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        toast.success(`${type} copiado al portapapeles`, {
          description: text,
          duration: 2000,
        });
      } else {
        // Fallback para navegadores que no soporten clipboard API
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";  // Evita scroll
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        const successful = document.execCommand("copy");
        document.body.removeChild(textArea);
        
        if (successful) {
          setCopied(true);
          toast.success(`${type} copiado al portapapeles`, {
            description: text,
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

  interface ContactItemProps {
    icon: React.ElementType;
    label: string;
    value: string;
    action: string;
    copyType?: string;
    link?: string;
    copiedState: boolean;
    setCopiedState: React.Dispatch<React.SetStateAction<boolean>>;
  }

  const ContactItem: React.FC<ContactItemProps> = ({ icon: Icon, label, value, action, link, copiedState, setCopiedState }) => {
    return (
      <div className="flex flex-col w-full bg-gray-50 rounded-lg border border-gray-100 overflow-hidden">
        <div className="flex items-center gap-3 p-3 bg-gray-100">
          <Icon className="text-2xl text-teal-700" />
          <span className="font-medium">{label}</span>
        </div>
        
        <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <p className="font-mono select-all">{value}</p>
          
          {link ? (
            <a
              href={link}
              target={link.startsWith("http") ? "_blank" : undefined}
              rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
              className="py-2 px-4 bg-teal-600 hover:bg-teal-700 text-white rounded flex items-center justify-center gap-2 transition-colors"
            >
              <Icon className="text-lg" />
              <span>{action}</span>
            </a>
          ) : (
            <button
                onClick={() => handleCopy(value, label, setCopiedState)}
                type="button"
                className="mt-2 sm:mt-0 flex items-center justify-center gap-2 py-3 px-4 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-800 transition-colors duration-200 touch-action-manipulation cursor-pointer active:bg-gray-300 min-h-10 min-w-24"
                style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                {copiedState ? (
                    <>
                    <FaCheck className="text-green-600" />
                    <span>¡Copiado!</span>
                    </>
                ) : (
                    <>
                    <FaCopy />
                    <span>{action}</span>
                    </>
                )}
                </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <Dialog >
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      
      <DialogContent className="w-[90%] max-w-md sm:max-w-lg md:max-w-xl h-[500px] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-2">
            <FaHandHoldingHeart className="text-xl text-teal-700" />
            <span>Contacto y Donaciones</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col gap-4 mt-4">

          {/* <ContactItem
            icon={() => <span className="text-xl">🏦</span>}
            label="IBAN"
            value={iban}
            action="Copiar IBAN"
            copiedState={copiedIban}
            setCopiedState={setCopiedIban}
          /> */}
          
          <ContactItem
            icon={FaWhatsapp}
            label="WhatsApp"
            value={phone}
            action="WhatsApp"
            link={`https://wa.me/${phone}`}
            copiedState={false}
            setCopiedState={() => {}}
          />
          
          <ContactItem
            icon={FaPhone}
            label="Teléfono"
            value={phone}
            action="Llamar"
            link={`tel:${phone}`}
            copiedState={false}
            setCopiedState={() => {}}
          />
          
          <ContactItem
            icon={FaEnvelope}
            label="Email"
            value={email}
            action="Enviar Email"
            link={`mailto:${email}`}
            copiedState={false}
            setCopiedState={() => {}}
          />
          
          <p className="text-center text-gray-600 text-sm mt-2">
            Tu apoyo hace posible que este evento sea una realidad. ¡Gracias por contribuir!
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;