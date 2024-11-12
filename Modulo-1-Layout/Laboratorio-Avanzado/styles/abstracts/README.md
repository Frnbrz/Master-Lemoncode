# Organización de la Carpeta `abstracts` en la Arquitectura 7-1

La arquitectura 7-1 es una metodología para organizar proyectos SCSS (Sass) de manera eficiente y escalable. En esta arquitectura, la carpeta `abstracts` juega un papel crucial al contener los elementos más reutilizables y abstractos del proyecto.

## Estructura de la Carpeta `abstracts`

La carpeta `abstracts` generalmente incluye los siguientes tipos de archivos:

1. **\_variables.scss**: Define todas las variables del proyecto, como colores, tipografías, tamaños, etc.
2. **\_functions.scss**: Contiene funciones de Sass que pueden ser utilizadas en cualquier parte del proyecto.
3. **\_mixins.scss**: Incluye mixins que permiten reutilizar bloques de código SCSS.

### Ejemplo de Estructura

```
abstracts/
│
├── _variables.scss
├── _functions.scss
└── _mixins.scss
```

## Uso de los Archivos en `abstracts`

### 1. Variables

El archivo `_variables.scss` se utiliza para definir variables que pueden ser usadas en todo el proyecto. Esto facilita la gestión y el mantenimiento de valores constantes.

```scss
// _variables.scss
$primary-color: #3498db;
$font-stack: 'Helvetica Neue', sans-serif;
```

### 2. Funciones

El archivo `_functions.scss` contiene funciones que realizan cálculos o transformaciones y devuelven un valor. Estas funciones pueden ser utilizadas en cualquier archivo SCSS.

```scss
// _functions.scss
@function calculate-rem($size) {
  $rem-size: $size / 16px;
  @return #{$rem-size}rem;
}
```

### 3. Mixins

El archivo `_mixins.scss` incluye mixins que permiten reutilizar bloques de código SCSS. Los mixins son útiles para aplicar estilos repetitivos de manera consistente.

```scss
// _mixins.scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

## Importación de Archivos

Para utilizar los archivos de la carpeta `abstracts`, es necesario importarlos en el archivo principal de estilos, generalmente `main.scss` o `styles.scss`.

```scss
// main.scss
@import 'abstracts/variables';
@import 'abstracts/functions';
@import 'abstracts/mixins';
```
