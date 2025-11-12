import { useState } from 'react';
import { Heart, Trophy, TrendingUp, Users, DollarSign, Calendar, Target, Award } from 'lucide-react';
import { mockFondoImpulsa } from '../data/mockData';
import Modal from '../components/Modal';

export default function FondoImpulsa() {
  const [candidates, setCandidates] = useState(mockFondoImpulsa);
  const [voted, setVoted] = useState([]);
  const [activeTab, setActiveTab] = useState('candidatos'); // candidatos | como-funciona | ganadores
  const [modal, setModal] = useState({ isOpen: false, title: '', message: '', type: 'info' });

  const handleVote = (id) => {
    if (voted.includes(id)) {
      setModal({
        isOpen: true,
        title: 'Ya votaste',
        message: 'Ya has votado por este candidato. Solo puedes votar una vez por cada proyecto.',
        type: 'warning'
      });
      return;
    }
    setCandidates(prev => prev.map(c => c.id === id ? { ...c, votes: c.votes + 1 } : c));
    setVoted([...voted, id]);
    setModal({
      isOpen: true,
      title: '¡Voto registrado!',
      message: 'Gracias por apoyar a este emprendedor. Tu voto ha sido contabilizado exitosamente.',
      type: 'success'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Banner - Súper Llamativo */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#0D3C61] via-[#00A6B3] to-[#0D3C61] text-white">
        {/* Patrón de fondo animado */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="text-center">
            {/* Badge superior */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 animate-pulse">
              <Award className="w-5 h-5" />
              <span className="font-semibold">Impacto Social | Votación Activa</span>
            </div>

            {/* Título principal */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="inline-block animate-bounce">🌟</span> Fondo Impulsa
            </h1>
            <p className="text-2xl md:text-3xl font-light mb-8 max-w-3xl mx-auto leading-relaxed">
              Juntos impulsamos el sueño de emprendedores que están comenzando
            </p>

            {/* Stats destacadas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105">
                <DollarSign className="w-8 h-8 mx-auto mb-2" />
                <div className="text-4xl font-bold">$15,234</div>
                <div className="text-sm opacity-90 mt-1">Fondo Acumulado</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105">
                <Users className="w-8 h-8 mx-auto mb-2" />
                <div className="text-4xl font-bold">423</div>
                <div className="text-sm opacity-90 mt-1">Votantes</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105">
                <Trophy className="w-8 h-8 mx-auto mb-2" />
                <div className="text-4xl font-bold">3</div>
                <div className="text-sm opacity-90 mt-1">Apoyados</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105">
                <TrendingUp className="w-8 h-8 mx-auto mb-2" />
                <div className="text-4xl font-bold">1%</div>
                <div className="text-sm opacity-90 mt-1">De Cada Venta</div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => setActiveTab('candidatos')}
                className="bg-white text-[#0D3C61] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl flex items-center gap-2"
              >
                <Heart className="w-5 h-5" />
                Vota Ahora
              </button>
              <button
                onClick={() => setActiveTab('como-funciona')}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <Target className="w-5 h-5" />
                ¿Cómo Funciona?
              </button>
            </div>
          </div>
        </div>

        {/* Wave divisor */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </div>

      {/* Tabs de Navegación */}
      <div className="sticky top-16 z-40 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto">
            <button
              onClick={() => setActiveTab('candidatos')}
              className={`px-6 py-4 font-semibold transition-all border-b-4 ${
                activeTab === 'candidatos'
                  ? 'border-[#00A6B3] text-[#00A6B3]'
                  : 'border-transparent text-gray-600 hover:text-[#00A6B3]'
              }`}
            >
              🗳️ Candidatos Actuales
            </button>
            <button
              onClick={() => setActiveTab('como-funciona')}
              className={`px-6 py-4 font-semibold transition-all border-b-4 ${
                activeTab === 'como-funciona'
                  ? 'border-[#00A6B3] text-[#00A6B3]'
                  : 'border-transparent text-gray-600 hover:text-[#00A6B3]'
              }`}
            >
              ℹ️ ¿Cómo Funciona?
            </button>
            <button
              onClick={() => setActiveTab('ganadores')}
              className={`px-6 py-4 font-semibold transition-all border-b-4 ${
                activeTab === 'ganadores'
                  ? 'border-[#00A6B3] text-[#00A6B3]'
                  : 'border-transparent text-gray-600 hover:text-[#00A6B3]'
              }`}
            >
              🏆 Historias de Éxito
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Tab: Candidatos */}
        {activeTab === 'candidatos' && (
          <div className="space-y-8">
            {/* Countdown Timer */}
            <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-2xl p-8 text-center shadow-xl">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Calendar className="w-6 h-6" />
                <span className="text-lg font-semibold">Votación en Curso - Periodo 2025-H2</span>
              </div>
              <p className="text-4xl font-bold mb-2">45 días restantes</p>
              <p className="text-lg opacity-90">para cerrar la votación</p>
            </div>

            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#0D3C61] mb-3">Conoce a los Candidatos</h2>
              <p className="text-gray-600 text-lg">
                Vota por el emprendedor que más te inspire. ¡Tu voto marca la diferencia!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {candidates.map((candidate) => (
                <div
                  key={candidate.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-[#00A6B3]"
                >
                  {/* Imagen con overlay */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={candidate.image}
                      alt={candidate.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-1">{candidate.name}</h3>
                      <p className="text-white/90 text-lg">{candidate.project}</p>
                    </div>
                    {/* Badge de posición */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <div className="flex items-center gap-1">
                        <Heart size={18} className="text-red-500" />
                        <span className="font-bold text-[#0D3C61]">{candidate.votes}</span>
                      </div>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="p-6">
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                      {candidate.description}
                    </p>

                    {/* Barra de progreso visual */}
                    <div className="mb-6">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">Apoyo de la comunidad</span>
                        <span className="font-semibold text-[#00A6B3]">
                          {((candidate.votes / 500) * 100).toFixed(1)}%
                        </span>
                      </div>
                      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#00A6B3] to-[#0D3C61] transition-all duration-500"
                          style={{ width: `${(candidate.votes / 500) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Botón de votar */}
                    <button
                      onClick={() => handleVote(candidate.id)}
                      disabled={voted.includes(candidate.id)}
                      className={`w-full py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 ${
                        voted.includes(candidate.id)
                          ? 'bg-green-500 text-white cursor-not-allowed shadow-lg'
                          : 'bg-gradient-to-r from-[#00A6B3] to-[#0D3C61] text-white hover:shadow-2xl'
                      }`}
                    >
                      {voted.includes(candidate.id) ? (
                        <>
                          <Award className="w-5 h-5" />
                          ¡Voto Registrado!
                        </>
                      ) : (
                        <>
                          <Heart className="w-5 h-5" />
                          Votar por {candidate.name.split(' ')[0]}
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Nota al pie para votantes */}
            <div className="bg-blue-50 border-l-4 border-[#00A6B3] p-6 rounded-lg">
              <p className="text-gray-700">
                <strong>💡 Nota:</strong> Puedes votar por un solo candidato por período.
                El ganador recibirá el fondo acumulado para impulsar su negocio.
                La votación cierra automáticamente al final del período.
              </p>
            </div>
          </div>
        )}

        {/* Tab: Cómo Funciona */}
        {activeTab === 'como-funciona' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0D3C61] mb-4">¿Cómo Funciona el Fondo Impulsa?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Un modelo de apoyo social que transforma tus compras en oportunidades para emprendedores
              </p>
            </div>

            {/* Timeline Visual */}
            <div className="relative">
              {/* Línea vertical en móvil, horizontal en desktop */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#00A6B3] to-[#0D3C61] hidden md:block"></div>

              <div className="space-y-12">
                {[
                  {
                    step: 1,
                    icon: DollarSign,
                    title: "Compras en Conecta Mercado",
                    description: "Por cada compra que realizas, el 1% del valor total se destina automáticamente al Fondo Impulsa. Es transparente y está incluido en tu ticket de compra.",
                    color: "bg-blue-500"
                  },
                  {
                    step: 2,
                    icon: Users,
                    title: "Emprendedores se Postulan",
                    description: "Los emprendedores emergentes pueden postular su proyecto explicando su visión, misión y cómo usarán el apoyo del fondo para crecer.",
                    color: "bg-purple-500"
                  },
                  {
                    step: 3,
                    icon: Heart,
                    title: "La Comunidad Vota",
                    description: "Tú y todos los usuarios de Conecta Mercado votan por el candidato que más les inspire. Cada comprador tiene un voto por período.",
                    color: "bg-pink-500"
                  },
                  {
                    step: 4,
                    icon: Trophy,
                    title: "Se Elige un Ganador",
                    description: "Cada 6 meses, el candidato con más votos recibe el fondo acumulado para invertir en su negocio: equipamiento, materia prima o capacitación.",
                    color: "bg-amber-500"
                  },
                  {
                    step: 5,
                    icon: TrendingUp,
                    title: "Seguimiento del Impacto",
                    description: "Hacemos seguimiento del emprendedor ganador y compartimos su historia de crecimiento con toda la comunidad.",
                    color: "bg-green-500"
                  }
                ].map((item, index) => (
                  <div key={index} className="relative">
                    <div className={`md:flex items-center gap-8 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                      {/* Contenido */}
                      <div className="md:w-1/2">
                        <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all">
                          <div className={`${item.color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                            <item.icon className="w-8 h-8 text-white" />
                          </div>
                          <div className="text-sm font-semibold text-[#00A6B3] mb-2">Paso {item.step}</div>
                          <h3 className="text-2xl font-bold text-[#0D3C61] mb-3">{item.title}</h3>
                          <p className="text-gray-700 leading-relaxed text-lg">{item.description}</p>
                        </div>
                      </div>

                      {/* Espacio */}
                      <div className="hidden md:block md:w-1/2"></div>
                    </div>

                    {/* Punto en la línea */}
                    <div className="hidden md:block absolute top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-[#00A6B3] rounded-full z-10"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sección de impacto */}
            <div className="bg-gradient-to-br from-[#0D3C61] to-[#00A6B3] rounded-2xl p-12 text-white text-center mt-16">
              <h3 className="text-3xl font-bold mb-4">Tu Compra, Su Oportunidad</h3>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Cada producto que compras en Conecta Mercado contribuye a construir el sueño de un emprendedor.
                Juntos creamos un ecosistema de apoyo mutuo.
              </p>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-4xl mb-2">$42,000</div>
                  <div className="text-sm opacity-90">Entregados Históricamente</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-4xl mb-2">3</div>
                  <div className="text-sm opacity-90">Emprendedores Impulsados</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-4xl mb-2">100%</div>
                  <div className="text-sm opacity-90">Transparencia Total</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab: Ganadores/Historias de Éxito */}
        {activeTab === 'ganadores' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0D3C61] mb-4">Historias de Éxito</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Conoce a los emprendedores que la comunidad apoyó y cómo transformaron sus negocios
              </p>
            </div>

            {/* Ganadores destacados */}
            <div className="space-y-8">
              {[
                {
                  name: "Laura Sánchez",
                  business: "Velas Aromáticas 'Luz Natural'",
                  period: "2024-H1",
                  amount: "$4,000",
                  votes: 487,
                  image: "https://placehold.co/400x300/28A745/FFF?text=Laura",
                  story: "Gracias al Fondo Impulsa pude comprar equipo profesional para fabricar velas. Ahora tengo 15 productos diferentes y mis ventas crecieron 300%. ¡Estoy contratando mi primer empleado!",
                  achievements: ["15 productos nuevos", "300% más ventas", "Primer empleado contratado"],
                  social: { instagram: "@luznatural", web: "www.luznatural.com" }
                },
                {
                  name: "Mario Ramírez",
                  business: "Cerámica Artesanal",
                  period: "2023-H2",
                  amount: "$3,500",
                  votes: 412,
                  image: "https://placehold.co/400x300/0D3C61/FFF?text=Mario",
                  story: "El apoyo me permitió adquirir un horno profesional. Ahora puedo producir piezas de mayor calidad y he participado en 3 ferias artesanales importantes.",
                  achievements: ["Horno profesional", "3 ferias artesanales", "Exportaciones a 2 países"],
                  social: { instagram: "@ceramicamario", web: "www.ceramicamario.com" }
                },
                {
                  name: "Patricia González",
                  business: "Repostería Saludable",
                  period: "2023-H1",
                  amount: "$3,800",
                  votes: 395,
                  image: "https://placehold.co/400x300/00A6B3/FFF?text=Patricia",
                  story: "Con el fondo obtuve certificaciones sanitarias y compré ingredientes premium. Hoy tengo contrato con 5 cafeterías y un local propio.",
                  achievements: ["Certificación sanitaria", "5 clientes corporativos", "Local propio"],
                  social: { instagram: "@reposana", web: "www.reposteriasana.com" }
                }
              ].map((winner, index) => (
                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                  <div className="md:flex">
                    {/* Imagen */}
                    <div className="md:w-2/5 relative">
                      <img src={winner.image} alt={winner.name} className="w-full h-full object-cover min-h-[300px]" />
                      <div className="absolute top-4 left-4 bg-amber-500 text-white px-4 py-2 rounded-full font-bold flex items-center gap-2">
                        <Trophy className="w-5 h-5" />
                        Ganador {winner.period}
                      </div>
                    </div>

                    {/* Contenido */}
                    <div className="md:w-3/5 p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-3xl font-bold text-[#0D3C61] mb-1">{winner.name}</h3>
                          <p className="text-xl text-[#00A6B3] font-semibold">{winner.business}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-green-600">{winner.amount}</div>
                          <div className="text-sm text-gray-600">{winner.votes} votos</div>
                        </div>
                      </div>

                      {/* Historia */}
                      <div className="bg-gray-50 border-l-4 border-[#00A6B3] p-4 rounded mb-6">
                        <p className="text-gray-700 italic leading-relaxed">"{winner.story}"</p>
                      </div>

                      {/* Logros */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-[#0D3C61] mb-3 flex items-center gap-2">
                          <Award className="w-5 h-5" />
                          Logros Alcanzados:
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          {winner.achievements.map((achievement, i) => (
                            <div key={i} className="bg-green-50 border border-green-200 rounded-lg px-3 py-2 text-sm text-green-800 flex items-center gap-2">
                              <span className="text-green-500">✓</span>
                              {achievement}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Redes sociales */}
                      <div className="flex gap-4 pt-4 border-t">
                        <a href={`https://${winner.social.instagram}`} className="text-[#00A6B3] hover:text-[#0D3C61] font-semibold">
                          📱 {winner.social.instagram}
                        </a>
                        <a href={`https://${winner.social.web}`} className="text-[#00A6B3] hover:text-[#0D3C61] font-semibold">
                          🌐 {winner.social.web}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA para emprendedores */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-12 text-white text-center mt-12">
              <h3 className="text-3xl font-bold mb-4">¿Eres Emprendedor?</h3>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Postúlate al siguiente período del Fondo Impulsa y cuéntanos tu historia.
                ¡La comunidad quiere conocerte!
              </p>
              <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl">
                Postular Mi Proyecto
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      <Modal
        isOpen={modal.isOpen}
        onClose={() => setModal({ ...modal, isOpen: false })}
        title={modal.title}
        message={modal.message}
        type={modal.type}
      />
    </div>
  );
}
