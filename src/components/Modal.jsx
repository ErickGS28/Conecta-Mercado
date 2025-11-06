import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { useEffect } from 'react';

export default function Modal({ isOpen, onClose, title, message, type = 'info', onConfirm, confirmText = 'Aceptar', cancelText = 'Cancelar' }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const icons = {
    success: <CheckCircle className="text-green-500" size={48} />,
    error: <AlertCircle className="text-red-500" size={48} />,
    warning: <AlertCircle className="text-orange-500" size={48} />,
    info: <Info className="text-[#00A6B3]" size={48} />,
    confirm: <AlertCircle className="text-[#0D3C61]" size={48} />
  };

  const isConfirmModal = type === 'confirm';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full animate-slideUp">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
        >
          <X size={20} className="text-gray-600" />
        </button>

        {/* Content */}
        <div className="p-8 text-center">
          {/* Icon */}
          <div className="mb-4 flex justify-center">
            {icons[type]}
          </div>

          {/* Title */}
          {title && (
            <h3 className="text-2xl font-bold text-[#0D3C61] mb-3">
              {title}
            </h3>
          )}

          {/* Message */}
          <p className="text-gray-700 leading-relaxed mb-6">
            {message}
          </p>

          {/* Actions */}
          <div className={`flex gap-3 ${isConfirmModal ? 'justify-center' : 'justify-center'}`}>
            {isConfirmModal && (
              <>
                <button
                  onClick={onClose}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-50 transition"
                >
                  {cancelText}
                </button>
                <button
                  onClick={() => {
                    onConfirm?.();
                    onClose();
                  }}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-[#0D3C61] to-[#00A6B3] text-white rounded-full font-bold hover:shadow-lg transition"
                >
                  {confirmText}
                </button>
              </>
            )}
            {!isConfirmModal && (
              <button
                onClick={onClose}
                className="px-8 py-3 bg-gradient-to-r from-[#0D3C61] to-[#00A6B3] text-white rounded-full font-bold hover:shadow-lg transition min-w-[120px]"
              >
                {confirmText}
              </button>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
