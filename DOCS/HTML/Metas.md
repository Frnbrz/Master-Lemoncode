# Página web: Metas

## Meta para definir acentos

Para que una página funcione en todos los navegadores y sistemas operativos, es importante definir la codificación de caracteres.

```html
<meta charset="utf-8 " />
```

## Meta título

```html
<title>Mi Página Web</title>
```

## Meta viewport

Para que la página sea responsiva y se vea bien en todos los dispositivos.

```html
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
/>
```

## Meta favicon

Para definir el favicon que se muestra en la pestaña del navegador y en los marcadores.

```html
<link rel="icon" href="favicon.ico" type="image/x-icon" />

<link rel="apple-touch-icon" href="apple-touch-icon.png" type="image/png" />

<link
  rel="apple-touch-icon"
  sizes="180x180"
  href="/static/img/apple-touch-icon/touch-icon-iphone-retina.png"
/>
```

## Meta theme-color

Para definir el color del tema del navegador en dispositivos móviles.

```html
<meta name="theme-color" content="#3c790a" />

<meta
  name="theme-color"
  content="#ecd96f"
  media="(prefers-color-scheme: light)"
/>

<meta
  name="theme-color"
  content="#0b3e05"
  media="(prefers-color-scheme: dark)"
/>
```

## Meta Open Graph

Para mejorar la apariencia de los enlaces cuando se comparten en redes sociales.

```html
<meta property="og:image" content="img/imagen.png" />

<meta property="og:title" content="Título de la Página" />

<meta property="og:type" content="Tipo de pagina" />

<meta property="og:description" content="Descripción de la Página" />

<meta property="og:url" content="URL de la Página alternativa" />
```
