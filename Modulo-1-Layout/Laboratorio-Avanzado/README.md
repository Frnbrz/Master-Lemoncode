# Arquitectura Sass (Mejorada)

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
