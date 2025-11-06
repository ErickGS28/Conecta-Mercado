# 🛒 Conecta Mercado

Plataforma e-commerce para pequeños negocios y emprendedores. Proyecto de demostración frontend con React + Vite + Tailwind CSS.

## 🚀 Características

- **Marketplace:** Catálogo de productos con filtrado por categorías
- **Carrito de Compras:** Gestión completa con cálculo de comisiones
- **Panel Emprendedor:** Dashboard con métricas y gestión simulada
- **Fondo Impulsa:** Sistema de votación para apoyo a emprendedores
- **100% Frontend:** Todo funciona con datos mock simulados
- **Responsive:** Adaptado a móviles, tablets y desktop

## 📋 Requisitos

- Node.js 16+
- npm o yarn

## 🔧 Instalación

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```

3. **Abrir en navegador:**
   El proyecto se abrirá automáticamente en `http://localhost:3000`

## 📦 Comandos Disponibles

```bash
npm run dev      # Iniciar servidor de desarrollo
npm run build    # Construir para producción
npm run preview  # Previsualizar build de producción
```

## 👤 Credenciales de Prueba

### Cliente
- **Email:** cliente@test.com
- **Contraseña:** 123456

### Emprendedor
- **Email:** emprendedor@test.com
- **Contraseña:** 123456

## 🎨 Tecnologías

- **React 18** - Framework UI
- **Vite** - Build tool ultrarrápido
- **Tailwind CSS 4** - Estilos con utility-first
- **React Router** - Navegación
- **Lucide React** - Iconos

## 📁 Estructura del Proyecto

```
src/
├── components/       # Componentes reutilizables
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── ProductCard.jsx
├── pages/           # Páginas principales
│   ├── Home.jsx
│   ├── Cart.jsx
│   ├── Login.jsx
│   ├── Dashboard.jsx
│   └── FondoImpulsa.jsx
├── data/            # Datos mock
│   └── mockData.js
├── styles/          # Estilos globales
│   └── global.css
├── App.jsx          # Componente principal
└── main.jsx         # Entry point
```

## 💡 Concepto del Proyecto

### Comisiones
- **8%** comisión de plataforma (vs 14-20% competidores)
- **1%** destinado al Fondo Impulsa

### Fondo Impulsa
Iniciativa social donde el 1% de cada venta se acumula en un fondo para apoyar emprendedores emergentes. La comunidad vota cada 6 meses para elegir al beneficiario.

### Colaboraciones
Los emprendedores pueden crear productos colaborativos y compartir ganancias.

## 🎯 Flujos Principales

### Como Cliente
1. Navegar por productos
2. Filtrar por categorías
3. Agregar al carrito
4. Ver desglose de costos (incluye Fondo Impulsa)
5. Proceder al pago (simulado)
6. Votar por candidatos del Fondo Impulsa

### Como Emprendedor
1. Acceder al dashboard
2. Ver métricas de ventas
3. Gestionar productos (simulado)
4. Ver colaboraciones
5. Postular al Fondo Impulsa

## 📝 Notas Importantes

- **Proyecto de demostración:** No hay backend real, todo es simulado
- **LocalStorage:** Se usa para persistir carrito y sesión de usuario
- **Datos mock:** Todos los productos, usuarios y ventas son ficticios
- **Sin procesamiento de pagos:** Los pagos son simulados con alertas

## 🎨 Paleta de Colores

- **Primario:** #0D3C61 (Azul oscuro)
- **Secundario:** #00A6B3 (Turquesa)
- **Fondo:** #F4F6F8 (Gris claro)
- **Texto:** #34495E (Gris azulado)

## 🚧 Próximas Mejoras (si se desarrolla más)

- [ ] Conectar con backend real
- [ ] Sistema de autenticación completo
- [ ] CRUD completo de productos
- [ ] Sistema de mensajería entre emprendedores
- [ ] Procesamiento real de pagos
- [ ] Reviews y ratings de productos
- [ ] Panel de administrador

## 📄 Licencia

Proyecto educativo/demostrativo - Uso libre

## 🤝 Contribuciones

Este es un proyecto de demostración. Si quieres mejorarlo, siéntete libre de hacer fork y experimentar.

---

**Desarrollado con React + Vite + Tailwind CSS**
