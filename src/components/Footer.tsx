import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-sombrero to-orbita text-white border-t shadow-sm mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <Link
              to="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <img src={Logo} alt="logo" className="h-8 w-auto" />
              <span className="text-xl font-semibold tracking-tight">
                NovaTech
              </span>
            </Link>
            <p className="text-md text-white">
              Innovando el futuro de la tecnología. Productos de calidad para
              una experiencia excepcional.
            </p>
          </div>

          {/* Sección de la empresa */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-white">Empresa</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                to="/about"
                className="text-md text-white hover:text-orbita hover:underline underline-offset-4 transition-colors"
              >
                Sobre nosotros
              </Link>
              <Link
                to="/blog"
                className="text-md text-white hover:text-orbita hover:underline underline-offset-4 transition-colors"
              >
                Blog
              </Link>
            </nav>
          </div>

          {/* Sección de productos */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-white">Productos</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                to="/products"
                className="text-md text-white hover:text-orbita hover:underline underline-offset-4 transition-colors"
              >
                Todos los productos
              </Link>
              <Link
                to="/new-releases"
                className="text-md text-white hover:text-orbita hover:underline underline-offset-4 transition-colors"
              >
                Nuevos lanzamientos
              </Link>
              <Link
                to="/deals"
                className="text-md text-white hover:text-orbita hover:underline underline-offset-4 transition-colors"
              >
                Ofertas
              </Link>
              <Link
                to="/support"
                className="text-md text-white hover:text-orbita hover:underline underline-offset-4 transition-colors"
              >
                Soporte técnico
              </Link>
            </nav>
          </div>

          {/* Redes sociales */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-white">Conéctate</h3>
            <div className="flex space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="hover:text-sombrero" variant="ghost" size="icon" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="hover:text-sombrero" variant="ghost" size="icon" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="hover:text-sombrero" variant="ghost" size="icon" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* División legal */}
        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-md text-white">
              © {new Date().getFullYear()} NovaTech. Todos los derechos
              reservados.
            </div>
            <nav className="flex space-x-6">
              <Link
                to="/privacy"
                className="text-md text-white hover:text-orbita hover:underline underline-offset-4 transition-colors"
              >
                Privacidad
              </Link>
              <Link
                to="/terms"
                className="text-md text-white hover:text-orbita hover:underline underline-offset-4 transition-colors"
              >
                Términos
              </Link>
              <Link
                to="/cookies"
                className="text-md text-white hover:text-orbita hover:underline underline-offset-4 transition-colors"
              >
                Cookies
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
