# Guía de Sass

## Introducción
Sass (Syntactically Awesome Style Sheets) es un lenguaje de scripts de preprocesador que se interpreta o compila en CSS. SassScript es el propio lenguaje de scripts. Sass hace que CSS sea más potente con características como variables, reglas anidadas y mixins.

## Instalación
Para usar Sass, necesitas instalarlo en tu sistema. Puedes instalar Sass usando npm (Node Package Manager) o descargando el paquete independiente.

### Usando npm
1. Asegúrate de tener Node.js instalado.
2. Abre tu terminal o símbolo del sistema.
3. Ejecuta el siguiente comando para instalar Sass globalmente:
    ```sh
    npm install -g sass
    ```

### Paquete Independiente
1. Descarga el paquete independiente desde el [sitio web de Sass](https://sass-lang.com/install).
2. Sigue las instrucciones de instalación para tu sistema operativo.

## Uso Básico
Una vez que Sass esté instalado, puedes comenzar a usarlo en tus proyectos. Los archivos Sass tienen la extensión `.scss` o `.sass`.

### Ejemplo
Crea un archivo llamado `styles.scss` con el siguiente contenido:
```scss
$primary-color: #333;

body {
  font-family: Arial, sans-serif;
  color: $primary-color;
}

nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { 
    display: inline-block; 
    margin-right: 10px;
  }

  a {
    text-decoration: none;
    color: $primary-color;

    &:hover {
      color: lighten($primary-color, 20%);
    }
  }
}
```

Para compilar el archivo `styles.scss` a CSS, ejecuta el siguiente comando en tu terminal:
```sh
sass styles.scss styles.css
```

Esto generará un archivo `styles.css` con el CSS compilado.

## Características Avanzadas

### Mixins
Los mixins te permiten crear bloques de código reutilizables. Puedes definir un mixin usando la directiva `@mixin` e incluirlo en tus estilos usando la directiva `@include`.

#### Ejemplo
```scss
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}

.box { 
  @include border-radius(10px); 
}
```

### Herencia
La herencia te permite compartir un conjunto de propiedades CSS de un selector a otro usando la directiva `@extend`.

#### Ejemplo
```scss
.message {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  @extend .message;
  border-color: green;
}

.error {
  @extend .message;
  border-color: red;
}

.warning {
  @extend .message;
  border-color: yellow;
}
```

### Funciones
Sass te permite definir tus propias funciones usando la directiva `@function`. Las funciones pueden devolver valores que pueden ser usados en tus estilos.

#### Ejemplo
```scss
@function calculate-rem($size, $base: 16px) {
  @return $size / $base * 1rem;
}

body {
  font-size: calculate-rem(18px);
}
```

### Partials e Importar
Los partials permiten dividir tu CSS en archivos más pequeños y reutilizables. Puedes crear un partial prefixando el nombre del archivo con un guión bajo (`_`). Luego puedes importar estos partials en tu hoja de estilos principal usando la directiva `@import`.

#### Ejemplo
```scss
// _variables.scss
$primary-color: #333;

// _mixins.scss
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}

// styles.scss
@import 'variables';
@import 'mixins';

body {
  color: $primary-color;
  @include border-radius(10px);
}
```

## Conclusión
Sass es una herramienta poderosa que puede ayudarte a escribir CSS más mantenible y escalable. Al usar características como variables, reglas anidadas, mixins, herencia y funciones, puedes mantener tus hojas de estilo organizadas y reducir la repetición.

