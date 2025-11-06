import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu } from 'lucide-react';

export default function Navbar({ cartCount = 0 }) {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/assets/logo.png"
              alt="Conecta Mercado"
              className="h-12 w-auto transition-transform group-hover:scale-105"
            />
            <div className="hidden md:block">
              <div className="text-xl font-bold text-[#0D3C61] leading-tight">
                CONECTA MERCADO
              </div>
              <div className="text-xs text-[#00A6B3] font-medium">
                Apoya Local, Compra Único
              </div>
            </div>
          </Link>

          {/* Search bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Buscar productos, emprendedores..."
                className="w-full px-5 py-3 pl-12 border-2 border-gray-200 rounded-full focus:border-[#00A6B3] outline-none transition-all bg-gray-50 focus:bg-white"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Search mobile */}
            <button className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition">
              <Search size={24} className="text-gray-700" />
            </button>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-2 hover:bg-gray-100 rounded-lg transition group"
            >
              <ShoppingCart size={24} className="text-gray-700 group-hover:text-[#00A6B3] transition" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-[#00A6B3] to-[#0D3C61] text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold animate-pulse">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* User */}
            <Link
              to="/login"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0D3C61] to-[#00A6B3] text-white rounded-full hover:shadow-lg transition-all transform hover:scale-105 font-medium"
            >
              <User size={20} />
              <span className="hidden sm:inline">Ingresar</span>
            </Link>
          </div>
        </div>

        {/* Search bar - Mobile */}
        <div className="lg:hidden pb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar..."
              className="w-full px-4 py-2 pl-10 border-2 border-gray-200 rounded-full focus:border-[#00A6B3] outline-none bg-gray-50 focus:bg-white"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>
      </div>
    </nav>
  );
}
