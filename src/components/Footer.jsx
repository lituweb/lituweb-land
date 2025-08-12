export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-600 to-orange-600 py-6 px-0.5 text-center text-white text-sm">
      © {new Date().getFullYear()} LituWeb. Todos los derechos reservados.
    </footer>
  );
}
