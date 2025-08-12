import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-pink-600 to-orange-600">
      <motion.h2
        className="sm:text-5xl text-3xl font-extrabold text-white"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        Impulsá tu negocio con estilo ✨
      </motion.h2>
      <motion.p
        className="mt-4 text-base sm:text-lg text-white/90 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Creamos soluciones digitales impactantes para que destaques sobre la competencia.
      </motion.p>
      <motion.button
        className="mt-6 px-8 py-3 bg-white text-fucsia font-semibold rounded-xl shadow-lg hover:scale-105 transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ¡Comenzá ahora!
      </motion.button>
    </section>
  );
}
