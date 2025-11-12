import { Package, Home, Store, X } from 'lucide-react';

export default function DeliveryOptionsModal({ isOpen, onClose, productName }) {
  if (!isOpen) return null;

  const deliveryOptions = [
    {
      icon: Home,
      title: "Envío al domicilio",
      description: "Recibe tu pedido en la comodidad de tu hogar. Tiempo estimado: 2-5 días hábiles."
    },
    {
      icon: Package,
      title: "Envío a sucursal de paquetería 📦",
      description: "Recoge tu pedido en la sucursal más cercana a tu ubicación. Disponible 24/7."
    },
    {
      icon: Store,
      title: "Ruta: recoger en tienda física",
      description: "Visita la tienda del emprendedor y recoge personalmente tu pedido. ¡Sin costo de envío!"
    }
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-fadeIn"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full pointer-events-auto animate-slideUp overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0D3C61] to-[#00A6B3] text-white p-6 relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
            >
              <X size={20} />
            </button>
            <div className="flex items-center gap-3 mb-2">
              <Package size={28} />
              <h2 className="text-2xl font-bold">Opciones de Entrega</h2>
            </div>
            {productName && (
              <p className="text-white/90 text-sm">Para: {productName}</p>
            )}
          </div>

          {/* Contenido */}
          <div className="p-6 space-y-4">
            {deliveryOptions.map((option, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 bg-gradient-to-r from-gray-50 to-white rounded-xl hover:from-[#00A6B3]/10 hover:to-white transition-all border border-gray-100 hover:border-[#00A6B3] group"
              >
                {/* Icono */}
                <div className="w-12 h-12 bg-gradient-to-br from-[#0D3C61] to-[#00A6B3] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <option.icon size={24} className="text-white" />
                </div>

                {/* Texto */}
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800 mb-1 text-lg">{option.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{option.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-6 py-4 flex justify-end border-t border-gray-200">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-gradient-to-r from-[#0D3C61] to-[#00A6B3] text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Entendido
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
