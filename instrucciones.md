# Instrucciones de Corrección - Conecta Mercado

## Contexto General
Este documento contiene las observaciones y correcciones necesarias para el proyecto Conecta Mercado (plataforma React de e-commerce para emprendedores locales).

**Nota importante**: Las imágenes de productos de ejemplo están en la carpeta `/imagenesProductoEjemplo/` del proyecto.

---

## 1. FONDO IMPULSA - Sección de Emprendedores

### 1.1 Actualizar Período de Votación
**Ubicación**: `src/pages/FondoImpulsa.jsx` - Cuadro naranja de votación

**Cambio requerido**:
- Actualizar el período de votación a: **"2025-H2"**
- El texto debe indicar claramente que las votaciones son para el segundo semestre de 2025

**Ejemplo de implementación**:
```jsx
// En la sección de votación, actualizar el texto del período
<div className="voting-period">
  <span>Período: 2025-H2</span>
</div>
```

---

### 1.2 Actualizar Imagen de Carlos Ruiz
**Ubicación**: `src/pages/FondoImpulsa.jsx` o `src/data/mockData.js`

**Cambio requerido**:
- El emprendedor Carlos Ruiz tiene un proyecto de **repostería sin gluten para personas celíacas**
- Su imagen actual no representa su proyecto
- Reemplazar su imagen por una que muestre productos de repostería sin gluten (pan, pasteles, galletas)
- Usar una imagen de la carpeta `/imagenesProductoEjemplo/` o actualizar la referencia a una imagen genérica de panadería sin gluten

**Actualización en mockData**:
```javascript
{
  id: X, // ID de Carlos Ruiz
  name: "Carlos Ruiz",
  business: "Repostería Sin Gluten",
  project: "Productos de repostería para personas celíacas",
  image: "/imagenesProductoEjemplo/reposteria-sin-gluten.jpg", // Nueva imagen
  description: "Repostería sin gluten para personas celíacas"
}
```

---

## 2. NUEVO EMPRENDIMIENTO - Cuadernos Reciclados (Consuelo Ávila)

### 2.1 Agregar como Ejemplo Principal
**Ubicación**: `src/data/mockData.js` y `src/pages/FondoImpulsa.jsx`

**Información del emprendimiento**:
```javascript
{
  // Información básica
  id: [NUEVO_ID],
  entrepreneur: "Consuelo Ávila",
  businessName: "Cuadernos Reciclados Personalizados",
  
  // Descripción del negocio
  description: "Negocio sustentable que se dedica a crear cuadernos nuevos a partir de hojas recicladas de cuadernos ya utilizados, seleccionando hojas limpias y en buen estado para darle una nueva presentación. Cada cuaderno puede personalizarse según los gustos de cada cliente, contribuyendo al cuidado del medio ambiente y reduciendo el desperdicio de papel.",
  
  // Necesidad que satisface
  need: "Muchas personas necesitan cuadernos para estudiar, trabajar o realizar anotaciones en su día a día. Nuestro negocio busca satisfacer esa necesidad ofreciendo cuadernos accesibles, útiles y personalizados, que además reflejan el estilo y la personalidad de cada cliente, brindando una opción económica y con un enfoque sustentable.",
  
  // Productos y precios
  products: [
    {
      name: "Cuaderno Sencillo",
      price: 30,
      description: "Cuaderno reciclado básico"
    },
    {
      name: "Cuaderno Personalizado",
      price: 50,
      description: "Cuaderno reciclado con diseño personalizado"
    }
  ],
  
  // Categoría y características
  category: "Papelería Sustentable",
  tags: ["Reciclaje", "Sustentable", "Personalizado", "Ecológico"],
  featured: true, // Marcarlo como destacado/principal
  
  // Imágenes de referencia
  images: [
    "/imagenesProductoEjemplo/cuaderno-personalizado-snoopy.jpg", // Cuaderno morado con stickers de Snoopy
    "/imagenesProductoEjemplo/cuaderno-abierto-rayado.jpg",       // Cuaderno abierto mostrando hojas rayadas
    "/imagenesProductoEjemplo/cuaderno-abierto-blanco.jpg"        // Cuaderno abierto en blanco
  ]
}
```

**Descripción visual de las imágenes de referencia** (para que sepas qué representan):
- **Imagen 1**: Cuaderno con portada morada decorada con stickers de Snoopy (personajes de la serie), hojas blancas recicladas visibles, con un sticker de "TESIS" en la esquina
- **Imagen 2**: Cuaderno abierto mostrando hojas rayadas recicladas en perfecto estado
- **Imagen 3**: Cuaderno abierto mostrando hojas blancas recicladas

**Implementación**:
- Agregar este emprendimiento en `mockData.js`
- **Posicionarlo como ejemplo principal** en la página de Fondo Impulsa (debe aparecer destacado o en primer lugar)
- Asegurarse de que tenga el badge "Destacado" o "Principal"

---

## 3. ACTUALIZAR IMAGEN - Diademas Artesanales

**Ubicación**: `src/data/mockData.js`

**Cambio requerido**:
- Buscar el producto "Diademas artesanales" en mockData
- Su imagen actual no representa bien el producto
- Cambiar por una imagen que muestre diademas artesanales reales
- Usar una imagen de la carpeta `/imagenesProductoEjemplo/` que muestre diademas con flores, tejidos o decoraciones artesanales

---

## 4. SISTEMA DE FILTROS - Botón "Todo" y Categorías

### 4.1 Crear Barra de Filtros Superior
**Ubicación**: `src/pages/Home.jsx` o crear nuevo componente `src/components/FilterBar.jsx`

**Requerimiento**:
Agregar una barra de filtros en la parte **superior izquierda** de la página principal con:

**Estructura visual**:
```
┌─────────────────────────────────────────────────────────┐
│ [Todo ▼] [Categorías] [Empresas] [Emprendedores]       │
│                                                         │
│ └─ Al hacer clic en "Todo", se despliega un menú con:  │
│    • NEGOCIOS                                           │
│      - Panadería                                        │
│      - Florerías                                        │
│      - Papelerías                                       │
│      - Alimentos                                        │
│      - Accesorios                                       │
│      - MODA                                             │
│    • Modelo comunitario Social                          │
│      (lado que mayormente)                              │
│    • Emprendedor                                        │
│      - Colaboraciones                                   │
│      - Capacitaciones                                   │
│    • Ayuda                                              │
└─────────────────────────────────────────────────────────┘
```

**Implementación**:
```jsx
// Nuevo componente: src/components/FilterBar.jsx
import { useState } from 'react';
import { ChevronDown, Store, Users, Handshake, HelpCircle } from 'lucide-react';

export default function FilterBar({ onFilterChange }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = {
    negocios: {
      label: "NEGOCIOS",
      icon: Store,
      subcategories: [
        "Panadería",
        "Florerías", 
        "Papelerías",
        "Alimentos",
        "Accesorios",
        "MODA"
      ]
    },
    comunitario: {
      label: "Modelo comunitario Social",
      icon: Users,
      subcategories: []
    },
    emprendedor: {
      label: "Emprendedor",
      icon: Handshake,
      subcategories: [
        "Colaboraciones",
        "Capacitaciones"
      ]
    },
    ayuda: {
      label: "Ayuda",
      icon: HelpCircle,
      subcategories: []
    }
  };

  return (
    <div className="relative">
      {/* Botón principal "Todo" */}
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-gray-200 rounded-lg hover:border-[#00A6B3] transition-all"
      >
        <span className="font-semibold text-gray-700">Todo</span>
        <ChevronDown size={16} className={`transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown con categorías */}
      {showDropdown && (
        <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 p-4">
          {Object.entries(categories).map(([key, category]) => (
            <div key={key} className="mb-4 last:mb-0">
              <div className="flex items-center gap-2 mb-2">
                <category.icon size={18} className="text-[#0D3C61]" />
                <h3 className="font-bold text-gray-800 uppercase text-sm">{category.label}</h3>
              </div>
              
              {category.subcategories.length > 0 && (
                <ul className="ml-6 space-y-1">
                  {category.subcategories.map((sub, idx) => (
                    <li key={idx}>
                      <button
                        onClick={() => {
                          setActiveFilter(sub);
                          onFilterChange(sub);
                          setShowDropdown(false);
                        }}
                        className="text-sm text-gray-600 hover:text-[#00A6B3] hover:translate-x-1 transition-all"
                      >
                        - {sub}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
```

**Integrar en Home.jsx**:
```jsx
import FilterBar from '../components/FilterBar';

// Dentro del componente Home
<div className="container mx-auto px-4 py-8">
  {/* Agregar FilterBar en la parte superior */}
  <div className="mb-8">
    <FilterBar onFilterChange={(filter) => {
      // Lógica para filtrar productos
      console.log('Filtro seleccionado:', filter);
    }} />
  </div>
  
  {/* Grid de productos existente */}
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {/* ProductCard components */}
  </div>
</div>
```

---

## 5. MODAL DE OPCIONES DE ENTREGA

### 5.1 Crear Modal de Información del Producto
**Ubicación**: Nuevo componente `src/components/DeliveryOptionsModal.jsx`

**Requerimiento**:
Cuando el usuario haga clic en "Opciones de entrega" (puede ser un botón en ProductCard o ProductDetail), se debe abrir un modal que muestre:

**Contenido del modal**:
```
┌─────────────────────────────────────────────┐
│  Información del producto                   │
│                                             │
│  • Envío al domicilio                       │
│  • Envío a sucursal de paquetería 📦        │
│  • Ruta: recoger en tienda física           │
│                                             │
│  [Cerrar]                                   │
└─────────────────────────────────────────────┘
```

**Implementación**:
```jsx
// src/components/DeliveryOptionsModal.jsx
import { Package, Home, Store } from 'lucide-react';
import Modal from './Modal';

export default function DeliveryOptionsModal({ isOpen, onClose, productName }) {
  const deliveryOptions = [
    {
      icon: Home,
      title: "Envío al domicilio",
      description: "Recibe tu pedido en la comodidad de tu hogar"
    },
    {
      icon: Package,
      title: "Envío a sucursal de paquetería",
      description: "Recoge en la sucursal más cercana"
    },
    {
      icon: Store,
      title: "Ruta: recoger en tienda física",
      description: "Visita la tienda y recoge personalmente"
    }
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Opciones de entrega - ${productName}`}>
      <div className="space-y-4">
        {deliveryOptions.map((option, index) => (
          <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div className="w-10 h-10 bg-gradient-to-br from-[#0D3C61] to-[#00A6B3] rounded-lg flex items-center justify-center">
              <option.icon size={20} className="text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">{option.title}</h4>
              <p className="text-sm text-gray-600">{option.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
}
```

**Agregar botón en ProductCard**:
```jsx
// En ProductCard.jsx, agregar botón de opciones de entrega
<button
  onClick={(e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowDeliveryModal(true);
  }}
  className="text-sm text-[#00A6B3] hover:text-[#0D3C61] font-medium flex items-center gap-1"
>
  <Truck size={16} />
  Ver opciones de entrega
</button>
```

---

## 6. BOTÓN "PAQUETES" / "SETS" - Colaboraciones

### 6.1 Agregar Botón de Sets en la Barra Superior
**Ubicación**: `src/pages/Home.jsx` y `src/pages/Dashboard.jsx`

**Requerimiento**:
Agregar un nuevo botón **"Paquetes"** o **"Sets"** en la misma fila que el botón "Todo", que permita ver las colaboraciones entre emprendedores presentadas como paquetes/bundles.

**Estructura visual**:
```
┌───────────────────────────────────────────────┐
│ [Todo ▼] [Paquetes/Sets] [Otros filtros...]  │
└───────────────────────────────────────────────┘
```

**Implementación**:
```jsx
// Actualizar FilterBar.jsx o crear nuevo componente
<div className="flex items-center gap-4">
  {/* Botón Todo existente */}
  <FilterBar onFilterChange={handleFilter} />
  
  {/* Nuevo botón de Paquetes/Sets */}
  <Link
    to="/paquetes"
    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0D3C61] to-[#00A6B3] text-white rounded-lg hover:shadow-lg transition-all"
  >
    <Package size={18} />
    <span className="font-semibold">Paquetes</span>
  </Link>
</div>
```

### 6.2 Crear Página de Paquetes/Sets
**Ubicación**: `src/pages/Packages.jsx` (nueva página)

**Contenido de la página**:
Mostrar colaboraciones finalizadas en forma de Sets. Cada set es una colaboración entre 2 o más emprendedores.

**Ejemplo de estructura de datos**:
```javascript
// src/data/mockData.js - Agregar arrays de paquetes
export const collaborationPackages = [
  {
    id: 1,
    name: "Paquete Taller Textil",
    description: "Colaboración entre emprendedores textiles",
    entrepreneurs: [
      { name: "Colaborador 1", business: "Textiles Artesanales" },
      { name: "Colaborador 2", business: "Bordados Tradicionales" }
    ],
    products: [
      { id: 1, name: "Producto A", price: 150 },
      { id: 2, name: "Producto B", price: 200 }
    ],
    totalPrice: 320, // Precio con descuento
    originalPrice: 350,
    discount: "10%",
    image: "/imagenesProductoEjemplo/paquete-textil.jpg",
    featured: true
  },
  {
    id: 2,
    name: "Paquete Escolar",
    description: "Lo mejor para la escuela",
    entrepreneurs: [
      { name: "Colaborador 1", business: "Papelería Creativa" },
      { name: "Colaborador 2", business: "Accesorios Escolares" }
    ],
    products: [
      { id: 5, name: "Cuaderno personalizado", price: 50 },
      { id: 6, name: "Set de lápices", price: 80 }
    ],
    totalPrice: 120,
    originalPrice: 130,
    discount: "8%",
    image: "/imagenesProductoEjemplo/paquete-escolar.jpg",
    featured: false
  }
];
```

**Diseño de PackageCard**:
```jsx
// src/components/PackageCard.jsx
export default function PackageCard({ package }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all border border-gray-100">
      {/* Imagen del paquete */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[#0D3C61] to-[#00A6B3]">
        <img 
          src={package.image} 
          alt={package.name}
          className="w-full h-full object-cover mix-blend-overlay opacity-80"
        />
        
        {/* Badge de descuento */}
        <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
          {package.discount} OFF
        </div>
      </div>
      
      {/* Contenido */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{package.name}</h3>
        <p className="text-sm text-gray-600 mb-4">{package.description}</p>
        
        {/* Emprendedores colaboradores */}
        <div className="mb-4">
          <p className="text-xs font-semibold text-gray-500 mb-2">COLABORACIÓN ENTRE:</p>
          <div className="space-y-1">
            {package.entrepreneurs.map((ent, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00A6B3] rounded-full"></div>
                <span className="text-sm text-gray-700">{ent.name} - {ent.business}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Productos incluidos */}
        <div className="mb-4">
          <p className="text-xs font-semibold text-gray-500 mb-2">INCLUYE:</p>
          <ul className="space-y-1">
            {package.products.map((prod, idx) => (
              <li key={idx} className="text-sm text-gray-600">• {prod.name}</li>
            ))}
          </ul>
        </div>
        
        {/* Precio */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <p className="text-xs text-gray-500 line-through">${package.originalPrice}</p>
            <p className="text-2xl font-bold text-[#0D3C61]">${package.totalPrice}</p>
          </div>
          <button className="px-6 py-3 bg-gradient-to-r from-[#0D3C61] to-[#00A6B3] text-white rounded-lg hover:shadow-lg transition-all">
            Ver detalles
          </button>
        </div>
      </div>
    </div>
  );
}
```

---

## 7. PANEL DE EMPRENDEDOR - Ver Colaboraciones

### 7.1 Actualizar Vista de Colaboraciones
**Ubicación**: `src/pages/Dashboard.jsx` o crear `src/pages/EntrepreneurCollaborations.jsx`

**Requerimiento**:
En el panel del emprendedor, cuando haga clic en "Ver colaboraciones", debe mostrar una vista con tarjetas de los paquetes/colaboraciones en los que participa.

**Diseño de la vista**:
```
┌────────────────────────────────────────────────────┐
│  Mis Colaboraciones                                │
│                                                    │
│  ┌──────────────┐  ┌──────────────┐              │
│  │  Paquete     │  │  Paquete     │              │
│  │  "Taller     │  │  "Escolar"   │              │
│  │   Textil"    │  │              │              │
│  │              │  │              │              │
│  │ Colaborador1 │  │ Colaborador1 │              │
│  │ Colaborador2 │  │ Colaborador2 │              │
│  │              │  │              │              │
│  │ [Unirme +]   │  │ [Unirme +]   │              │
│  └──────────────┘  └──────────────┘              │
│                                                    │
│  [+ Crear una colaboración]                       │
└────────────────────────────────────────────────────┘
```

**Implementación**:
```jsx
// src/pages/EntrepreneurCollaborations.jsx
import { Plus, Users, Package } from 'lucide-react';
import PackageCard from '../components/PackageCard';

export default function EntrepreneurCollaborations() {
  const [myCollaborations, setMyCollaborations] = useState([]);
  const [availableCollaborations, setAvailableCollaborations] = useState([]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Mis Colaboraciones</h1>
        <p className="text-gray-600">Gestiona tus paquetes colaborativos con otros emprendedores</p>
      </div>

      {/* Colaboraciones activas */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Package className="text-[#00A6B3]" />
            Paquetes en los que participo
          </h2>
          <button className="px-4 py-2 bg-gradient-to-r from-[#0D3C61] to-[#00A6B3] text-white rounded-lg flex items-center gap-2 hover:shadow-lg transition-all">
            <Plus size={18} />
            Crear Colaboración
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myCollaborations.length > 0 ? (
            myCollaborations.map(pkg => (
              <PackageCard key={pkg.id} package={pkg} isOwner={true} />
            ))
          ) : (
            <div className="col-span-full text-center py-12 bg-gray-50 rounded-2xl">
              <Users size={48} className="mx-auto text-gray-400 mb-4" />
              <p className="text-gray-600 mb-4">Aún no tienes colaboraciones activas</p>
              <button className="px-6 py-3 bg-[#00A6B3] text-white rounded-lg hover:bg-[#008A96] transition-all">
                Explorar colaboraciones disponibles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Colaboraciones disponibles */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <Users className="text-[#0D3C61]" />
          Colaboraciones disponibles para unirse
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableCollaborations.map(pkg => (
            <div key={pkg.id} className="relative">
              <PackageCard package={pkg} />
              <button className="absolute bottom-6 right-6 px-4 py-2 bg-white border-2 border-[#00A6B3] text-[#00A6B3] rounded-lg hover:bg-[#00A6B3] hover:text-white transition-all font-semibold">
                Unirme +
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
```

---

## 8. RUTAS Y NAVEGACIÓN

### 8.1 Actualizar App.jsx
Agregar las nuevas rutas necesarias:

```jsx
import Packages from './pages/Packages';
import EntrepreneurCollaborations from './pages/EntrepreneurCollaborations';

// Dentro del Router
<Routes>
  {/* Rutas existentes */}
  <Route path="/" element={<Home addToCart={addToCart} />} />
  <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
  <Route path="/business/:id" element={<BusinessDetail addToCart={addToCart} />} />
  
  {/* Nuevas rutas */}
  <Route path="/paquetes" element={<Packages addToCart={addToCart} />} />
  <Route path="/dashboard/colaboraciones" element={<EntrepreneurCollaborations />} />
</Routes>
```

---

## 9. ACTUALIZACIÓN DE mockData.js

### 9.1 Agregar Datos Completos
Actualizar el archivo `src/data/mockData.js` con:

```javascript
// 1. Agregar emprendimiento de Consuelo Ávila
// 2. Actualizar imagen de Carlos Ruiz
// 3. Actualizar imagen de Diademas Artesanales
// 4. Agregar array de collaborationPackages
// 5. Agregar categorías para el sistema de filtros

export const categories = [
  {
    id: "panaderia",
    name: "Panadería",
    icon: "🥖",
    parent: "negocios"
  },
  {
    id: "florerias",
    name: "Florerías",
    icon: "🌸",
    parent: "negocios"
  },
  // ... más categorías
];

export const collaborationPackages = [
  // Paquetes según especificación anterior
];
```

---

## 10. CHECKLIST DE IMPLEMENTACIÓN

### Prioridad Alta
- [ ] Actualizar período de votación a 2025-H2 en FondoImpulsa
- [ ] Cambiar imagen de Carlos Ruiz (repostería sin gluten)
- [ ] Agregar emprendimiento de Consuelo Ávila como destacado
- [ ] Crear componente FilterBar con botón "Todo" y dropdown de categorías
- [ ] Agregar botón "Paquetes/Sets" en barra superior

### Prioridad Media
- [ ] Cambiar imagen de Diademas Artesanales
- [ ] Crear componente DeliveryOptionsModal
- [ ] Crear página Packages.jsx para mostrar colaboraciones
- [ ] Crear componente PackageCard

### Prioridad Baja
- [ ] Crear página EntrepreneurCollaborations
- [ ] Implementar sistema completo de filtrado por categorías
- [ ] Agregar funcionalidad de crear nuevas colaboraciones

---

## 11. NOTAS TÉCNICAS

### Paleta de Colores
- **Azul Oscuro**: `#0D3C61`
- **Turquesa**: `#00A6B3`
- **Gradiente principal**: `from-[#0D3C61] to-[#00A6B3]`

### Iconos (Lucide React)
- `Package` - Para paquetes/sets
- `Users` - Para colaboraciones
- `Store` - Para tiendas
- `Truck` - Para opciones de entrega
- `ChevronDown` - Para dropdowns

### Carpeta de Imágenes
Todas las imágenes de referencia están en: `/imagenesProductoEjemplo/`

---

## 12. FLUJO DE USUARIO

### Para Clientes:
1. Entran a Home
2. Ven botón "Todo" (pueden filtrar por categoría)
3. Ven botón "Paquetes" (pueden ver colaboraciones)
4. Al hacer clic en un producto → ProductDetail
5. Pueden ver "Opciones de entrega" → Modal con información

### Para Emprendedores:
1. Acceden a Dashboard
2. Ven sección "Ver colaboraciones"
3. Pueden ver paquetes en los que participan
4. Pueden unirse a nuevas colaboraciones
5. Pueden crear nuevas colaboraciones

---

## FIN DEL DOCUMENTO

**Última actualización**: Noviembre 2025  
**Proyecto**: Conecta Mercado - Plataforma de E-commerce para Emprendedores  
**Tecnología**: React + Vite + TailwindCSS