import { motion } from "framer-motion";
import { Users } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-pink-600/10 to-orange-600/10">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4">
            <Users size={48} className="text-pink-600" />
          </div>
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
            Sobre Mí
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Soy Olivia Iturrusgarai, me encanta crear experiencias digitales únicas y efectivas.
            Mi objetivo es ayudarte a destacar y conectar con tu audiencia a través de
            diseños modernos, tecnología de vanguardia y estrategias creativas.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
