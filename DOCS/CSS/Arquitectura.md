# Arquitectura CSS

## ¿Qué es la Arquitectura CSS?

La arquitectura CSS se refiere a la organización y estructuración del código CSS de manera que sea fácil de mantener, escalable y eficiente. Una buena arquitectura CSS ayuda a gestionar proyectos grandes y complejos, facilitando la colaboración entre desarrolladores y la evolución del proyecto a lo largo del tiempo.

## Principales Conceptos de Arquitectura CSS

1. **Modularidad**: Dividir el CSS en módulos pequeños y reutilizables.
2. **Escalabilidad**: Asegurarse de que el CSS pueda crecer sin volverse inmanejable.
3. **Mantenibilidad**: Facilitar la actualización y el mantenimiento del código CSS.
4. **Consistencia**: Mantener un estilo coherente en todo el proyecto.

## Metodologías Comunes

1. **BEM (Block, Element, Modifier)**: Convención de nomenclatura que facilita la creación de componentes reutilizables y predecibles.
2. **OOCSS (Object-Oriented CSS)**: Promueve la separación de la estructura y el aspecto visual, permitiendo la reutilización de estilos.
3. **SMACSS (Scalable and Modular Architecture for CSS)**: Organiza el CSS en diferentes categorías para mejorar la escalabilidad y modularidad.
4. **Atomic CSS**: Utiliza clases muy específicas y pequeñas para aplicar estilos, promoviendo la reutilización y la consistencia.

## Ejemplo de Arquitectura CSS con BEM

```html
<div class="card">
  <h2 class="card__title card__title--large">Título de la tarjeta</h2>
  <p class="card__description">Descripción de la tarjeta</p>
  <button class="card__button card__button--primary">Botón</button>
</div>
```

```css
.card {
  /* Estilos del bloque card */
}
.card__title {
  /* Estilos del elemento
title dentro del bloque card */
}
.card__title--large {
  /* Estilos del
modificador large del elemento title */
}
.card__description {
  /* Estilos del
elemento description dentro del bloque card */
}
.card__button {
  /* Estilos del
elemento button dentro del bloque card */
}
.card__button--primary {
  /* Estilos
del modificador primary del elemento button */
}
```
