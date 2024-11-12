# Organización de la carpeta `pages` en SCSS dentro de la arquitectura 7-1

La arquitectura 7-1 es una metodología para organizar archivos SCSS en proyectos grandes. Consiste en dividir los estilos en 7 carpetas principales y un archivo SCSS principal. A continuación, se describe cómo se organiza la carpeta `pages` dentro de esta arquitectura.

## Estructura de la carpeta `pages`

La carpeta `pages` contiene los estilos específicos para cada página del sitio web. Cada archivo SCSS dentro de esta carpeta corresponde a una página específica y contiene los estilos únicos para esa página.

```
styles/
├── pages/
│   ├── _home.scss
│   ├── _about.scss
│   ├── _contact.scss
│   └── _services.scss
```

### Descripción de los archivos

- `_home.scss`: Contiene los estilos específicos para la página de inicio.
- `_about.scss`: Contiene los estilos específicos para la página "Acerca de".
- `_contact.scss`: Contiene los estilos específicos para la página de contacto.
- `_services.scss`: Contiene los estilos específicos para la página de servicios.

## Beneficios de esta organización

- **Modularidad**: Facilita la localización y el mantenimiento de los estilos específicos de cada página.
- **Escalabilidad**: Permite agregar nuevas páginas y sus estilos correspondientes sin afectar la estructura existente.
- **Claridad**: Mejora la legibilidad del código al separar los estilos por página.

Siguiendo esta estructura, se asegura que los estilos estén bien organizados y sean fáciles de mantener a medida que el proyecto crece.
