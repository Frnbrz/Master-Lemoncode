
# Routes Folder

Esta carpeta contiene la configuración de rutas para la aplicación utilizando `useRoutes` de `react-router-dom`.

## Structure

- `public-routes.js`: Define las rutas que son accesibles sin autenticación.
- `private-routes.js`: Define las rutas que requieren autenticación.
- `router.guard.js`: Un componente que actúa como guardia para las rutas privadas.

## Usage

### Public Routes

Rutas públicas se definen en `public-routes.js`. Estas rutas no requieren que el usuario esté autenticado.

### Private Routes

Rutas pirvadas se definen en `private-routes.js`. Estas rutas requieren que el usuario esté autenticado. El componente `router.guard` se utiliza para proteger estas rutas.


### Guard Component

El componente `router.guard` verifica si el usuario está autenticado utilizando useContenxt y redirige a la página de inicio de sesión si no lo está.
