import { useState } from 'react';
import { Package, Users, TrendingUp, Heart, Sparkles } from 'lucide-react';
import PackageCard from '../components/PackageCard';
import { collaborationPackages } from '../data/mockData';
import Modal from '../components/Modal';

export default function Packages({ addToCart }) {
  const [modal, setModal] = useState({ isOpen: false, title: '', message: '', type: 'info' });

  const handleAddToCart = (pkg) => {
    // Agregar cada producto del paquete al carrito
    pkg.products.forEach(() => {
      addToCart({
        id: pkg.id,
        name: pkg.name,
        price: pkg.totalPrice,
        image: pkg.image,
        businessName: 'Colaboración',
        isPackage: true
      });
    });

    setModal({
      isOpen: true,
      title: '¡Paquete agregado!',
      message: `${pkg.name} ha sido agregado al carrito exitosamente.`,
      type: 'success'
    });
  };

  const featuredPackages = collaborationPackages.filter(pkg => pkg.featured);
  const regularPackages = collaborationPackages.filter(pkg => !pkg.featured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#0D3C61] via-[#00A6B3] to-[#0D3C61] text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">Colaboraciones Especiales</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <Package className="inline-block mb-2" size={48} /> Paquetes Colaborativos
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto leading-relaxed">
              Descubre sets exclusivos creados por la unión de emprendedores locales. ¡Ahorra mientras apoyas a más de un negocio!
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <Users className="w-8 h-8 mx-auto mb-2" />
                <div className="text-3xl font-bold">{collaborationPackages.length}</div>
                <div className="text-sm opacity-90">Paquetes</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <TrendingUp className="w-8 h-8 mx-auto mb-2" />
                <div className="text-3xl font-bold">10%</div>
                <div className="text-sm opacity-90">Ahorro Prom.</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <Heart className="w-8 h-8 mx-auto mb-2" />
                <div className="text-3xl font-bold">2+</div>
                <div className="text-sm opacity-90">Emprendedores</div>
              </div>
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

      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Paquetes destacados */}
        {featuredPackages.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Sparkles className="text-amber-500" size={32} />
              <h2 className="text-3xl font-bold text-gray-900">Paquetes Destacados</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {featuredPackages.map((pkg) => (
                <PackageCard key={pkg.id} package={pkg} onAddToCart={handleAddToCart} />
              ))}
            </div>
          </section>
        )}

        {/* Todos los paquetes */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Package className="text-[#00A6B3]" size={32} />
            <h2 className="text-3xl font-bold text-gray-900">Todos los Paquetes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPackages.map((pkg) => (
              <PackageCard key={pkg.id} package={pkg} onAddToCart={handleAddToCart} />
            ))}
          </div>
        </section>

        {/* Info adicional */}
        <section className="mt-16 bg-gradient-to-r from-[#0D3C61] to-[#00A6B3] text-white rounded-2xl p-8 md:p-12">
          <div className="text-center max-w-3xl mx-auto">
            <Users size={48} className="mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4">¿Eres emprendedor?</h3>
            <p className="text-lg mb-6 opacity-90">
              Crea colaboraciones con otros emprendedores y ofrece paquetes exclusivos a tus clientes.
              ¡Juntos llegamos más lejos!
            </p>
            <button className="bg-white text-[#0D3C61] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
              Crear Colaboración
            </button>
          </div>
        </section>
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
