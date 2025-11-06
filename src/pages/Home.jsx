import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Truck, Shield, CreditCard, TrendingUp } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import Modal from '../components/Modal';
import { mockProducts, mockCategories } from '../data/mockData';

export default function Home({ addToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [modal, setModal] = useState({ isOpen: false, title: '', message: '', type: 'info' });

  const handleAddToCart = (product) => {
    addToCart(product);
    setModal({
      isOpen: true,
      title: '¡Agregado al carrito!',
      message: `${product.name} agregado al carrito exitosamente.`,
      type: 'success'
    });
  };

  const filteredProducts = selectedCategory === 'all'
    ? mockProducts
    : mockProducts.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Premium - 100vh */}
      <section className="relative bg-gradient-to-br from-[#0D3C61] via-[#105073] to-[#00A6B3] text-white overflow-hidden h-screen flex items-center">
        {/* Patrón de fondo */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Contenido */}
            <div>
              <div className="mt-10 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-medium">Apoya a emprendedores locales</span>
              </div>

              <h1 className="text-5xl md:text-5xl font-bold mb-6 leading-tight">
                Productos únicos
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  de emprendedores
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-xl">
                Descubre artículos artesanales, ecológicos y hechos con amor. Cada compra apoya directamente a negocios locales.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20">
                  <Truck className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-medium">Envío Gratis +$500</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20">
                  <Shield className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-medium">Compra Segura</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20">
                  <Star className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-medium">Productos Únicos</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20">
                  <CreditCard className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-medium">Pago Flexible</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#productos"
                  className="inline-flex items-center justify-center bg-white text-[#0D3C61] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
                >
                  Ver Productos
                </a>
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all"
                >
                  Soy Emprendedor
                </Link>
              </div>
            </div>

            {/* Stats/Image */}
            <div className="hidden md:block">
              <div className="relative">
                <div className="grid grid-cols-2 gap-6">
                  {/* Stat Cards */}
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-all">
                    <div className="text-5xl font-bold mb-2">156+</div>
                    <div className="text-sm opacity-90">Emprendedores</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-all mt-8">
                    <div className="text-5xl font-bold mb-2">1,200+</div>
                    <div className="text-sm opacity-90">Productos</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-all -mt-4">
                    <div className="text-5xl font-bold mb-2">8%</div>
                    <div className="text-sm opacity-90">Comisión Baja</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-all mt-4">
                    <div className="text-5xl font-bold mb-2">4.8⭐</div>
                    <div className="text-sm opacity-90">Calificación</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Categories */}
        <section className="mb-12" id="productos">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D3C61] mb-3">Explora por Categoría</h2>
            <p className="text-gray-600 text-lg">Encuentra exactamente lo que buscas</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-[#0D3C61] to-[#00A6B3] text-white shadow-lg'
                  : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-[#00A6B3]'
              }`}
            >
              Todas
            </button>
            {mockCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
                  selectedCategory === cat.slug
                    ? 'bg-gradient-to-r from-[#0D3C61] to-[#00A6B3] text-white shadow-lg'
                    : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-[#00A6B3]'
                }`}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>
        </section>

        {/* Products */}
        <section>
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0D3C61]">Productos Destacados</h2>
              <p className="text-gray-600">{filteredProducts.length} productos disponibles</p>
            </div>

            {/* Sort dropdown */}
            <select className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#00A6B3] outline-none bg-white">
              <option>Más Populares</option>
              <option>Menor Precio</option>
              <option>Mayor Precio</option>
              <option>Nuevos</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </section>

        {/* Trust Badges */}
        <section className="mt-16 bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#0D3C61] mb-2">¿Por qué comprar con nosotros?</h3>
            <p className="text-gray-600">Nos preocupamos por tu experiencia</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0D3C61] to-[#00A6B3] rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-[#0D3C61] mb-2">Envío Gratis</h4>
              <p className="text-sm text-gray-600">En compras mayores a $500</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0D3C61] to-[#00A6B3] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-[#0D3C61] mb-2">Compra Segura</h4>
              <p className="text-sm text-gray-600">Protección total de tus datos</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0D3C61] to-[#00A6B3] rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-[#0D3C61] mb-2">Calidad Garantizada</h4>
              <p className="text-sm text-gray-600">Productos verificados</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0D3C61] to-[#00A6B3] rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-[#0D3C61] mb-2">Pago Flexible</h4>
              <p className="text-sm text-gray-600">Múltiples métodos de pago</p>
            </div>
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
