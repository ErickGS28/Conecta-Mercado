import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockUsers } from '../data/mockData';
import Modal from '../components/Modal';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modal, setModal] = useState({ isOpen: false, title: '', message: '', type: 'info' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = mockUsers.find(u => u.email === email && u.password === password);

    if (user) {
      onLogin(user);
      navigate(user.role === 'entrepreneur' ? '/dashboard' : '/');
    } else {
      setModal({
        isOpen: true,
        title: 'Credenciales incorrectas',
        message: 'Por favor verifica tus credenciales. Puedes usar las credenciales de prueba que aparecen abajo.',
        type: 'error'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#0D3C61] mb-2">🛒 CONECTA MERCADO</h1>
          <h2 className="text-xl text-gray-700">Iniciar Sesión</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold text-[#0D3C61] mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00A6B3] outline-none"
              required
            />
          </div>

          <div>
            <label className="block font-semibold text-[#0D3C61] mb-2">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00A6B3] outline-none"
              required
            />
          </div>

          <button type="submit" className="w-full bg-[#0D3C61] text-white py-3 rounded-lg font-semibold hover:bg-[#0A2E4A] transition">
            Entrar
          </button>
        </form>

        <div className="mt-6 p-4 bg-gray-100 rounded-lg text-sm">
          <p className="font-semibold mb-2">Credenciales de prueba:</p>
          <p>Emprendedor: emprendedor@test.com / 123456</p>
          <p>Cliente: cliente@test.com / 123456</p>
        </div>
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
