import { ShoppingCart, Users, Package, Tag } from 'lucide-react';

export default function PackageCard({ package: pkg, onAddToCart }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#00A6B3]">
      {/* Imagen del paquete */}
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D3C61]/80 to-[#00A6B3]/80 z-10"></div>
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Badge de descuento */}
        <div className="absolute top-4 right-4 z-20 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
          {pkg.discount} OFF
        </div>

        {/* Badge featured */}
        {pkg.featured && (
          <div className="absolute top-4 left-4 z-20 bg-amber-400 text-amber-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
            ⭐ Destacado
          </div>
        )}

        {/* Título sobre la imagen */}
        <div className="absolute bottom-4 left-4 right-4 z-20">
          <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-lg">{pkg.name}</h3>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-6">
        {/* Descripción */}
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">{pkg.description}</p>

        {/* Emprendedores colaboradores */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Users size={16} className="text-[#00A6B3]" />
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Colaboración entre:</p>
          </div>
          <div className="space-y-1">
            {pkg.entrepreneurs.map((ent, idx) => (
              <div key={idx} className="flex items-center gap-2 ml-6">
                <div className="w-2 h-2 bg-[#00A6B3] rounded-full"></div>
                <span className="text-sm text-gray-700">
                  {ent.name} <span className="text-gray-500">({ent.business})</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Productos incluidos */}
        <div className="mb-4 bg-gray-50 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Package size={16} className="text-[#0D3C61]" />
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Incluye:</p>
          </div>
          <ul className="space-y-1">
            {pkg.products.map((prod, idx) => (
              <li key={idx} className="text-sm text-gray-700 flex items-center gap-2 ml-6">
                <span className="text-[#00A6B3]">•</span>
                <span className="flex-1">{prod.name}</span>
                <span className="text-gray-500 font-medium">${prod.price}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Precio y ahorro */}
        <div className="pt-4 border-t border-gray-200">
          <div className="flex items-end justify-between mb-4">
            <div>
              <p className="text-xs text-gray-500 mb-1">Precio regular</p>
              <p className="text-lg text-gray-400 line-through font-semibold">${pkg.originalPrice}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500 mb-1">Precio de paquete</p>
              <p className="text-3xl font-bold text-[#0D3C61]">${pkg.totalPrice}</p>
            </div>
          </div>

          {/* Ahorro destacado */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4 flex items-center justify-center gap-2">
            <Tag size={18} className="text-green-600" />
            <span className="text-green-700 font-bold">
              ¡Ahorras ${pkg.savings}!
            </span>
          </div>

          {/* Botón de agregar al carrito */}
          <button
            onClick={() => onAddToCart && onAddToCart(pkg)}
            className="w-full bg-gradient-to-r from-[#0D3C61] to-[#00A6B3] text-white py-3 rounded-xl font-bold text-lg hover:shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <ShoppingCart size={20} />
            Agregar Paquete
          </button>

          {/* Stock */}
          {pkg.stock < 10 && (
            <p className="text-center text-sm text-orange-600 font-medium mt-2">
              ¡Solo {pkg.stock} paquetes disponibles!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
