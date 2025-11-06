import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Store, MapPin, Phone, Mail, Star, ArrowLeft, TrendingUp, Package, Users } from 'lucide-react';
import { mockProducts, mockBusinesses } from '../data/mockData';
import ProductCard from '../components/ProductCard';

export default function BusinessDetail({ addToCart }) {
  const { id } = useParams();
  const business = mockBusinesses.find(b => b.id === parseInt(id));

  if (!business) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#0D3C61] mb-4">Negocio no encontrado</h2>
          <Link to="/" className="text-[#00A6B3] hover:underline">Volver al inicio</Link>
        </div>
      </div>
    );
  }

  // Productos de este negocio
  const businessProducts = mockProducts.filter(p => p.businessId === business.id);

  // Calcular estadísticas
  const totalProducts = businessProducts.length;
  const avgRating = businessProducts.reduce((acc, p) => acc + p.rating, 0) / totalProducts || 0;
  const totalReviews = businessProducts.reduce((acc, p) => acc + p.reviewsCount, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-[#00A6B3]">Inicio</Link>
            <span className="text-gray-400">/</span>
            <Link to="/" className="text-gray-600 hover:text-[#00A6B3]">Emprendedores</Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#0D3C61] font-medium">{business.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#00A6B3] mb-6 transition"
        >
          <ArrowLeft size={20} />
          <span>Volver a productos</span>
        </Link>

        {/* Business Header */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          {/* Cover */}
          <div className="h-48 bg-gradient-to-r from-[#0D3C61] via-[#105073] to-[#00A6B3] relative">
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
              backgroundSize: '60px 60px'
            }}></div>
          </div>

          {/* Business Info */}
          <div className="px-8 pb-8">
            {/* Logo */}
            <div className="relative -mt-16 mb-6">
              <div className="w-32 h-32 bg-gradient-to-br from-[#0D3C61] to-[#00A6B3] rounded-2xl flex items-center justify-center text-white text-5xl font-bold shadow-2xl border-4 border-white">
                {business.logo}
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left: Info */}
              <div className="lg:col-span-2">
                <h1 className="text-4xl font-bold text-[#0D3C61] mb-3">
                  {business.name}
                </h1>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Star className="fill-amber-400 text-amber-400" size={20} />
                    <span className="font-semibold text-lg">{avgRating.toFixed(1)}</span>
                  </div>
                  <span className="text-gray-600">({totalReviews} valoraciones)</span>
                </div>

                <div className="flex items-center gap-2 text-gray-700 mb-6">
                  <Users size={20} className="text-[#00A6B3]" />
                  <span>Propietario: <strong>{business.owner}</strong></span>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  {business.name} es un emprendimiento local dedicado a ofrecer productos únicos y de alta calidad.
                  Nos especializamos en crear experiencias memorables para nuestros clientes a través de productos
                  cuidadosamente seleccionados y elaborados con pasión.
                </p>

                {/* Contact Info */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <MapPin className="text-[#00A6B3] flex-shrink-0" size={20} />
                    <div>
                      <div className="text-xs text-gray-600">Ubicación</div>
                      <div className="font-semibold">Ciudad de México, MX</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <Phone className="text-[#00A6B3] flex-shrink-0" size={20} />
                    <div>
                      <div className="text-xs text-gray-600">Teléfono</div>
                      <div className="font-semibold">555-{1000 + business.id}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg sm:col-span-2">
                    <Mail className="text-[#00A6B3] flex-shrink-0" size={20} />
                    <div>
                      <div className="text-xs text-gray-600">Correo</div>
                      <div className="font-semibold">contacto@{business.name.toLowerCase().replace(/\s+/g, '')}.com</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Stats */}
              <div>
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-[#0D3C61] mb-4 flex items-center gap-2">
                    <TrendingUp size={20} />
                    Estadísticas
                  </h3>

                  <div className="space-y-4">
                    <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#0D3C61] to-[#00A6B3] rounded-lg flex items-center justify-center">
                          <Package className="text-white" size={20} />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-[#0D3C61]">{totalProducts}</div>
                          <div className="text-xs text-gray-600">Productos</div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
                          <Star className="text-white" size={20} />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-[#0D3C61]">{avgRating.toFixed(1)}</div>
                          <div className="text-xs text-gray-600">Calificación</div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                          <Users className="text-white" size={20} />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-[#0D3C61]">{totalReviews}</div>
                          <div className="text-xs text-gray-600">Opiniones</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button className="w-full mt-6 bg-gradient-to-r from-[#0D3C61] to-[#00A6B3] text-white px-6 py-3 rounded-full font-bold hover:shadow-lg transition-all transform hover:scale-105">
                    Contactar Negocio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-[#0D3C61] mb-2">Productos de {business.name}</h2>
              <p className="text-gray-600">{totalProducts} productos disponibles</p>
            </div>
          </div>

          {businessProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {businessProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl">
              <Package className="mx-auto text-gray-400 mb-4" size={48} />
              <p className="text-gray-600">Este negocio aún no tiene productos publicados</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
