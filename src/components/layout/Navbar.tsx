import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { cn } from "../../lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Estilo de texto según la ruta
  const getTextColor = () => {
    switch (location.pathname) {
      case "/colaboradores":
        return "text-black";
      default:
        return "text-white";
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
        <Link
          to="/"
          state={{ scrollTo: "inicio" }}
          className={cn("text-2xl font-bold", getTextColor())}
        >
          GOSPEL UNITED
        </Link>

        {/* Menú móvil */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Menú escritorio */}
        <ul className="hidden md:flex gap-6">
        <li>
            <Link
              to="/colaboradores"
              className={cn("text-lg font-medium", getTextColor())}
            >
              Colaboradores
            </Link>
          </li>
          <li>
            <Link
              to="/"
              state={{ scrollTo: "gallery" }}
              className={cn("text-lg font-medium", getTextColor())}
            >
              Galería
            </Link>
          </li>
          <li>
            <Link
              to="/"
              state={{ scrollTo: "location" }}
              className={cn("text-lg font-medium", getTextColor())}
            >
              Ubicación
            </Link>
          </li>
          <li>
            <Link
              to="/"
              state={{ scrollTo: "contact" }}
              className={cn("text-lg font-medium", getTextColor())}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black/80 flex flex-col items-center justify-center text-white text-xl space-y-6">
          <Link to="/" state={{ scrollTo: "inicio" }} onClick={() => setMenuOpen(false)}>
            Inicio
          </Link>
          <Link to="/" state={{ scrollTo: "gallery" }} onClick={() => setMenuOpen(false)}>
            Galería
          </Link>
          <Link to="/" state={{ scrollTo: "location" }} onClick={() => setMenuOpen(false)}>
            Ubicación
          </Link>
          <Link to="/" state={{ scrollTo: "contact" }} onClick={() => setMenuOpen(false)}>
            Contacto
          </Link>
          <Link to="/colaboradores" onClick={() => setMenuOpen(false)}> Colaboradores</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
