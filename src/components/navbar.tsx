import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Logo from "../assets/Logo.png";
import { cn } from "@/lib/utils";

// Configuración centralizada de las rutas del navbar.
const menuOptions = [
  { label: "Inicio", path: "/" },
  { label: "Productos", path: "/products" },
  { label: "Novedades", path: "/innovations" },
  { label: "Contacto", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-sombrero to-orbita text-white backdrop-blur-md  shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img src={Logo} alt="logo" className="h-8 w-auto" />
            <span className="text-xl font-semibold tracking-tight">
              NovaTech
            </span>
          </Link>

          {/* Menú para pantallas grandes */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-6">
              {menuOptions.map(({ label, path }) => (
                <Link
                  key={label}
                  to={path}
                  className="text-lg font-medium text-white hover:text-orbita hover:underline underline-offset-4 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="h-6 w-px bg-border mx-4" />

            {/* Botones de sesión */}
            <div className="flex items-center gap-3">
              <Button
                className={cn(
                  "bg-white text-sombrero text-md",
                  "hover:bg-orbita hover:text-white"
                )}
                asChild
              >
                <Link to="/loginform">Iniciar Sesión</Link>
              </Button>
              <Button className="bg-sombrero hover:bg-sombrero/80 text-md" asChild>
                <Link to="/RegisterForm">Registrarse</Link>
              </Button>
            </div>
          </div>

          {/* Botón de menú para móviles */}
          <Button
            onClick={toggleMenu}
            variant="ghost"
            size="icon"
            className="md:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Menú desplegable en móviles */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-16 inset-x-0 bg-gradient-to-r from-sombrero to-orbita text-white backdrop-blur-md border-b shadow-lg"
          >
            <div className="px-4 py-4 space-y-4">
              {menuOptions.map(({ label, path }) => (
                <Link
                  key={label}
                  to={path}
                  className="block py-2 px-3 rounded-lg hover:bg-white hover:text-black transition-colors"
                  onClick={toggleMenu}
                >
                  {label}
                </Link>
              ))}

              <div className="pt-4 space-y-3 border-t">
                <Button
                  className={cn(
                    "w-full bg-white text-black",
                    "hover:bg-orbita hover:text-white"
                  )}
                  asChild
                >
                  <Link to="/loginform">Iniciar Sesión</Link>
                </Button>
                <Button
                  className="w-full bg-sombrero hover:bg-sombrero/80"
                  asChild
                >
                  <Link to="/RegisterForm">Registrarse</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
