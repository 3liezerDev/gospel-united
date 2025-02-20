
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react"; // Iconos de menú de lucide-react

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [textColor, setTextColor] = useState("text-white");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);

      if (scrollY < window.innerHeight - 100) {
        setTextColor("text-white");
      } else {
        setTextColor("text-black");
      }
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
        {/* Logo */}
        <a href="#" className={cn("text-2xl font-bold", textColor)}>
          GOSPEL UNITED
        </a>

        {/* Botón de menú para móviles */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Links de navegación (escritorio) */}
        <ul className="hidden md:flex gap-6">
          {["Inicio", "Galería", "Ubicación", "Contacto"].map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.toLowerCase()}`}
                className={cn("text-lg font-medium", textColor)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Menú desplegable en móviles */}
      <div
        className={cn(
          "fixed top-0 left-0 w-full h-screen bg-black/80 backdrop-blur-lg flex flex-col items-center justify-center space-y-6 text-white text-xl transition-all duration-300",
          menuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {["Inicio", "Galería", "Ubicación", "Contacto"].map((item, index) => (
          <a
            key={index}
            href={`#${item.toLowerCase()}`}
            className="hover:text-gray-300"
            onClick={() => setMenuOpen(false)} // Cierra el menú al hacer clic
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
