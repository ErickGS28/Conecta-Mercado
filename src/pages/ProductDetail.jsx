import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Heart, Star, Truck, Shield, ArrowLeft, Store } from 'lucide-react';
import { mockProducts } from '../data/mockData';
import ProductCard from '../components/ProductCard';
import Modal from '../components/Modal';

export default function ProductDetail({ addToCart }) {
  const { id } = useParams();
  const product = mockProducts.find(p => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [modal, setModal] = useState({ isOpen: false, title: '', message: '', type: 'info' });

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#0D3C61] mb-4">Producto no encontrado</h2>
          <Link to="/" className="text-[#00A6B3] hover:underline">Volver al inicio</Link>
        </div>
      </div>
    );
  }

  // Productos relacionados de la misma categoría
  const relatedProducts = mockProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setModal({
      isOpen: true,
      title: '¡Agregado al carrito!',
      message: `${quantity} ${product.name} agregado(s) al carrito exitosamente.`,
      type: 'success'
    });
  };

  // Imágenes simuladas (en un caso real vendrían del producto)
  const images = [product.image, product.image, product.image];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-[#00A6B3]">Inicio</Link>
            <span className="text-gray-400">/</span>
            <Link to="/" className="text-gray-600 hover:text-[#00A6B3]">Productos</Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#0D3C61] font-medium">{product.name}</span>
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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Galería de imágenes */}
          <div>
            {/* Imagen principal */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-4 relative group">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-[500px] object-cover"
              />

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.isCollaboration && (
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                    🤝 Colaboración
                  </span>
                )}
                {product.rating >= 4.8 && (
                  <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                    ⭐ Top Rated
                  </span>
                )}
              </div>

              {/* Wishlist */}
              <button
                onClick={() => setIsLiked(!isLiked)}
                className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all"
              >
                <Heart
                  size={24}
                  className={`transition-all ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
                />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-4">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? 'border-[#00A6B3] shadow-lg'
                      : 'border-gray-200 hover:border-[#00A6B3]'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-24 object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Información del producto */}
          <div>
            {/* Vendedor */}
            <Link
              to={`/business/${product.businessId}`}
              className="inline-flex items-center gap-3 mb-4 p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition group"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-[#0D3C61] to-[#00A6B3] rounded-full flex items-center justify-center text-white font-bold">
                {product.businessName.charAt(0)}
              </div>
              <div>
                <div className="text-xs text-gray-600">Vendido por</div>
                <div className="font-semibold text-[#0D3C61] group-hover:text-[#00A6B3] flex items-center gap-1">
                  {product.businessName}
                  <Store size={14} />
                </div>
              </div>
            </Link>

            {/* Nombre */}
            <h1 className="text-4xl font-bold text-[#0D3C61] mb-4 leading-tight">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}
                  />
                ))}
                <span className="font-semibold text-lg">{product.rating}</span>
              </div>
              <span className="text-gray-600">({product.reviewsCount} valoraciones)</span>
            </div>

            {/* Precio */}
            <div className="mb-8">
              <div className="text-5xl font-bold text-[#0D3C61] mb-2">
                ${product.price.toFixed(2)}
              </div>
              {product.stock < 10 && (
                <div className="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                  ⚠️ Solo quedan {product.stock} unidades
                </div>
              )}
            </div>

            {/* Descripción */}
            <div className="mb-8">
              <h3 className="font-bold text-[#0D3C61] mb-3">Descripción</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {product.description}
              </p>
              {product.isCollaboration && (
                <div className="mt-4 p-4 bg-purple-50 border border-purple-200 rounded-lg">
                  <div className="font-semibold text-purple-900 mb-1">🤝 Producto Colaborativo</div>
                  <p className="text-sm text-purple-700">
                    Este producto es resultado de la colaboración entre {product.collaborators?.join(' y ')}.
                  </p>
                </div>
              )}
            </div>

            {/* Cantidad */}
            <div className="mb-6">
              <label className="block font-semibold text-[#0D3C61] mb-3">Cantidad</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border-2 border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-3 hover:bg-gray-100 font-bold text-xl"
                  >
                    -
                  </button>
                  <span className="px-6 py-3 font-bold text-xl">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="px-4 py-3 hover:bg-gray-100 font-bold text-xl"
                  >
                    +
                  </button>
                </div>
                <span className="text-gray-600">Disponibles: {product.stock}</span>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-gradient-to-r from-[#0D3C61] to-[#00A6B3] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <ShoppingCart size={24} />
                Agregar al Carrito
              </button>
              <button className="px-8 py-4 border-2 border-[#0D3C61] text-[#0D3C61] rounded-full font-semibold hover:bg-[#0D3C61] hover:text-white transition-all">
                Comprar Ahora
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 p-6 bg-gray-100 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#00A6B3] rounded-full flex items-center justify-center">
                  <Truck className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-sm">Envío Gratis</div>
                  <div className="text-xs text-gray-600">En compras +$500</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#00A6B3] rounded-full flex items-center justify-center">
                  <Shield className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-sm">Compra Segura</div>
                  <div className="text-xs text-gray-600">Garantía 100%</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Productos relacionados */}
        {relatedProducts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-[#0D3C61] mb-8">Productos Relacionados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} onAddToCart={addToCart} />
              ))}
            </div>
          </section>
        )}
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
