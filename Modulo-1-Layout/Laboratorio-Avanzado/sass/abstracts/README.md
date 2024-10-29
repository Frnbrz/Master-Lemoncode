# Carpeta `abstracts/` en Arquitectura SASS

La carpeta `abstracts/` es una parte esencial en una arquitectura SASS modular (como la estructura 7-1) que se utiliza para almacenar configuraciones globales y utilidades de estilo. Estos archivos no generan CSS directamente, sino que definen funcionalidades reutilizables para mantener el código limpio y fácil de mantener.

## Archivos Comunes en `abstracts/`

Aquí están los tipos de archivos SCSS que suelen incluirse en `abstracts/`:

### 1. Variables (`_variables.scss`)

Archivo donde se definen todas las variables globales del proyecto, tales como:

- Colores
- Fuentes
- Tamaños y espaciados
- Z-index, entre otros

Esto facilita la personalización y el mantenimiento de valores globales en un solo lugar.

```scss
// abstracts/_variables.scss
$primary-color: #3498db;
$secondary-color: #2ecc71;
$font-stack: 'Helvetica, Arial, sans-serif';
```

### 2. Mixins (\_mixins.scss)

Los mixins son conjuntos de reglas SCSS reutilizables para tareas repetitivas o con parámetros, como media queries, animaciones y flexbox. Esto permite aplicar estilos complejos sin duplicar código.

```scss
// abstracts/\_mixins.scss
@mixin flex-center($direction: row) {
  display: flex;
  flex-direction: $direction;
  justify-content: center;
  align-items: center;
}
```

### 3. Funciones (\_functions.scss)

Las funciones permiten realizar cálculos personalizados y manipulación de valores en SCSS. Son útiles para tareas como conversiones de unidades o ajustes de colores.

```scss
// abstracts/_functions.scss
@function px-to-rem($px, $base: 16px) {
  @return #{$px / $base}rem;
}
```

#### Organización Recomendada de abstracts/

La estructura básica de la carpeta abstracts/ se ve así:

```
abstracts/
├── _variables.scss
├── _mixins.scss
├── _functions.scss
```

#### 1.1. Variables - colores

> ¿Por qué HSL?

HSL (Hue, Saturation, Lightness) - Mejor opción para flexibilidad y manipulación
Ventajas:

Facilita el ajuste de colores, especialmente cuando se trabaja con temas o necesita versiones más claras/oscuras de un color base.
Permite manipular rápidamente el tono (hue) sin alterar la saturación ni la luminosidad, lo cual es útil para crear variaciones de color (como hover, dark/light mode, etc.).
Muy intuitivo en términos de percepción de color, ya que hue representa el color, mientras que saturation y lightness modifican la intensidad y la claridad.

Ejemplo:

```scss
// Definición en HSL
$primary-color: hsl(210, 70%, 50%); // Un azul estándar
$primary-light: hsl(210, 70%, 70%); // Azul más claro
$primary-dark: hsl(210, 70%, 30%); // Azul más oscuro
```

uso: Ideal para sistemas de diseño, donde se requiere una manipulación flexible
de los colores, especialmente en el diseño de interfaces.;
