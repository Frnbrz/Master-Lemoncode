# SCSS

- **Modularidad y Mantenimiento**: Facilita la organización con variables y archivos parciales, manteniendo el código limpio y escalable.
- **Reutilización de Código**: Los mixins y funciones permiten crear bloques de código reutilizables, eliminando la redundancia.
- **Anidación de Selectores**: Escribe CSS que sigue la estructura HTML, mejorando la legibilidad y organización.
- **Manipulación de Colores**: Ajusta fácilmente tonos y saturación, ideal para modos claro/oscuro y temas dinámicos.
- **Compatibilidad y Ecosistema**: Compatible con herramientas modernas (Webpack, Gulp) y frameworks populares (Bootstrap).
- **Eficiencia y Flexibilidad**: Aumenta la productividad, permite una personalización avanzada y facilita el mantenimiento en proyectos grandes.

SCSS mejora la **productividad**, **mantenibilidad** y **flexibilidad** en el desarrollo de estilos CSS, siendo una herramienta esencial para el frontend moderno.

# Arquitectura Sass

## 1. Componentización y Escalabilidad

- **Principio**: Estilos divididos en componentes reutilizables y desacoplados.
- **Organización en archivos**: Cada componente tiene su propio archivo parcial en `components/`.

## 2. Estructura 7-1

Basado en la guía de [Technoph1le](https://dev.to/technoph1le/a-modern-sass-folder-structure-330f), una estructura moderna de carpetas Sass puede incluir:

- **abstracts**: Contiene funciones, mixins, y variables.
- **base**: Reglas iniciales como reset y tipografía.
- **components**: Estilos para componentes específicos como botones y sliders.
- **layout**: Estilos para la estructura global como header y footer.
- **pages**: Estilos específicos de cada página.
- **themes**: Temas alternativos de estilo.
- **vendors**: Librerías de terceros.
- **utilities**: Clases utilitarias y helpers.

Esta estructura permite una mejor organización y escalabilidad en proyectos grandes.

### Uso de @use y @forward

En lugar de usar el método `@import` que ahora está obsoleto, se recomienda usar `@use` y `@forward` para importar archivos y carpetas en Sass.

## 3. Breakpoints Responsivos

- **Principio**: Nombres de breakpoints descriptivos (ej. `medium`, `large`) en lugar de depender del dispositivo.
- **Uso de mixins**: Simplifica aplicar breakpoints.

## 4. "Shame" Styles

- **Archivo `_shame.scss`**: Contiene estilos temporales o soluciones rápidas.

Para más detalles, consulta la [guía de Sass](https://sass-guidelin.es/#architecture).
