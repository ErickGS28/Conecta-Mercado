export default function Footer() {
  return (
    <footer className="bg-[#34495E] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div>
            <h3 className="font-bold text-lg mb-3">Conecta Mercado</h3>
            <p className="text-white/80 text-sm">
              Plataforma de e-commerce para pequeños negocios y emprendedores
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Nosotros</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-white/80 hover:text-white hover:underline">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="/fondo-impulsa" className="text-white/80 hover:text-white hover:underline">
                  Fondo Impulsa
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-white hover:underline">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Emprendedores</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/dashboard" className="text-white/80 hover:text-white hover:underline">
                  Panel de Control
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-white/80 hover:text-white hover:underline">
                  Beneficios
                </a>
              </li>
              <li>
                <a href="#fees" className="text-white/80 hover:text-white hover:underline">
                  Comisiones (8%)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-4 text-center text-white/70 text-sm">
          <p className="mb-1">Comisión: 8% | Fondo Impulsa: 1%</p>
          <p>&copy; 2024 Conecta Mercado. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
