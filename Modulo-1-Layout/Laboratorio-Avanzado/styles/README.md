# Uso de SCSS en el Proyecto

Este proyecto utiliza SCSS para mejorar la **productividad**, **mantenibilidad** y **flexibilidad** en el desarrollo de estilos CSS. A continuación, se detalla cómo se organiza la información utilizando la arquitectura 7-1.

## Arquitectura 7-1

La arquitectura 7-1 es una estructura moderna de carpetas para organizar los archivos SCSS de manera eficiente y escalable. Esta estructura se basa en dividir los estilos en diferentes directorios según su propósito.

### Estructura de Carpetas

- **abstracts**: Contiene funciones, mixins, y variables.
- **base**: Reglas iniciales como reset y tipografía.
- **components**: Estilos para componentes específicos como botones y sliders.
- **layout**: Estilos para la estructura global como header y footer.
- **pages**: Estilos específicos de cada página.
- **themes**: Temas alternativos de estilo.
- **vendors**: Librerías de terceros.
- **utilities**: Clases utilitarias y helpers.

### Ejemplo de Organización

# SCSS

- **Modularidad y Mantenimiento**: Facilita la organización con variables y archivos parciales, manteniendo el código limpio y escalable.
- **Reutilización de Código**: Los mixins y funciones permiten crear bloques de código reutilizables, eliminando la redundancia.
- **Anidación de Selectores**: Escribe CSS que sigue la estructura HTML, mejorando la legibilidad y organización.
- **Manipulación de Colores**: Ajusta fácilmente tonos y saturación, ideal para modos claro/oscuro y temas dinámicos.
- **Compatibilidad y Ecosistema**: Compatible con herramientas modernas (Webpack, Gulp) y frameworks populares (Bootstrap).
- **Eficiencia y Flexibilidad**: Aumenta la productividad, permite una personalización avanzada y facilita el mantenimiento en proyectos grandes.

SCSS mejora la **productividad**, **mantenibilidad** y **flexibilidad** en el desarrollo de estilos CSS, siendo una herramienta esencial para el frontend moderno.

[Mas iformacion: Sass Guidelines](https://sass-guidelin.es/#too-long-didnt-read)
