import { ShoppingCart, Star, Heart } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product, onAddToCart }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#00A6B3] relative">
      {/* Wishlist button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsLiked(!isLiked);
        }}
        className="absolute top-3 right-3 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all shadow-md"
      >
        <Heart
          size={18}
          className={`transition-all ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
        />
      </button>

      {/* Image */}
      <Link to={`/product/${product.id}`}>
        <div className="relative h-64 overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isCollaboration && (
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              🤝 Colaboración
            </span>
          )}
          {product.rating >= 4.8 && (
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              ⭐ Top Rated
            </span>
          )}
        </div>

        {/* Quick add overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onAddToCart(product);
              }}
              className="w-full bg-white text-[#0D3C61] px-4 py-3 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
            >
              <ShoppingCart size={18} />
              Agregar al Carrito
            </button>
          </div>
        </div>
      </div>
      </Link>

      {/* Content */}
      <Link to={`/product/${product.id}`}>
        <div className="p-5">
          {/* Business name */}
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 bg-gradient-to-br from-[#0D3C61] to-[#00A6B3] rounded-full flex items-center justify-center text-white text-xs font-bold">
              {product.businessName.charAt(0)}
            </div>
            <span className="text-xs text-gray-600 font-medium">{product.businessName}</span>
          </div>

          {/* Product name */}
          <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-2 leading-tight group-hover:text-[#0D3C61] transition-colors">
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-600 mb-3 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-1">
              <Star size={14} className="fill-amber-400 text-amber-400" />
              <span className="text-sm font-semibold text-gray-900">{product.rating}</span>
            </div>
            <span className="text-xs text-gray-500">({product.reviewsCount || 0} reviews)</span>
          </div>

          {/* Price and action */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div>
              <div className="text-2xl font-bold text-[#0D3C61]">
                ${product.price.toFixed(2)}
              </div>
              {product.stock < 5 && product.stock > 0 && (
                <span className="text-xs text-orange-600 font-medium">
                  Solo {product.stock} disponibles
                </span>
              )}
            </div>

            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onAddToCart(product);
              }}
              className="lg:hidden bg-gradient-to-r from-[#0D3C61] to-[#00A6B3] text-white p-3 rounded-full hover:shadow-lg transition-all transform hover:scale-110"
            >
              <ShoppingCart size={18} />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
