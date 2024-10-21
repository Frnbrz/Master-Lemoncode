# Flexbox en CSS

## ¿Qué es Flexbox?

Flexbox, o simplemente "flex", es un modelo de diseño en CSS que permite crear layouts flexibles y eficientes. Flexbox facilita la alineación y distribución de elementos dentro de un contenedor, incluso cuando el tamaño de los elementos es desconocido o dinámico.

## Propiedades Principales

### Contenedor Flex

Para utilizar Flexbox, primero debes definir un contenedor flex. Esto se hace estableciendo la propiedad `display` en `flex` o `inline-flex`.

```css
.container {
  display: flex;
}
```

## Propiedades del Contenedor Flex

- **`flex-direction`**: Define la dirección en la que los elementos flexibles se colocan en el contenedor.

  - Valores: `row`, `row-reverse`, `column`, `column-reverse`

- **`justify-content`**: Alinea los elementos flexibles a lo largo del eje principal.

  - Valores: `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`

- **`align-items`**: Alinea los elementos flexibles a lo largo del eje transversal.

  - Valores: `flex-start`, `flex-end`, `center`, `baseline`, `stretch`

- **`flex-wrap`**: Define si los elementos flexibles deben envolverse o no.

  - Valores: `nowrap`, `wrap`, `wrap-reverse`

- **`align-content`**: Alinea las líneas flexibles cuando hay espacio extra en el eje transversal.
  - Valores: `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `stretch`

## Propiedades de los Elementos Flex

- **`order`**: Define el orden de los elementos flexibles.

  - Valor: Número entero (por defecto es 0)

- **`flex-grow`**: Define la capacidad de un elemento para crecer si es necesario.

  - Valor: Número (por defecto es 0)

- **`flex-shrink`**: Define la capacidad de un elemento para encogerse si es necesario.

  - Valor: Número (por defecto es 1)

- **`flex-basis`**: Define el tamaño inicial de un elemento antes de que el espacio disponible se distribuya.

  - Valor: Tamaño (por defecto es `auto`)

- **`align-self`**: Permite la alineación de un elemento individual a lo largo del eje transversal, sobrescribiendo `align-items`.
  - Valores: `auto`, `flex-start`, `flex-end`, `center`, `baseline`, `stretch`
