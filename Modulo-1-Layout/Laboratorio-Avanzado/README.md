# Laboratorio Avanzado

## Cambios

`styles/pages/_netflix.scss`:

- Se ha añadido en `flex-container` breakpoints para cambiar `flex-wrap` entre `warp` y `nowrap` dependiendo si esta en desktop o tablet
- Añadido `overflow: clip;` en `flex-container` para que no produzcan scroll horizontal

[mas info overflow: clip](https://developer.mozilla.org/es/docs/Web/CSS/overflow)

```css
@include respond-to('small') {
  flex-wrap: wrap;
}

@include respond-to('medium') {
  flex-wrap: wrap;
}

@include respond-to('large') {
  flex-wrap: nowrap;
}
```
