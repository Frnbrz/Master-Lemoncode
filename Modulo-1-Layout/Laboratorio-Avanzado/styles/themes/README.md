# Themes Folder

La carpeta `themes` contiene archivos SCSS que definen diferentes temas para la aplicación. Cada tema está representado por un archivo SCSS separado, que incluye variables y estilos específicos para ese tema. Esto permite cambiar fácilmente entre temas simplemente incluyendo el archivo de tema deseado en la hoja de estilos principal.

### Estructura de Ejemplo

```plaintext
themes/
├── _dark.scss
├── _light.scss
└── _variables.scss
```

- `_dark.scss`: Define los estilos y variables para el tema oscuro.
- `_light.scss`: Define los estilos y variables para el tema claro.
- `_variables.scss`: Contiene variables comunes que pueden ser utilizadas por diferentes temas.

### Uso

Para utilizar un tema específico, simplemente importa el archivo SCSS correspondiente en tu hoja de estilos principal:

```scss
@import 'themes/dark';
```

Esto aplicará los estilos del tema oscuro a tu aplicación.

### Beneficios

- **Modularidad**: Los temas están separados en archivos individuales, lo que facilita su mantenimiento y actualización.
- **Flexibilidad**: Puedes agregar o eliminar temas sin afectar otros archivos de estilos.
- **Reutilización**: Las variables comunes pueden ser compartidas entre diferentes temas, promoviendo la consistencia en el diseño.
