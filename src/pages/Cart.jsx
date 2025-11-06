import { useState } from 'react';
import { Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Modal from '../components/Modal';

export default function Cart({ cart, updateQuantity, removeFromCart }) {
  const [modal, setModal] = useState({ isOpen: false, title: '', message: '', type: 'info', onConfirm: null });
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const commission = subtotal * 0.08;
  const fondoImpulsa = subtotal * 0.01;
  const total = subtotal + commission + fondoImpulsa;

  const handleRemove = (id, name) => {
    setModal({
      isOpen: true,
      title: '¿Eliminar producto?',
      message: `¿Estás seguro de que quieres eliminar "${name}" del carrito?`,
      type: 'confirm',
      onConfirm: () => removeFromCart(id)
    });
  };

  const handleCheckout = () => {
    setModal({
      isOpen: true,
      title: 'Proyecto Demo',
      message: 'Esta es una simulación de pago. En un proyecto real, aquí se procesaría el pago con tu método preferido.',
      type: 'info'
    });
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#0D3C61] mb-4">Tu carrito está vacío</h2>
          <p className="text-gray-600 mb-6">Agrega productos para comenzar tu compra</p>
          <Link to="/" className="inline-block bg-[#0D3C61] text-white px-6 py-3 rounded-lg hover:bg-[#0A2E4A] transition">
            Ver productos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#0D3C61] mb-8">Carrito de Compras</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map(item => (
              <div key={item.id} className="bg-white rounded-lg p-4 shadow-md flex gap-4">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />

                <div className="flex-1">
                  <h3 className="font-semibold text-[#0D3C61]">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.businessName}</p>
                  <p className="text-lg font-bold text-[#0D3C61] mt-1">${item.price.toFixed(2)}</p>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-2 border rounded">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 hover:bg-gray-100">-</button>
                    <span className="px-3">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 hover:bg-gray-100">+</button>
                  </div>
                  <button onClick={() => handleRemove(item.id, item.name)} className="text-red-500 hover:text-red-700 p-2">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-white rounded-lg p-6 shadow-md h-fit sticky top-24">
            <h2 className="text-xl font-bold text-[#0D3C61] mb-4">Resumen</h2>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between"><span>Subtotal:</span><span>${subtotal.toFixed(2)}</span></div>
              <div className="flex justify-between"><span>Comisión (8%):</span><span>${commission.toFixed(2)}</span></div>
              <div className="flex justify-between text-[#00A6B3] font-semibold"><span>Fondo Impulsa (1%):</span><span>${fondoImpulsa.toFixed(2)}</span></div>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between text-xl font-bold text-[#0D3C61] mb-6">
              <span>Total:</span><span>${total.toFixed(2)}</span>
            </div>

            <button onClick={handleCheckout} className="w-full bg-[#0D3C61] text-white py-3 rounded-lg font-semibold hover:bg-[#0A2E4A] transition">
              Proceder al Pago
            </button>

            <p className="text-xs text-gray-600 mt-4">
              Tu compra incluye un aporte del 1% al Fondo Impulsa para apoyar emprendedores emergentes.
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modal.isOpen}
        onClose={() => setModal({ ...modal, isOpen: false })}
        title={modal.title}
        message={modal.message}
        type={modal.type}
        onConfirm={modal.onConfirm}
      />
    </div>
  );
}
