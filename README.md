# RiseWave Store - Proyecto Final Front-End

## Datos del Estudiante

| Campo | Información |
|-------|-------------|
| **Nombre y Apellido** | Luis José Elcure Rivero |
| **Curso / Comisión** | Front-End JS 26238 |
| **GitHub Usuario** | luiselcuure |
| **URL del Repositorio** | git@github.com:luiselcure/front_end_js.git |
| **URL del Deploy** | https://luiselcure.github.io/front_end_js/ |

---

## Descripción de la Web

**RiseWave Store** es un e-commerce ficticio especializado en hardware, periféricos y artículos gamer. El sitio permite a los usuarios navegar por un catálogo de productos, ver detalles por categoría, agregar productos a un carrito de compras, gestionar cantidades, aplicar cupones de descuento y proceder al checkout. También incluye una página de contacto con formulario funcional.

### Páginas principales

| Página | Descripción |
|--------|-------------|
| **index.html** | Landing page con hero banner, categorías destacadas y 4 productos estáticos "destacados". |
| **catalog.html** | Catálogo completo: muestra 4 productos estáticos + **productos generados dinámicamente desde JavaScript** (array `catalogo`). Incluye sidebar de filtros (solo visual). |
| **buy-cart.html** | Carrito de compras con: lista de items (cantidad editable, subtotal, eliminar), resumen de totales (subtotal, envío, descuento, total), cupón de descuento, botón "Vaciar carrito" y checkout. |
| **contact.html** | Formulario de contacto validado (nombre, email, teléfono, asunto, mensaje, checkbox de políticas) que envía a `formsubmit.co`. |

### Funcionalidades implementadas
-  Navegación entre todas las páginas (header + footer consistentes)
-  Menú responsive "hamburguesa" solo con CSS (checkbox hack)
-  Generación dinámica de tarjetas de producto en `catalog.html` desde `script.js`
-  Estilos completos en `styles.css` (variables de color, tipografía Roboto, dark theme)
-  Diseño responsive: breakpoints 992px (tablet) y 600px (mobile)

### Funcionalidades **pendientes** (ver `checklist.md`)
-  Event listeners para botones (agregar al carrito, +/-, eliminar, vaciar, cupón, checkout, búsqueda, form submit)
-  Persistencia del carrito en `localStorage` / `sessionStorage`
-  Lógica de cálculo de totales, descuentos y validación de cupones

---

##  Organización de la Estructura del Proyecto

```
front_end_js/
│
├── index.html          # Landing page
├── catalog.html        # Catálogo con productos dinámicos
├── buy-cart.html       # Carrito de compras
├── contact.html        # Formulario de contacto
├── styles.css          # Hoja de estilos única (mobile-first, responsive)
├── script.js           # Lógica JS: array catalogo + createCard() + renderizado
├── checklist.md        # Checklist de requisitos del proyecto
├── README.md           # Este archivo
│
└── img/                # Assets gráficos (referenciados en HTML/CSS)
    ├── logotype_riseWave.png
    ├── buy_cart.png
    ├── main-banner.jpg
    ├── fp1.jpg
    ├── fp2.jpg
    ├── fp3.jpg
    └── fp4.jpg
```


### Dependencias externas
- **Google Fonts**: Roboto (300-900)
- **FormSubmit**: Endpoint para envío de formulario de contacto (sin backend propio)
- **Sin frameworks ni librerías JS** (Vanilla JS puro)

---

##  Licencia

Proyecto educativo - Talentotech Front-End JavaScript - 2026