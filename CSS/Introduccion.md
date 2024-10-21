# Guía Avanzada de CSS: Selectores y Accesibilidad

## 1. ¿Qué es un Selector en CSS?

Un **selector** en CSS es una regla que define qué elementos HTML serán estilizados. Los selectores permiten dirigirse a uno o varios elementos específicos, y aplicar estilos en función de atributos, estado o su posición en el DOM. Dominar los selectores es crucial para escribir CSS eficiente y mantener un código organizado.

### Tipos Básicos de Selectores:

- **Selector de tipo**: Selecciona todos los elementos del mismo tipo de etiqueta.

  ```css
  p {
    color: blue;
  }
  ```

- **Selector de clase**: Selecciona elementos con una clase específica. Se utiliza con un punto (`.`) seguido del nombre de la clase.

  ```css
  .mi-clase {
    font-size: 16px;
  }
  ```

- **Selector de ID**: Selecciona un elemento único que tiene un ID específico. Se usa `#` seguido del nombre del ID.

  ```css
  #mi-id {
    background-color: yellow;
  }
  ```

- **Selector universal (`*`)**: Selecciona todos los elementos.
  ```css
  * {
    margin: 0;
    padding: 0;
  }
  ```

### Combinaciones de Selectores:

- **Selector descendiente**: Selecciona los elementos que están dentro de otros elementos.

  ```css
  div p {
    color: red;
  }
  ```

- **Selector hijo (`>`)**: Selecciona los elementos que son hijos directos de un contenedor.

  ```css
  ul > li {
    list-style: none;
  }
  ```

- **Selector de hermano adyacente (`+`)**: Selecciona un elemento que es inmediatamente siguiente a otro.

  ```css
  h2 + p {
    margin-top: 0;
  }
  ```

- **Selector de hermano general (`~`)**: Selecciona todos los hermanos que siguen a un elemento.
  ```css
  h2 ~ p {
    color: gray;
  }
  ```

## 2. Selectores Avanzados en CSS

### 2.1. Selectores de Atributos

Estos selectores permiten aplicar estilos en función de los atributos y valores de los elementos HTML.

- `[atributo]`: Selecciona todos los elementos que contienen el atributo especificado.

  ```css
  input[type='text'] {
    border: 1px solid #000;
  }
  ```

- `[atributo="valor"]`: Selecciona los elementos cuyo atributo tiene exactamente el valor especificado.

  ```css
  a[href="https://example.com"]
  {
    color: green;
  }
  ```

- `[atributo^="valor"]`: Selecciona los elementos cuyo atributo empieza con un valor específico.

  ```css
  a[href^='https'] {
    text-decoration: underline;
  }
  ```

- `[atributo$="valor"]`: Selecciona los elementos cuyo atributo termina con el valor dado.

  ```css
  img[src$='.jpg'] {
    border-radius: 5px;
  }
  ```

- `[atributo*="valor"]`: Selecciona los elementos cuyo atributo contiene el valor dado en cualquier parte.
  ```css
  a[href*='login'] {
    color: red;
  }
  ```

### 2.2. Pseudo-clases

Las pseudo-clases permiten seleccionar elementos basados en su estado, posición o interacción con el usuario.

- **`:hover`**: Aplica estilos cuando el usuario pasa el ratón sobre el elemento.

  ```css
  button:hover {
    background-color: blue;
  }
  ```

- **`:focus`**: Aplica estilos cuando un elemento está enfocado, útil en formularios.

  ```css
  input:focus {
    outline: 2px solid blue;
  }
  ```

- **`:nth-child(n)`**: Selecciona el enésimo hijo de su padre, pudiendo especificar un patrón (n puede ser `odd` para los impares o `even` para los pares).

  ```css
  li:nth-child(2) {
    color: red;
  }
  ```

- **`:first-child` y `:last-child`**: Seleccionan el primer o último hijo de un elemento padre.

  ```css
  p:first-child {
    font-weight: bold;
  }
  ```

- **`:not(selector)`**: Excluye elementos que coinciden con el selector.
  ```css
  p:not(.especial) {
    color: gray;
  }
  ```

### 2.3. Pseudo-elementos

Los pseudo-elementos permiten aplicar estilos a partes específicas de un elemento.

- **`::before` y `::after`**: Permiten insertar contenido antes o después del contenido de un elemento.

  ```css
  h1::before {
    content: '★ ';
    color: gold;
  }
  ```

- **`::first-line`**: Aplica estilos solo a la primera línea de un bloque de texto.
  ```css
  p::first-line {
    font-variant: small-caps;
  }
  ```
