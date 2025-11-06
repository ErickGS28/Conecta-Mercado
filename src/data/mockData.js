// Datos mock simplificados para Conecta Mercado

export const mockCategories = [
  { id: 1, name: "Papelería", icon: "📝", slug: "papeleria" },
  { id: 2, name: "Accesorios", icon: "👜", slug: "accesorios" },
  { id: 3, name: "Artesanía", icon: "🎨", slug: "artesania" },
  { id: 4, name: "Belleza", icon: "💄", slug: "belleza" },
  { id: 5, name: "Plantas", icon: "🌱", slug: "plantas" }
];

export const mockBusinesses = [
  { id: 1, name: "Papelería Verde", logo: "🌿", owner: "María González" },
  { id: 2, name: "La tienda de Coni", logo: "🎀", owner: "Constanza Ramírez" },
  { id: 3, name: "Arte y Madera", logo: "🎨", owner: "Pedro Sánchez" },
  { id: 4, name: "Eco Belleza", logo: "💚", owner: "Laura Martínez" }
];

export const mockProducts = [
  {
    id: 1,
    name: "Set de Cuadernos Ecológicos",
    description: "Pack de 3 cuadernos tamaño A5 de papel reciclado con portadas artesanales",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=800&q=80",
    category: "papeleria",
    businessId: 1,
    businessName: "Papelería Verde",
    stock: 25,
    rating: 4.7,
    reviewsCount: 18,
    isCollaboration: false
  },
  {
    id: 2,
    name: "Diademas Artesanales",
    description: "Diademas tejidas a mano con hilos de colores naturales y diseños únicos",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    category: "accesorios",
    businessId: 2,
    businessName: "La tienda de Coni",
    stock: 15,
    rating: 5.0,
    reviewsCount: 12,
    isCollaboration: false
  },
  {
    id: 3,
    name: "Set Escritorio Colaborativo",
    description: "Set completo: cuaderno + plumas + organizador decorado a mano",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    category: "papeleria",
    businessId: 1,
    businessName: "Papelería Verde",
    stock: 10,
    rating: 4.9,
    reviewsCount: 8,
    isCollaboration: true,
    collaborators: ["Papelería Verde", "La tienda de Coni"]
  },
  {
    id: 5,
    name: "Jabones Naturales Artesanales",
    description: "Set de 3 jabones hechos a mano con aceites esenciales y ingredientes orgánicos",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=800&q=80",
    category: "belleza",
    businessId: 4,
    businessName: "Eco Belleza",
    stock: 20,
    rating: 4.9,
    reviewsCount: 24,
    isCollaboration: false
  },
  {
    id: 6,
    name: "Suculentas Decorativas",
    description: "Set de 3 suculentas en macetas de cerámica pintadas a mano",
    price: 250.00,
    image: "https://images.unsplash.com/photo-1459156212016-c812468e2115?w=800&q=80",
    category: "plantas",
    businessId: 3,
    businessName: "Arte y Madera",
    stock: 12,
    rating: 4.6,
    reviewsCount: 10,
    isCollaboration: false
  },
  {
    id: 7,
    name: "Agenda Personalizada",
    description: "Agenda anual con papel reciclado y portada personalizable",
    price: 420.00,
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&q=80",
    category: "papeleria",
    businessId: 1,
    businessName: "Papelería Verde",
    stock: 18,
    rating: 4.8,
    reviewsCount: 22,
    isCollaboration: false
  },
  {
    id: 8,
    name: "Aretes de Macramé",
    description: "Aretes tejidos a mano en macramé con cuentas de madera",
    price: 180.00,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    category: "accesorios",
    businessId: 2,
    businessName: "La tienda de Coni",
    stock: 25,
    rating: 4.9,
    reviewsCount: 16,
    isCollaboration: false
  },
  {
    id: 11,
    name: "Cactus Mini Decorativos",
    description: "Set de 5 mini cactus en macetas de cerámica coloridas",
    price: 280.00,
    image: "https://images.unsplash.com/photo-1509937528035-ad76254b0356?w=800&q=80",
    category: "plantas",
    businessId: 3,
    businessName: "Arte y Madera",
    stock: 15,
    rating: 4.7,
    reviewsCount: 12,
    isCollaboration: false
  },
  {
    id: 12,
    name: "Set de Lápices Ecológicos",
    description: "12 lápices de colores hechos con madera certificada y pigmentos naturales",
    price: 185.00,
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&q=80",
    category: "papeleria",
    businessId: 1,
    businessName: "Papelería Verde",
    stock: 40,
    rating: 4.6,
    reviewsCount: 14,
    isCollaboration: false
  },
  {
    id: 13,
    name: "Bolso Tejido a Mano",
    description: "Bolso tipo tote tejido en macramé con asas de cuero sintético",
    price: 550.00,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80",
    category: "accesorios",
    businessId: 2,
    businessName: "La tienda de Coni",
    stock: 8,
    rating: 5.0,
    reviewsCount: 20,
    isCollaboration: false
  },
  {
    id: 14,
    name: "Terrario de Cristal",
    description: "Terrario de vidrio con suculentas y piedras decorativas",
    price: 380.00,
    image: "https://images.unsplash.com/photo-1466781783364-36c955e42a7f?w=800&q=80",
    category: "plantas",
    businessId: 3,
    businessName: "Arte y Madera",
    stock: 10,
    rating: 4.9,
    reviewsCount: 17,
    isCollaboration: false
  },
  {
    id: 15,
    name: "Exfoliante Corporal Natural",
    description: "Exfoliante de café y aceite de coco 100% natural",
    price: 240.00,
    image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=800&q=80",
    category: "belleza",
    businessId: 4,
    businessName: "Eco Belleza",
    stock: 22,
    rating: 4.8,
    reviewsCount: 19,
    isCollaboration: false
  },
  {
    id: 16,
    name: "Posavasos de Madera",
    description: "Set de 4 posavasos tallados a mano con diseños únicos",
    price: 160.00,
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=800&q=80",
    category: "artesania",
    businessId: 3,
    businessName: "Arte y Madera",
    stock: 20,
    rating: 4.7,
    reviewsCount: 11,
    isCollaboration: false
  }
];

export const mockUsers = [
  {
    id: 1,
    email: "emprendedor@test.com",
    password: "123456",
    role: "entrepreneur",
    name: "María González",
    businessId: 1,
    phone: "555-0001",
    registeredAt: "2024-01-15"
  },
  {
    id: 2,
    email: "cliente@test.com",
    password: "123456",
    role: "customer",
    name: "Juan Pérez",
    phone: "555-0002",
    registeredAt: "2024-03-20"
  }
];

export const mockFondoImpulsa = [
  {
    id: 1,
    name: "Ana Martínez",
    project: "Joyería Artesanal",
    description: "Creación de joyería única usando técnicas tradicionales y materiales reciclados",
    votes: 234,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
  },
  {
    id: 2,
    name: "Carlos Ruiz",
    project: "Repostería Casera",
    description: "Productos de repostería sin gluten para personas celíacas",
    votes: 189,
    image: "https://images.unsplash.com/photo-1556910633-5099dc3971e8?w=800&q=80"
  }
];
