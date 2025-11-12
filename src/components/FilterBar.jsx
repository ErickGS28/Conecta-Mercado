import { useState } from 'react';
import { ChevronDown, Store, Users, Heart, HelpCircle, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockCategories, filterCategories } from '../data/mockData';

export default function FilterBar({ onFilterChange, activeFilter }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const getCategoryName = (slug) => {
    const category = mockCategories.find(cat => cat.slug === slug);
    return category ? category.name : slug;
  };

  const handleCategoryClick = (categorySlug) => {
    onFilterChange(categorySlug);
    setShowDropdown(false);
  };

  const categoryIcons = {
    negocios: Store,
    comunitario: Users,
    emprendedor: Heart,
    ayuda: HelpCircle
  };

  return (
    <div className="flex items-center gap-4 mb-8">
      {/* Botón "Todo" con dropdown */}
      <div className="relative">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 rounded-xl hover:border-[#00A6B3] transition-all shadow-sm hover:shadow-md"
        >
          <span className="font-semibold text-gray-700">
            {activeFilter === 'all' ? 'Todo' : getCategoryName(activeFilter)}
          </span>
          <ChevronDown size={18} className={`transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`} />
        </button>

        {/* Dropdown con categorías */}
        {showDropdown && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setShowDropdown(false)}
            ></div>

            {/* Menú dropdown */}
            <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 p-6 animate-fadeIn">
              {Object.entries(filterCategories).map(([key, category]) => {
                const IconComponent = categoryIcons[key];

                return (
                  <div key={key} className="mb-6 last:mb-0">
                    {/* Título de categoría principal */}
                    <div className="flex items-center gap-2 mb-3">
                      <IconComponent size={20} className="text-[#0D3C61]" />
                      <h3 className="font-bold text-gray-800 uppercase text-sm tracking-wide">
                        {category.label}
                      </h3>
                    </div>

                    {/* Subcategorías */}
                    {category.subcategories.length > 0 && (
                      <ul className="ml-7 space-y-2">
                        {category.subcategories.map((subSlug) => {
                          const subCategory = mockCategories.find(cat => cat.slug === subSlug);
                          if (!subCategory) return null;

                          return (
                            <li key={subSlug}>
                              <button
                                onClick={() => handleCategoryClick(subSlug)}
                                className={`text-sm hover:text-[#00A6B3] hover:translate-x-1 transition-all flex items-center gap-2 ${
                                  activeFilter === subSlug ? 'text-[#00A6B3] font-semibold' : 'text-gray-600'
                                }`}
                              >
                                <span className="text-lg">{subCategory.icon}</span>
                                {subCategory.name}
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    )}

                    {/* Si no hay subcategorías, hacer clickeable la categoría principal */}
                    {category.subcategories.length === 0 && (
                      <button
                        onClick={() => {
                          // Acción para categorías sin subcategorías
                          if (key === 'comunitario') {
                            // Navegar a página de modelo comunitario (por implementar)
                            console.log('Navegar a modelo comunitario');
                          } else if (key === 'ayuda') {
                            // Abrir página de ayuda
                            console.log('Abrir ayuda');
                          }
                          setShowDropdown(false);
                        }}
                        className="text-sm text-gray-600 hover:text-[#00A6B3] transition-colors ml-7"
                      >
                        Ver más información →
                      </button>
                    )}
                  </div>
                );
              })}

              {/* Botón "Ver todo" */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <button
                  onClick={() => handleCategoryClick('all')}
                  className="w-full py-2 px-4 bg-gradient-to-r from-[#0D3C61] to-[#00A6B3] text-white rounded-lg hover:shadow-lg transition-all font-semibold"
                >
                  Ver todos los productos
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Botón "Paquetes/Sets" */}
      <Link
        to="/paquetes"
        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0D3C61] to-[#00A6B3] text-white rounded-xl hover:shadow-lg transition-all transform hover:scale-105"
      >
        <Package size={20} />
        <span className="font-semibold">Paquetes</span>
      </Link>
    </div>
  );
}
