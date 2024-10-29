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

- **Carpetas**:
  - **Base**: Reglas iniciales (reset, tipografía).
  - **Layout**: Estructura global (header, footer).
  - **Components**: Elementos específicos (botones, sliders).
  - **Pages**: Estilos específicos de cada página.
  - **Themes**: Temas alternativos de estilo.
  - **Abstracts**: Funciones, mixins, y variables.
  - **Vendors**: Librerías de terceros.

## 3. Breakpoints Responsivos

- **Principio**: Nombres de breakpoints descriptivos (ej. `medium`, `large`) en lugar de depender del dispositivo.
- **Uso de mixins**: Simplifica aplicar breakpoints.

## 4. "Shame" Styles

- **Archivo `_shame.scss`**: Contiene estilos temporales o soluciones rápidas.

Para más detalles, consulta la [guía de Sass](https://sass-guidelin.es/#architecture).
