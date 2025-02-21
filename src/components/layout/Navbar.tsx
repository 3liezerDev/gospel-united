import { useEffect, useState } from "react";
import {  useLocation } from "react-router-dom"; // Importa useLocation
import { cn } from "../../lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Obtiene la ruta actual

  // Establece los colores por ruta
  const getTextColor = () => {
    switch (location.pathname) {
      case "/gallery":
        return "text-black"; // Texto oscuro para fondo claro
      default:
        return "text-white"; // Texto blanco por defecto
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 p-2 transition-all duration-300",
        scrolled ? "bg-black/30 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#inicio" className={cn("text-2xl font-bold", getTextColor())}>
          GOSPEL UNITED
        </a>

        {/* Menú móvil */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Menú de escritorio */}
        <ul className="hidden md:flex gap-6">
          
          <li>
            <a
              href="#gallery"
              className={cn("text-lg font-medium", getTextColor())}
            >
              Galería
            </a>
          </li>
          <li>
            <a href="#location" className={cn("text-lg font-medium", getTextColor())}>
              Ubicación
            </a>
          </li>
          <li>
            <a href="#contact" className={cn("text-lg font-medium", getTextColor())}>
              Contacto
            </a>
          </li>
        </ul>
      </div>

      {/* Menú desplegable en móviles */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black/80 flex flex-col items-center justify-center text-white text-xl space-y-6">
          <a href="#inicio" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>
            Inicio
          </a>
          <a href="#gallery" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>
            Galería
          </a>
          <a href="#location" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>
            Ubicación
          </a>
          <a href="#contact" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
