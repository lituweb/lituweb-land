import { motion } from "framer-motion";
    
export default function Navbar() {
  return (
    <motion.nav
      className="flex justify-between items-center p-1 sm:px-2 sm:py-6 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center sm:gap-2">
        <img className="h-10 sm:h-18" src="/img/LituWeb.svg"></img>
        <h1 className="text-base sm:text-2xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
          LituWeb
        </h1>
      </div>
      <ul className="flex sm:gap-6 invisible sm:visible text-gray-700 font-medium">
        <li><a href="#features" className="text-xs sm:text-base hover:text-pink-600">Características</a></li>
        <li><a href="#about" className="text-xs sm:text-base hover:text-pink-600">Sobre Nosotros</a></li>
        <li><a href="#contact" className="text-xs sm:text-base hover:text-pink-600">Contacto</a></li>
      </ul>
    </motion.nav>
  );
}
