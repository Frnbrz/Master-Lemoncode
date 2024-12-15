# Metodologías CSS

## ¿Qué es?

Las metodologías CSS son un conjunto de prácticas y convenciones diseñadas para escribir y organizar el código CSS de manera eficiente y mantenible. Estas metodologías mejoran la legibilidad, escalabilidad y reutilización del código en proyectos de desarrollo web.

### Principales Metodologías CSS

1. **BEM (Block, Element, Modifier)**: Convención de nomenclatura que facilita la creación de componentes reutilizables y predecibles.
2. **OOCSS (Object-Oriented CSS)**: Promueve la separación de la estructura y el aspecto visual, permitiendo la reutilización de estilos.
3. **SMACSS (Scalable and Modular Architecture for CSS)**: Organiza el CSS en diferentes categorías para mejorar la escalabilidad y modularidad.
4. **Atomic CSS**: Utiliza clases muy específicas y pequeñas para aplicar estilos, promoviendo la reutilización y la consistencia.

> Estas metodologías ayudan a mantener un código CSS limpio y organizado, facilitando el mantenimiento y la colaboración en proyectos grandes y complejos.

## BEM (Block, Element, Modifier)

### ¿Qué es BEM?

BEM es una metodología CSS que ayuda a estructurar y nombrar las clases CSS de manera que sean más legibles y mantenibles. BEM divide los componentes en tres partes principales:

1. **Block (Bloque)**: Representa un componente independiente y reutilizable. Ejemplo: `button`, `header`, `container`.
2. **Element (Elemento)**: Representa una parte del bloque que tiene una función específica. Se denota con dos guiones bajos (`__`). Ejemplo: `button__icon`, `header__title`.
3. **Modifier (Modificador)**: Representa una variación o estado del bloque o elemento. Se denota con dos guiones (`--`). Ejemplo: `button--primary`, `header__title--large`.

### Ejemplo de BEM

```html
<div class="card">
  <h2 class="card__title card__title--large">Título de la tarjeta</h2>
  <p class="card__description">Descripción de la tarjeta</p>
  <button class="card__button card__button--primary">Botón</button>
</div>
```
