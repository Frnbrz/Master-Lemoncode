# Vendors folder

Carpeta vendors/ que contiene todos los archivos CSS de bibliotecas y frameworks externos - Normalize, Bootstrap, jQueryUI, FancyCarouselSliderjQueryPowered, y así sucesivamente. Ponerlos a un lado en la misma carpeta es una buena manera de decir «Hey, esto no es mío, no es mi código, no es mi responsabilidad».

- \_normalize.scss
- \_bootstrap.scss
- \_jquery-ui.scss
- \_select2.scss

Si tienes que sobrescribir una sección de cualquier vendor, te recomiendo que tengas una 8ª carpeta llamada vendors-extensions/ en la que puedas tener archivos con el nombre exacto de los vendors que sobrescriben.

Por ejemplo, vendors-extensions/\_bootstrap.scss es un archivo que contiene todas las reglas CSS destinadas a redeclarar algunas de las CSS por defecto de Bootstrap. Esto es para evitar la edición de los propios archivos de proveedores, que generalmente no es una buena idea.
