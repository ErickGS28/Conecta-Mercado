# CONECTA MERCADO - Planificación Frontend

## 📋 Resumen Ejecutivo

**Nombre del Proyecto:** Conecta Mercado  
**Tipo:** E-commerce para pequeños negocios y emprendedores  
**Tecnología:** React.js (simulado, sin backend)  
**Objetivo:** Prototipo funcional con navegación completa y datos simulados

---

## 🎯 Concepto Principal

Plataforma e-commerce que conecta emprendedores y permite colaboraciones entre negocios, con dos áreas principales:

1. **Área Pública (Marketplace):** Donde los usuarios navegan y compran productos
2. **Área de Emprendedor:** Panel de control para gestionar productos, ventas y colaboraciones

### Características Diferenciadoras

- **Comisión baja:** Solo 8% vs 14-20% de competidores
- **Fondo Impulsa (Plus Social):** 1% de ventas destinadas a apoyar emprendedores emergentes
- **Colaboraciones:** Productos pueden ser gestionados por múltiples negocios
- **Enfoque social:** Votación cada 6 meses para elegir emprendedor a apoyar

---

## 🏗️ Arquitectura del Proyecto

```
conecta-mercado/
├── public/
├── src/
│   ├── components/
│   │   ├── common/           # Componentes reutilizables
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   └── CategoryCard.jsx
│   │   │
│   │   ├── marketplace/      # Componentes del marketplace
│   │   │   ├── ProductGrid.jsx
│   │   │   ├── ProductFilter.jsx
│   │   │   ├── ShoppingCart.jsx
│   │   │   └── ProductDetail.jsx
│   │   │
│   │   └── dashboard/        # Componentes del panel emprendedor
│   │       ├── DashboardNav.jsx
│   │       ├── ProductManager.jsx
│   │       ├── SalesChart.jsx
│   │       ├── CollaborationPanel.jsx
│   │       └── FondoImpulsa.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Categories.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Cart.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Dashboard.jsx
│   │   ├── MyProducts.jsx
│   │   ├── Collaborations.jsx
│   │   ├── FondoImpulsa.jsx
│   │   └── Profile.jsx
│   │
│   ├── data/
│   │   ├── mockProducts.js
│   │   ├── mockUsers.js
│   │   ├── mockCategories.js
│   │   └── mockCollaborations.js
│   │
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   ├── CartContext.jsx
│   │   └── ProductContext.jsx
│   │
│   ├── hooks/
│   │   ├── useAuth.js
│   │   ├── useCart.js
│   │   └── useProducts.js
│   │
│   ├── utils/
│   │   ├── formatters.js
│   │   └── validators.js
│   │
│   ├── styles/
│   │   └── global.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── README.md
```

---

## 🎨 Diseño de Interfaces (Basado en Bocetos)

### 1. PÁGINA PRINCIPAL (Home)

**Estructura:**
```
┌─────────────────────────────────────────┐
│  [Logo] CONECTA MERCADO  [🔍]  [🛒] [👤] │
├─────────────────────────────────────────┤
│                                         │
│  "Conecta con emprendedores locales"   │
│                                         │
│  ┌────────────────────────────────────┐│
│  │   [Categorías] [Novedades] [Más]   ││
│  └────────────────────────────────────┘│
│                                         │
│  NEGOCIOS ▼                             │
│  ┌──────────┐  ┌──────────┐           │
│  │  [Logo]  │  │  [Logo]  │  [Filtros]│
│  │ Papelería│  │La tienda │           │
│  │  Verde   │  │ de Coni  │           │
│  └──────────┘  └──────────┘           │
│                                         │
│  PRODUCTOS DESTACADOS                   │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐          │
│  │Prod│ │Prod│ │Prod│ │Prod│          │
│  │$100│ │$200│ │$150│ │$300│          │
│  └────┘ └────┘ └────┘ └────┘          │
│                                         │
│  [Fondo Impulsa Info]                   │
└─────────────────────────────────────────┘
```

**Componentes:**
- Navbar con logo, búsqueda, carrito, login/registro
- Tabs de categorías (Todas, Categorías, Novedades, Promociones)
- Dropdown de "Negocios" con filtros
- Grid de productos destacados
- Sección informativa del Fondo Impulsa

### 2. PRODUCTOS POR CATEGORÍA

**Estructura:**
```
┌─────────────────────────────────────────┐
│  [Logo] CONECTA MERCADO  [🔍]  [🛒] [👤] │
├─────────────────────────────────────────┤
│                                         │
│  CATEGORÍAS                             │
│  ┌────────────────────────────────────┐│
│  │ → Papelería (con íconos)           ││
│  │ → Accesorios                       ││
│  │ → Artesanía                        ││
│  │ → Belleza/cuidado                  ││
│  │ → Plantas                          ││
│  └────────────────────────────────────┘│
│                                         │
│  PRODUCTOS  [Ordenar ▼] [Filtro ≡]     │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐          │
│  │Img │ │Img │ │Img │ │Img │          │
│  │Nom │ │Nom │ │Nom │ │Nom │          │
│  │$XX │ │$XX │ │$XX │ │$XX │          │
│  │[+🛒]│ │[+🛒]│ │[+🛒]│ │[+🛒]│          │
│  └────┘ └────┘ └────┘ └────┘          │
└─────────────────────────────────────────┘
```

**Funcionalidades:**
- Listado lateral de categorías con navegación
- Grid de productos con imagen, nombre, precio y botón agregar
- Filtros por precio, disponibilidad, colaboración
- Ordenamiento (menor/mayor precio, más vendidos, nuevos)

### 3. DETALLE DE PRODUCTO

**Estructura:**
```
┌─────────────────────────────────────────┐
│  [Logo] CONECTA MERCADO  [🔍]  [🛒] [👤] │
├─────────────────────────────────────────┤
│  ┌──────────────┐  ┌─────────────────┐ │
│  │              │  │ Producto X      │ │
│  │   IMAGEN     │  │                 │ │
│  │   GRANDE     │  │ $XXX.XX         │ │
│  │              │  │                 │ │
│  │              │  │ Descripción...  │ │
│  └──────────────┘  │                 │ │
│  [img][img][img]   │ Vendido por:    │ │
│                    │ [Negocio]       │ │
│                    │                 │ │
│                    │ Cantidad: [- 1 +]│ │
│                    │                 │ │
│                    │ [AGREGAR AL 🛒] │ │
│                    └─────────────────┘ │
│                                         │
│  PRODUCTOS RELACIONADOS                 │
│  ┌────┐ ┌────┐ ┌────┐                  │
└─────────────────────────────────────────┘
```

**Funcionalidades:**
- Galería de imágenes (principal + thumbnails)
- Información del producto (nombre, precio, descripción)
- Información del vendedor (nombre del negocio, logo)
- Selector de cantidad
- Botón agregar al carrito
- Productos relacionados/recomendados

### 4. CARRITO DE COMPRAS

**Estructura:**
```
┌─────────────────────────────────────────┐
│  [Logo] CONECTA MERCADO  [🔍]  [🛒] [👤] │
├─────────────────────────────────────────┤
│  CARRITO DE COMPRAS                     │
│                                         │
│  ┌────────────────────────────────────┐│
│  │ [img] Producto 1    $XXX  [- 1 +] X││
│  │ Vendedor: Negocio A                ││
│  ├────────────────────────────────────┤│
│  │ [img] Producto 2    $XXX  [- 1 +] X││
│  │ Vendedor: Negocio B                ││
│  └────────────────────────────────────┘│
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ RESUMEN                         │   │
│  │ Subtotal:           $XXX.XX     │   │
│  │ Comisión (8%):      $XX.XX      │   │
│  │ Fondo Impulsa (1%): $X.XX       │   │
│  │ ────────────────────────────    │   │
│  │ Total:              $XXX.XX     │   │
│  │                                 │   │
│  │ [PROCEDER AL PAGO]              │   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

**Funcionalidades:**
- Lista de productos en carrito
- Modificar cantidades
- Eliminar productos
- Resumen con desglose de costos
- Mostrar transparentemente la comisión y el aporte al Fondo Impulsa

### 5. LOGIN / REGISTRO

**Login:**
```
┌─────────────────────────────────────┐
│  [Logo] CONECTA MERCADO             │
├─────────────────────────────────────┤
│                                     │
│     INICIAR SESIÓN                  │
│                                     │
│     Email: [____________]           │
│     Contraseña: [____________]      │
│                                     │
│     [ENTRAR]                        │
│                                     │
│     ¿No tienes cuenta? Regístrate   │
│                                     │
└─────────────────────────────────────┘
```

**Registro:**
```
┌─────────────────────────────────────┐
│  [Logo] CONECTA MERCADO             │
├─────────────────────────────────────┤
│                                     │
│     REGISTRO                        │
│                                     │
│     Tipo: [●Cliente ○Emprendedor]   │
│                                     │
│     Nombre: [____________]          │
│     Email: [____________]           │
│     Contraseña: [____________]      │
│                                     │
│     [Si es emprendedor:]            │
│     Nombre del negocio: [____]      │
│     Descripción: [________]         │
│                                     │
│     [REGISTRARSE]                   │
│                                     │
└─────────────────────────────────────┘
```

### 6. DASHBOARD EMPRENDEDOR

**Estructura:**
```
┌─────────────────────────────────────────────┐
│  [Logo] PANEL EMPRENDEDOR        [👤] [⚙️]  │
├──────────┬──────────────────────────────────┤
│Dashboard │  RESUMEN                          │
│Productos │  ┌────┐ ┌────┐ ┌────┐           │
│Ventas    │  │$XXX│ │ XX │ │ XX │           │
│Colaborar │  │Tot │ │Prod│ │Vtas│           │
│Fondo     │  └────┘ └────┘ └────┘           │
│Impulsa   │                                   │
│Perfil    │  VENTAS RECIENTES                │
│          │  ┌──────────────────────────┐    │
│          │  │ Producto | Cant | Fecha  │    │
│          │  │ Prod A   | 2    | 01/11  │    │
│          │  │ Prod B   | 1    | 31/10  │    │
│          │  └──────────────────────────┘    │
│          │                                   │
│          │  [Gráfico de ventas últimos      │
│          │   6 meses]                       │
└──────────┴──────────────────────────────────┘
```

**Funcionalidades:**
- Navegación lateral con secciones
- Dashboard con métricas clave
- Vista rápida de ventas recientes
- Gráficos de rendimiento

### 7. MIS PRODUCTOS (Emprendedor)

**Estructura:**
```
┌─────────────────────────────────────────────┐
│  [Logo] PANEL EMPRENDEDOR        [👤] [⚙️]  │
├──────────┬──────────────────────────────────┤
│Dashboard │  MIS PRODUCTOS    [+ NUEVO]      │
│Productos │                                   │
│Ventas    │  [Buscar...] [Categoría ▼]      │
│Colaborar │                                   │
│Fondo     │  ┌────────────────────────────┐  │
│Impulsa   │  │[img] Producto 1            │  │
│Perfil    │  │ $XXX | Stock: 10           │  │
│          │  │ [Editar] [Eliminar]        │  │
│          │  ├────────────────────────────┤  │
│          │  │[img] Producto 2            │  │
│          │  │ $XXX | Stock: 5            │  │
│          │  │ [Editar] [Eliminar]        │  │
│          │  └────────────────────────────┘  │
│          │                                   │
│          │  [Paginación: 1 2 3 ... ]        │
└──────────┴──────────────────────────────────┘
```

**Modal Agregar/Editar Producto:**
```
┌──────────────────────────────────┐
│  AGREGAR PRODUCTO           [X]  │
├──────────────────────────────────┤
│  Nombre: [________________]      │
│  Descripción: [____________]     │
│  Precio: [____]                  │
│  Stock: [____]                   │
│  Categoría: [Seleccionar ▼]     │
│  Imágenes: [Cargar archivos]    │
│                                  │
│  ¿Es colaboración?               │
│  [○ No  ○ Sí]                    │
│                                  │
│  [CANCELAR]  [GUARDAR]           │
└──────────────────────────────────┘
```

### 8. COLABORACIONES (Emprendedor)

**Estructura:**
```
┌─────────────────────────────────────────────┐
│  [Logo] PANEL EMPRENDEDOR        [👤] [⚙️]  │
├──────────┬──────────────────────────────────┤
│Dashboard │  COLABORACIONES                   │
│Productos │                                   │
│Ventas    │  [Tabs:]                          │
│Colaborar │  • Mis Colaboraciones              │
│Fondo     │  • Propuestas Recibidas            │
│Impulsa   │  • Buscar Colaboradores            │
│Perfil    │                                   │
│          │  MIS COLABORACIONES ACTIVAS:       │
│          │  ┌────────────────────────────┐   │
│          │  │ Producto: Set Papelería    │   │
│          │  │ Con: La tienda de Coni     │   │
│          │  │ Ganancias: 50/50           │   │
│          │  │ [Ver detalles]             │   │
│          │  └────────────────────────────┘   │
│          │                                   │
│          │  [+ PROPONER COLABORACIÓN]        │
└──────────┴──────────────────────────────────┘
```

**Funcionalidades:**
- Ver colaboraciones activas
- Proponer nuevas colaboraciones
- Recibir y gestionar propuestas
- Definir términos (división de ganancias, responsabilidades)

### 9. FONDO IMPULSA (Emprendedor y Público)

**Vista Pública:**
```
┌─────────────────────────────────────────┐
│  [Logo] CONECTA MERCADO  [🔍]  [🛒] [👤] │
├─────────────────────────────────────────┤
│  FONDO IMPULSA                          │
│  "Apoyo social a emprendedores"         │
│                                         │
│  ¿Cómo funciona?                        │
│  El 1% de cada venta se destina a un    │
│  fondo que apoya a emprendedores        │
│  emergentes con capital inicial o       │
│  asesorías.                             │
│                                         │
│  CANDIDATOS ACTUALES:                   │
│  (Votación cada 6 meses)                │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ [Foto] Emprendedor A            │   │
│  │ Proyecto: Joyería artesanal     │   │
│  │ Descripción...                  │   │
│  │ [❤️ VOTAR] Votos: 234           │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ [Foto] Emprendedor B            │   │
│  │ Proyecto: Repostería casera     │   │
│  │ Descripción...                  │   │
│  │ [❤️ VOTAR] Votos: 189           │   │
│  └─────────────────────────────────┘   │
│                                         │
│  GANADORES ANTERIORES:                  │
│  [Carrusel de emprendedores apoyados]   │
└─────────────────────────────────────────┘
```

**Vista Emprendedor (Postular):**
```
┌─────────────────────────────────────────────┐
│  [Logo] PANEL EMPRENDEDOR        [👤] [⚙️]  │
├──────────┬──────────────────────────────────┤
│Dashboard │  FONDO IMPULSA                    │
│Productos │                                   │
│Ventas    │  POSTULARME AL FONDO              │
│Colaborar │                                   │
│Fondo     │  Nombre del proyecto: [____]      │
│Impulsa   │  Descripción: [____________]      │
│Perfil    │  Monto solicitado: [____]         │
│          │  ¿Para qué usarás el apoyo?       │
│          │  [_____________________]          │
│          │  Misión: [_______________]        │
│          │  Visión: [_______________]        │
│          │  Objetivos: [____________]        │
│          │                                   │
│          │  [ENVIAR POSTULACIÓN]             │
│          │                                   │
│          │  TU POSTULACIÓN ACTUAL:           │
│          │  Estado: En votación              │
│          │  Votos recibidos: 45              │
└──────────┴──────────────────────────────────┘
```

### 10. PERFIL (Emprendedor)

**Estructura:**
```
┌─────────────────────────────────────────────┐
│  [Logo] PANEL EMPRENDEDOR        [👤] [⚙️]  │
├──────────┬──────────────────────────────────┤
│Dashboard │  MI PERFIL                        │
│Productos │                                   │
│Ventas    │  INFORMACIÓN PERSONAL             │
│Colaborar │  [Foto]                           │
│Fondo     │  Nombre: [____________]           │
│Impulsa   │  Email: [_____________]           │
│Perfil    │  [Cambiar contraseña]             │
│          │                                   │
│          │  INFORMACIÓN DEL NEGOCIO          │
│          │  ID Emprendedor: #XXXXX           │
│          │  Nombre: [____________]           │
│          │  Descripción: [_________]         │
│          │  Logo: [Cambiar logo]             │
│          │                                   │
│          │  [GUARDAR CAMBIOS]                │
└──────────┴──────────────────────────────────┘
```

---

## 🎨 Paleta de Colores Oficial

| Rol               | Color         | HEX       | Uso sugerido                         |
| ----------------- | ------------- | --------- | ------------------------------------ |
| **Primario**      | Azul oscuro   | #0D3C61   | Encabezados, botones principales     |
| **Secundario**    | Azul turquesa | #00A6B3   | Botones secundarios, íconos, acentos |
| **Neutro claro**  | Gris claro    | #F4F6F8   | Fondos, secciones amplias            |
| **Neutro oscuro** | Gris azulado  | #34495E   | Texto secundario, bordes             |
| **Blanco puro**   | Blanco        | #FFFFFF   | Texto sobre fondos oscuros, tarjetas |

### Variables CSS

```css
:root {
  /* Colores principales */
  --primary: #0D3C61;        /* Azul oscuro - Botones principales, encabezados */
  --secondary: #00A6B3;      /* Azul turquesa - Botones secundarios, acentos */
  
  /* Colores neutros */
  --neutral-light: #F4F6F8;  /* Gris claro - Fondos, secciones */
  --neutral-dark: #34495E;   /* Gris azulado - Texto secundario, bordes */
  --white: #FFFFFF;          /* Blanco puro - Tarjetas, texto sobre oscuro */
  
  /* Textos */
  --text-primary: #0D3C61;   /* Texto principal */
  --text-secondary: #34495E; /* Texto secundario */
  --text-light: #FFFFFF;     /* Texto sobre fondos oscuros */
  
  /* Fondos */
  --bg-primary: #FFFFFF;     /* Fondo principal */
  --bg-secondary: #F4F6F8;   /* Fondo secundario */
  
  /* Estados (usando colores complementarios) */
  --success: #28A745;        /* Verde para éxito */
  --error: #DC3545;          /* Rojo para errores */
  --warning: #FFC107;        /* Amarillo para advertencias */
  --info: #00A6B3;           /* Turquesa (secundario) para información */
  
  /* Sombras */
  --shadow-sm: 0 1px 2px rgba(13, 60, 97, 0.05);
  --shadow-md: 0 4px 6px rgba(13, 60, 97, 0.1);
  --shadow-lg: 0 10px 15px rgba(13, 60, 97, 0.1);
}
```

### Ejemplos de Uso

```css
/* Botón primario */
.btn-primary {
  background-color: var(--primary);
  color: var(--white);
  border: none;
}

.btn-primary:hover {
  background-color: #0A2E4A; /* Versión más oscura del primario */
}

/* Botón secundario */
.btn-secondary {
  background-color: var(--secondary);
  color: var(--white);
  border: none;
}

.btn-secondary:hover {
  background-color: #008A95; /* Versión más oscura del secundario */
}

/* Tarjeta */
.card {
  background-color: var(--white);
  border: 1px solid var(--neutral-light);
  box-shadow: var(--shadow-md);
}

/* Encabezado */
.header {
  background-color: var(--primary);
  color: var(--white);
}

/* Footer */
.footer {
  background-color: var(--neutral-dark);
  color: var(--white);
}

/* Sección con fondo */
.section-alt {
  background-color: var(--neutral-light);
}
```

---

## 📊 Datos Mock (mockData)

### Categorías

```javascript
export const mockCategories = [
  {
    id: 1,
    name: "Papelería",
    icon: "📝",
    slug: "papeleria",
    description: "Artículos escolares y de oficina"
  },
  {
    id: 2,
    name: "Accesorios",
    icon: "👜",
    slug: "accesorios",
    description: "Complementos y accesorios personales"
  },
  {
    id: 3,
    name: "Artesanía",
    icon: "🎨",
    slug: "artesania",
    description: "Productos hechos a mano"
  },
  {
    id: 4,
    name: "Belleza y Cuidado",
    icon: "💄",
    slug: "belleza",
    description: "Productos de belleza y cuidado personal"
  },
  {
    id: 5,
    name: "Plantas",
    icon: "🌱",
    slug: "plantas",
    description: "Plantas decorativas y de jardín"
  }
];
```

### Negocios/Emprendedores

```javascript
export const mockBusinesses = [
  {
    id: 1,
    name: "Papelería Verde",
    slug: "papeleria-verde",
    owner: "María González",
    description: "Papelería ecológica y sustentable",
    logo: "🌿",
    rating: 4.8,
    productsCount: 45,
    joinedDate: "2024-01-15",
    isVerified: true
  },
  {
    id: 2,
    name: "La tienda de Coni",
    slug: "tienda-coni",
    owner: "Constanza Ramírez",
    description: "Accesorios y decoración handmade",
    logo: "🎀",
    rating: 4.9,
    productsCount: 32,
    joinedDate: "2024-02-10",
    isVerified: true
  },
  // Agregar más negocios...
];
```

### Productos

```javascript
export const mockProducts = [
  {
    id: 1,
    name: "Set de Cuadernos Ecológicos",
    slug: "set-cuadernos-ecologicos",
    description: "Pack de 3 cuadernos tamaño A5 de papel reciclado",
    price: 299.99,
    images: [
      "/images/products/cuadernos1.jpg",
      "/images/products/cuadernos2.jpg",
      "/images/products/cuadernos3.jpg"
    ],
    category: "papeleria",
    businessId: 1,
    businessName: "Papelería Verde",
    stock: 25,
    rating: 4.7,
    reviewsCount: 18,
    isCollaboration: false,
    isFeatured: true,
    createdAt: "2024-10-01"
  },
  {
    id: 2,
    name: "Diademas Artesanales",
    slug: "diademas-artesanales",
    description: "Diademas tejidas a mano con hilos de colores",
    price: 149.99,
    images: [
      "/images/products/diademas1.jpg"
    ],
    category: "accesorios",
    businessId: 2,
    businessName: "La tienda de Coni",
    stock: 15,
    rating: 5.0,
    reviewsCount: 12,
    isCollaboration: false,
    isFeatured: true,
    createdAt: "2024-10-15"
  },
  {
    id: 3,
    name: "Set Escritorio Colaborativo",
    slug: "set-escritorio-colaborativo",
    description: "Set completo: cuaderno + plumas + organizador",
    price: 499.99,
    images: [
      "/images/products/set-escritorio1.jpg"
    ],
    category: "papeleria",
    businessId: 1,
    businessName: "Papelería Verde",
    collaborators: [
      {
        businessId: 2,
        businessName: "La tienda de Coni",
        contribution: "Organizador"
      }
    ],
    stock: 10,
    rating: 4.9,
    reviewsCount: 8,
    isCollaboration: true,
    profitShare: {
      1: 60, // Papelería Verde: 60%
      2: 40  // La tienda de Coni: 40%
    },
    isFeatured: true,
    createdAt: "2024-10-20"
  },
  // Agregar más productos (mínimo 20-30 para testing)...
];
```

### Usuarios

```javascript
export const mockUsers = [
  {
    id: 1,
    email: "emprendedor@test.com",
    password: "123456", // En producción nunca haríamos esto
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
  },
  // Más usuarios...
];
```

### Colaboraciones

```javascript
export const mockCollaborations = [
  {
    id: 1,
    productId: 3,
    productName: "Set Escritorio Colaborativo",
    status: "active",
    businesses: [
      {
        id: 1,
        name: "Papelería Verde",
        contribution: "Cuaderno y plumas",
        profitShare: 60
      },
      {
        id: 2,
        name: "La tienda de Coni",
        contribution: "Organizador decorado",
        profitShare: 40
      }
    ],
    totalRevenue: 4999.90,
    startDate: "2024-10-20",
    terms: "División 60/40 según aporte. Inventario compartido."
  },
  // Más colaboraciones...
];
```

### Fondo Impulsa - Candidatos

```javascript
export const mockFondoImpulsaCandidates = [
  {
    id: 1,
    entrepreneurName: "Ana Martínez",
    projectName: "Joyería Artesanal",
    description: "Creación de joyería única usando técnicas tradicionales y materiales reciclados",
    amountRequested: 5000,
    mision: "Rescatar técnicas ancestrales de joyería",
    vision: "Ser referente en joyería sustentable",
    objectives: [
      "Adquirir herramientas especializadas",
      "Comprar materiales iniciales",
      "Crear catálogo de productos"
    ],
    photo: "/images/candidates/ana.jpg",
    votes: 234,
    period: "2024-H2",
    status: "voting",
    submittedDate: "2024-09-01"
  },
  {
    id: 2,
    entrepreneurName: "Carlos Ruiz",
    projectName: "Repostería Casera",
    description: "Productos de repostería sin gluten para personas celíacas",
    amountRequested: 3500,
    mision: "Hacer la repostería sin gluten accesible",
    vision: "Expandir a otros productos especializados",
    objectives: [
      "Comprar horno industrial",
      "Certificación sanitaria",
      "Stock inicial de ingredientes"
    ],
    photo: "/images/candidates/carlos.jpg",
    votes: 189,
    period: "2024-H2",
    status: "voting",
    submittedDate: "2024-09-05"
  },
  // Más candidatos...
];

export const mockFondoImpulsaWinners = [
  {
    id: 1,
    entrepreneurName: "Laura Sánchez",
    projectName: "Velas Aromáticas",
    amountReceived: 4000,
    period: "2024-H1",
    results: "Estableció su taller y ahora tiene 15 productos en el catálogo"
  },
  // Ganadores anteriores...
];
```

### Ventas (Para Dashboard)

```javascript
export const mockSales = [
  {
    id: 1,
    productId: 1,
    productName: "Set de Cuadernos Ecológicos",
    quantity: 2,
    pricePerUnit: 299.99,
    total: 599.98,
    commission: 47.99, // 8%
    fondoImpulsa: 5.99, // 1%
    netRevenue: 546.00,
    customerName: "Juan Pérez",
    date: "2024-11-01",
    status: "completed"
  },
  {
    id: 2,
    productId: 3,
    productName: "Set Escritorio Colaborativo",
    quantity: 1,
    pricePerUnit: 499.99,
    total: 499.99,
    commission: 39.99,
    fondoImpulsa: 4.99,
    netRevenue: 455.01,
    profitShare: {
      1: 273.00, // 60% para negocio 1
      2: 182.00  // 40% para negocio 2
    },
    customerName: "María López",
    date: "2024-10-31",
    status: "completed"
  },
  // Más ventas...
];
```

---

## 🔧 Funcionalidades por Implementar

### Funcionalidades Básicas (Core)

1. **Navegación**
   - Routing con React Router
   - Navegación entre páginas
   - Breadcrumbs en páginas internas

2. **Autenticación (Simulada)**
   - Login/Logout
   - Registro de usuario/emprendedor
   - Persistencia de sesión (localStorage)
   - Redirección según rol

3. **Catálogo de Productos**
   - Listado de productos
   - Filtrado por categoría
   - Búsqueda de productos
   - Ordenamiento (precio, popularidad, novedad)
   - Paginación

4. **Detalle de Producto**
   - Visualización completa del producto
   - Galería de imágenes
   - Información del vendedor
   - Selector de cantidad
   - Agregar al carrito

5. **Carrito de Compras**
   - Agregar/eliminar productos
   - Modificar cantidades
   - Cálculo automático de totales
   - Desglose de comisión y Fondo Impulsa
   - Persistencia (localStorage)

6. **Dashboard Emprendedor**
   - Resumen de métricas
   - Listado de productos propios
   - CRUD de productos
   - Gestión de stock
   - Historial de ventas

7. **Colaboraciones**
   - Ver colaboraciones activas
   - Proponer colaboraciones
   - Aceptar/rechazar propuestas
   - Definir términos de colaboración

8. **Fondo Impulsa**
   - Ver candidatos actuales
   - Sistema de votación (1 voto por usuario)
   - Postularse al fondo (emprendedores)
   - Ver ganadores históricos

### Funcionalidades Adicionales (Nice to have)

1. **Filtros Avanzados**
   - Por rango de precio
   - Por rating
   - Por disponibilidad
   - Por tipo (individual/colaboración)

2. **Favoritos/Wishlist**
   - Marcar productos favoritos
   - Ver lista de favoritos

3. **Notificaciones (Visual)**
   - Alertas de stock bajo (emprendedor)
   - Nuevas propuestas de colaboración
   - Venta realizada

4. **Estadísticas Avanzadas**
   - Gráficos de ventas por período
   - Productos más vendidos
   - Análisis de colaboraciones

5. **Perfil Público del Negocio**
   - Página dedicada a cada negocio
   - Todos sus productos
   - Reviews y ratings

---

## 📱 Responsive Design

La aplicación debe ser completamente responsive con breakpoints:

```css
/* Mobile First */
.container {
  /* Móvil: < 640px */
  padding: 1rem;
}

@media (min-width: 640px) {
  /* Tablet: >= 640px */
  .container {
    padding: 1.5rem;
  }
}

@media (min-width: 1024px) {
  /* Desktop: >= 1024px */
  .container {
    padding: 2rem;
    max-width: 1280px;
    margin: 0 auto;
  }
}
```

**Consideraciones móviles:**
- Menú hamburguesa en móvil
- Grid de productos: 1 columna en móvil, 2 en tablet, 3-4 en desktop
- Navegación bottom bar en móvil (opcional)
- Carrito como modal en móvil

---

## 🚀 Instrucciones de Desarrollo

### Paso 1: Setup Inicial

```bash
# Crear proyecto React con Vite
npm create vite@latest conecta-mercado -- --template react
cd conecta-mercado
npm install

# Instalar dependencias
npm install react-router-dom
npm install lucide-react  # Para iconos
npm install recharts  # Para gráficos (dashboard)
```

### Paso 2: Estructura Base

1. Crear la estructura de carpetas según arquitectura
2. Configurar React Router en `App.jsx`
3. Crear archivos de datos mock en `src/data/`
4. Implementar Context APIs para estado global

### Paso 3: Componentes Comunes

Implementar en orden:
1. `Navbar.jsx` - Navegación principal
2. `Footer.jsx` - Pie de página
3. `SearchBar.jsx` - Buscador
4. `ProductCard.jsx` - Tarjeta de producto
5. `CategoryCard.jsx` - Tarjeta de categoría

### Paso 4: Páginas Públicas

Implementar en orden:
1. `Home.jsx` - Página principal
2. `Categories.jsx` - Listado por categoría
3. `ProductDetail.jsx` - Detalle del producto
4. `Cart.jsx` - Carrito de compras
5. `Login.jsx` y `Register.jsx` - Autenticación

### Paso 5: Área Emprendedor

Implementar en orden:
1. `Dashboard.jsx` - Panel principal
2. `MyProducts.jsx` - Gestión de productos
3. `Collaborations.jsx` - Gestión de colaboraciones
4. `FondoImpulsa.jsx` - Postulación y seguimiento
5. `Profile.jsx` - Perfil del emprendedor

### Paso 6: Funcionalidades

1. Implementar AuthContext y CartContext
2. Configurar routing protegido por rol
3. Implementar lógica de carrito (localStorage)
4. Implementar sistema de búsqueda y filtros
5. Implementar sistema de votación Fondo Impulsa

### Paso 7: Estilos y UX

1. Aplicar estilos globales
2. Implementar responsive design
3. Agregar transiciones y animaciones sutiles
4. Testing en diferentes dispositivos

---

## 🎯 Prioridades de Desarrollo

### Fase 1: MVP (Mínimo Producto Viable)
- [ ] Routing básico
- [ ] Página principal con productos
- [ ] Detalle de producto
- [ ] Carrito funcional
- [ ] Login/Registro simulado
- [ ] Dashboard emprendedor básico

### Fase 2: Funcionalidades Core
- [ ] Filtros y búsqueda
- [ ] CRUD de productos (emprendedor)
- [ ] Sistema de colaboraciones básico
- [ ] Fondo Impulsa (visualización)

### Fase 3: Refinamiento
- [ ] Sistema de votación Fondo Impulsa
- [ ] Estadísticas en dashboard
- [ ] Responsive completo
- [ ] Mejoras UX/UI

---

## 📝 Notas Importantes

1. **Datos simulados:** Todos los datos deben venir de archivos mock, no hay backend real

2. **Persistencia:** Usar `localStorage` para:
   - Sesión de usuario
   - Carrito de compras
   - Favoritos
   - Votos emitidos

3. **IDs únicos:** Cada emprendedor tiene un ID asignado (puede ser auto-generado en registro)

4. **Comisiones:** Siempre mostrar de forma transparente:
   - Subtotal
   - Comisión plataforma (8%)
   - Aporte Fondo Impulsa (1%)
   - Total

5. **Colaboraciones:** En productos colaborativos, mostrar:
   - Todos los negocios participantes
   - Contribución de cada uno
   - División de ganancias (solo visible para emprendedores involucrados)

6. **Imágenes:** Usar placeholders o URLs de placeholder images:
   - `https://via.placeholder.com/400x300`
   - O crear carpeta `public/images` con imágenes genéricas

7. **Validaciones:** Implementar validaciones básicas en formularios:
   - Campos requeridos
   - Formato de email
   - Contraseña mínimo 6 caracteres
   - Precios > 0
   - Stock >= 0

---

## 🎨 Componentes UI Sugeridos

### Botones
```jsx
// Botón primario
<button className="btn-primary">Agregar al carrito</button>

// Botón secundario
<button className="btn-secondary">Ver más</button>

// Botón outline
<button className="btn-outline">Cancelar</button>
```

### Cards
```jsx
// Product Card
<div className="product-card">
  <img src={product.image} alt={product.name} />
  <h3>{product.name}</h3>
  <p className="price">${product.price}</p>
  <button>Agregar</button>
</div>
```

### Badges
```jsx
// Para colaboraciones
<span className="badge badge-collab">Colaboración</span>

// Para destacados
<span className="badge badge-featured">Destacado</span>

// Para stock bajo
<span className="badge badge-warning">Últimas unidades</span>
```

---

## 🔍 Testing de Flujos

### Flujo Cliente
1. Llegar a home
2. Navegar por categorías
3. Buscar producto
4. Ver detalle
5. Agregar al carrito
6. Modificar cantidad en carrito
7. Ver desglose de costos
8. "Proceder al pago" (mostrar mensaje de éxito)

### Flujo Emprendedor
1. Registrarse como emprendedor
2. Completar perfil del negocio
3. Agregar productos
4. Ver dashboard con métricas
5. Proponer colaboración
6. Postularse al Fondo Impulsa
7. Ver ventas simuladas

---

## 💡 Tips para Claude Code

1. **Comenzar simple:** Primero estructura, luego funcionalidad, después estilos

2. **Componentes reutilizables:** Crear componentes pequeños y reutilizables

3. **useState y useContext:** Usar hooks apropiadamente para manejo de estado

4. **localStorage:** No olvides persistir carrito y sesión

5. **Console logs:** Dejar console.logs para debugging durante desarrollo

6. **Comentarios:** Agregar comentarios en funciones complejas

7. **PropTypes:** Opcional pero recomendado para validación de props

8. **Iconos:** Usar lucide-react para iconos consistentes:
   ```jsx
   import { ShoppingCart, User, Search, Heart } from 'lucide-react';
   ```

9. **Placeholders:** Para imágenes de productos que no existen, usar:
   ```
   https://placehold.co/400x300/png?text=Producto
   ```

10. **Git:** Hacer commits frecuentes con mensajes descriptivos

---

## 📚 Recursos Adicionales

### Librerías recomendadas
- **react-router-dom:** Routing
- **lucide-react:** Iconos
- **recharts:** Gráficos
- **date-fns:** Manejo de fechas (opcional)
- **react-hot-toast:** Notificaciones toast (opcional)

### Referencias de diseño
- Material Design
- Tailwind CSS (opcional, se puede usar vanilla CSS)
- Shopify Admin (para dashboard)
- Mercado Libre / Amazon (para marketplace)

---

## ✅ Checklist Final

Antes de considerar el prototipo completo:

**Funcionalidad:**
- [ ] Navegación funciona en todas las páginas
- [ ] Login/Registro funcional
- [ ] Productos se muestran correctamente
- [ ] Búsqueda y filtros funcionan
- [ ] Carrito funciona (agregar, eliminar, modificar)
- [ ] Dashboard emprendedor muestra datos mock
- [ ] CRUD de productos funciona
- [ ] Colaboraciones se pueden crear
- [ ] Fondo Impulsa muestra candidatos y permite votar

**UI/UX:**
- [ ] Responsive en móvil, tablet y desktop
- [ ] Estilos consistentes en toda la app
- [ ] Feedback visual en acciones (botones, forms)
- [ ] Loading states donde sea necesario
- [ ] Manejo de estados vacíos

**Datos:**
- [ ] Datos mock completos y realistas
- [ ] Cálculos correctos (precios, comisiones)
- [ ] Datos persisten en localStorage
- [ ] No hay datos hardcodeados en componentes

**Código:**
- [ ] Código limpio y comentado
- [ ] Componentes reutilizables
- [ ] Sin errores en consola
- [ ] Estructura de carpetas organizada

---

## 🎉 Resultado Esperado

Un prototipo funcional de "Conecta Mercado" que permita:

1. **Para usuarios:** Navegar, buscar, ver productos, agregar al carrito y entender el modelo de negocio (comisión 8%, Fondo Impulsa 1%)

2. **Para emprendedores:** Gestionar productos, ver métricas simuladas, proponer colaboraciones, postularse al Fondo Impulsa

3. **Demostrar el concepto:** Mostrar cómo funciona la plataforma, las colaboraciones entre negocios y el impacto social del Fondo Impulsa

El código debe ser limpio, organizado y fácil de expandir a futuro cuando se conecte con un backend real.

---

## 📞 Soporte

Este documento sirve como guía completa para el desarrollo. Para dudas o aclaraciones sobre:
- Flujos específicos
- Diseño de componentes
- Lógica de negocio
- Estructura de datos

Consultar los bocetos originales adjuntos y los documentos de explicación del proyecto.

---

**¡Éxito en el desarrollo! 🚀**