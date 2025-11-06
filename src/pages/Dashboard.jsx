import { Package, DollarSign, TrendingUp, Users } from 'lucide-react';

export default function Dashboard({ user }) {
  if (!user || user.role !== 'entrepreneur') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#0D3C61] mb-4">Acceso Denegado</h2>
          <p className="text-gray-600 mb-4">Debes ser un emprendedor para acceder</p>
          <a href="/login" className="inline-block bg-[#0D3C61] text-white px-6 py-3 rounded-lg">Iniciar Sesión</a>
        </div>
      </div>
    );
  }

  const stats = [
    { icon: DollarSign, label: 'Ventas del Mes', value: '$2,450', change: '+12%', color: '#0D3C61' },
    { icon: Package, label: 'Productos Activos', value: '12', change: '3 colaboraciones', color: '#00A6B3' },
    { icon: TrendingUp, label: 'Pedidos', value: '24', change: '+8 esta semana', color: '#28A745' },
    { icon: Users, label: 'Clientes', value: '156', change: '15 nuevos', color: '#FFC107' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#0D3C61]">Panel de Emprendedor</h1>
          <p className="text-gray-600">Bienvenido, {user.name}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-lg p-6 shadow-md flex gap-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: stat.color }}>
                <stat.icon size={24} color="white" />
              </div>
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-[#0D3C61]">{stat.value}</p>
                <p className="text-xs text-green-600">{stat.change}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Banner Fondo Impulsa para Emprendedores */}
        <div className="mb-8">
          <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white rounded-2xl shadow-2xl">
            {/* Patrón decorativo */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '30px 30px'
              }}></div>
            </div>

            <div className="relative p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Contenido */}
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full mb-3 text-sm">
                    <span className="animate-pulse">🌟</span>
                    <span>Oportunidad Exclusiva</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-2">¿Necesitas Capital para Crecer?</h3>
                  <p className="text-lg opacity-90 mb-4 max-w-xl">
                    Postúlate al <strong>Fondo Impulsa</strong> y recibe apoyo de la comunidad.
                    El próximo ganador recibirá <strong className="text-yellow-300">$15,234</strong> para invertir en su negocio.
                  </p>

                  {/* Mini stats */}
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                      <div className="text-2xl font-bold">$15,234</div>
                      <div className="text-xs opacity-80">Fondo Disponible</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                      <div className="text-2xl font-bold">45 días</div>
                      <div className="text-xs opacity-80">Para Postular</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                      <div className="text-2xl font-bold">100%</div>
                      <div className="text-xs opacity-80">Gratis</div>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="/fondo-impulsa"
                      className="inline-flex items-center justify-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
                    >
                      <span>🚀</span>
                      Postular Mi Proyecto
                    </a>
                    <a
                      href="/fondo-impulsa"
                      className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-all"
                    >
                      <span>📖</span>
                      Ver Requisitos
                    </a>
                  </div>
                </div>

                {/* Imagen/Visual de emprendedores ganadores */}
                <div className="hidden lg:block">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 w-64">
                    <div className="text-center mb-4">
                      <div className="text-sm font-semibold opacity-90 mb-3">Últimos Ganadores</div>
                      <div className="flex justify-center -space-x-3 mb-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 border-2 border-white flex items-center justify-center text-xl">
                          👩
                        </div>
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 border-2 border-white flex items-center justify-center text-xl">
                          👨
                        </div>
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-teal-500 border-2 border-white flex items-center justify-center text-xl">
                          👩
                        </div>
                      </div>
                      <div className="text-xs opacity-90">Laura, Mario y Patricia</div>
                      <div className="text-sm font-bold mt-2">$11,300 entregados</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3 text-xs">
                      <div className="flex items-start gap-2">
                        <span>💬</span>
                        <p className="italic">"Gracias al Fondo Impulsa pude comprar equipo profesional y crecer 300%"</p>
                      </div>
                      <div className="text-right mt-1 font-semibold">- Laura S.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Sales */}
          <div className="lg:col-span-2 bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-bold text-[#0D3C61] mb-4">Ventas Recientes</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 text-[#0D3C61]">Producto</th>
                    <th className="text-left p-3 text-[#0D3C61]">Cliente</th>
                    <th className="text-left p-3 text-[#0D3C61]">Total</th>
                    <th className="text-left p-3 text-[#0D3C61]">Fecha</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b"><td className="p-3">Set Cuadernos</td><td className="p-3">Juan Pérez</td><td className="p-3">$599.98</td><td className="p-3">05/11/24</td></tr>
                  <tr className="border-b"><td className="p-3">Set Escritorio</td><td className="p-3">María López</td><td className="p-3">$499.99</td><td className="p-3">04/11/24</td></tr>
                  <tr className="border-b"><td className="p-3">Set Cuadernos</td><td className="p-3">Carlos Ruiz</td><td className="p-3">$299.99</td><td className="p-3">03/11/24</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-bold text-[#0D3C61] mb-4">Acciones Rápidas</h2>
            <div className="space-y-3">
              <button className="w-full bg-[#0D3C61] text-white py-2 rounded-lg hover:bg-[#0A2E4A] transition">Agregar Producto</button>
              <button className="w-full bg-[#00A6B3] text-white py-2 rounded-lg hover:bg-[#008A95] transition">Ver Colaboraciones</button>
              <a href="/fondo-impulsa" className="block w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition text-center font-semibold">🌟 Fondo Impulsa</a>
              <button className="w-full border-2 border-[#0D3C61] text-[#0D3C61] py-2 rounded-lg hover:bg-[#0D3C61] hover:text-white transition">Ver Perfil</button>
            </div>

            {/* Tu contribución al fondo */}
            <div className="mt-6 p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
              <div className="text-sm font-semibold text-green-800 mb-2">Tu Aporte al Fondo</div>
              <div className="text-2xl font-bold text-green-600 mb-1">$24.50</div>
              <div className="text-xs text-green-700">De tus ventas del mes</div>
              <div className="mt-2 text-xs text-green-600">
                ¡Gracias por contribuir al ecosistema! 💚
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
