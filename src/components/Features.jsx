import { motion } from "framer-motion";
import { Zap, WandSparkles, Layers } from "lucide-react";

export default function Features() {
  const features = [
    { icon: <Zap className="text-pink-600" size={40} />, title: "Rápido", desc: "Velocidad y rendimiento incomparables." },
    { icon: <WandSparkles className="text-orange-600" size={40} />, title: "Personalizado", desc: "Página hecha al gusto del cliente." },
    { icon: <Layers className="text-pink-600" size={40} />, title: "Escalable", desc: "Crece con vos sin perder calidad." },
  ];

  return (
    <section id="features" className="py-20 max-w-6xl mx-auto px-6">
      <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
        Características Principales
      </h3>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex justify-center mb-4">{f.icon}</div>
            <h4 className="text-xl font-semibold mb-2">{f.title}</h4>
            <p className="text-gray-600">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
