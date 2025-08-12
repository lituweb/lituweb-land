import { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!form.name.trim()) newErrors.name = "El nombre es obligatorio.";
    if (!form.email.includes("@")) newErrors.email = "Email inválido.";
    if (form.message.trim().length < 10) newErrors.message = "El mensaje debe tener al menos 10 caracteres.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const res = await fetch("https://formspree.io/f/xldlzord", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        if (res.ok) {
          setSubmitted(true);
          setForm({ name: "", email: "", message: "" });
          setErrors({});
        } else {
          console.error("Error al enviar el formulario");
        }
      } catch (err) {
        console.error("Error de red:", err);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex justify-center mb-4">
            <Mail size={48} className="text-orange-600" />
          </div>
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
            Contáctanos
          </h2>
          <p className="text-gray-700 mb-8">¿Tienes dudas o un proyecto en mente? Escribinos.</p>
        </motion.div>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-xl p-6 space-y-4"
        >
          <div>
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-600"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div>
            <input
              type="email"
              placeholder="Tu email"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-600"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div>
            <textarea
              placeholder="Tu mensaje"
              rows="4"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-600"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>
          <motion.button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-pink-600 to-orange-600 text-white font-semibold rounded-lg hover:opacity-90"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Enviar mensaje
          </motion.button>
        </form>

        {submitted && (
          <motion.p
            className="text-green-600 mt-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            ¡Gracias por tu mensaje! Te respondemos en un rato.
          </motion.p>
        )}
      </div>
    </section>
  );
}
