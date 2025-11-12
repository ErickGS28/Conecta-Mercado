# Instrucciones para las Imágenes de Productos

## Productos de Consuelo Ávila - Cuadernos Reciclados

He agregado los productos de **Cuadernos Reciclados** de Consuelo Ávila a la tienda:

### Productos creados:

1. **Cuaderno Personalizado Reciclado** - $50
   - ID: 1
   - Descripción completa sobre personalización y sustentabilidad
   - Marcado como `featured: true` (aparecerá primero en la tienda)
   - Badge dorado "⭐ Destacado"

2. **Cuaderno Sencillo Reciclado** - $30
   - ID: 17
   - Opción económica
   - También marcado como `featured: true`
   - Badge dorado "⭐ Destacado"

### Para usar las imágenes personalizadas:

Las imágenes están en: `c:\Users\eeeri\Downloads\ConectaMercado\imagenesProductoEjemplo\`

**Opción 1 - Copiar manualmente:**
1. Copia las imágenes de `imagenesProductoEjemplo` a `public/products/`
2. Actualiza las rutas en `src/data/mockData.js`:
   - Cambia `https://images.unsplash.com/...` por `/products/1.png` (o el nombre que corresponda)

**Opción 2 - Subir a un servidor:**
1. Sube las imágenes a un servicio como Imgur, Cloudinary, o tu servidor
2. Actualiza las URLs en `src/data/mockData.js`

### Descripción de las imágenes disponibles:

Según las instrucciones originales:
- **1.png**: Cuaderno morado con stickers de Snoopy, hojas blancas recicladas
- **2.png**: Cuaderno abierto mostrando hojas rayadas recicladas
- **3.png**: Cuaderno abierto mostrando hojas blancas recicladas
- **4.png**: (Verificar contenido)

### Para actualizar las rutas de las imágenes:

Edita el archivo `src/data/mockData.js` líneas 49 y 65:

```javascript
// Producto ID 1 - Cuaderno Personalizado
image: "/products/1.png",  // Cambia por la imagen del cuaderno con Snoopy

// Producto ID 17 - Cuaderno Sencillo
image: "/products/2.png",  // Cambia por la imagen del cuaderno abierto
```

### Estado actual:

✅ Productos creados en mockData.js
✅ Negocio "Cuadernos Reciclados" agregado con logo ♻️
✅ Productos marcados como destacados (aparecen primero)
✅ Badge "⭐ Destacado" visible en las tarjetas
✅ Precios correctos: $30 y $50
✅ Descripción completa y atractiva
✅ Tags: Sustentable, Personalizado, Ecológico, Reciclado
✅ También agregado en FondoImpulsa como ejemplo principal

### Próximos pasos:

1. Copia las imágenes a `public/products/`
2. Actualiza las URLs en mockData.js
3. Ejecuta `npm run build` para generar el build final
4. Deploy en Netlify
