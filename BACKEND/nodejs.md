# Node Js

## ¿Qué es Node.js?

Node.js es un entorno de ejecución para JavaScript de codigo abierto y multiplataforma. Es una herramiente popular para el desarrollo de aplicaciones de red y servidores.

## Ventajas de Node.js

- **Velocidad**: Node.js utiliza el motor V8 de Google Chrome, que es extremadamente
- **Escalabilidad**: Node.js es muy escalable, ya que es capaz de manejar una gran cantidad de conexiones simultáneas.
- **Comunidad**: Node.js tiene una gran comunidad de desarrolladores que contribuyen a su crecimiento y mejora.
- **Facilidad de uso**: Node.js es fácil de aprender y usar, ya que utiliza JavaScript, un lenguaje de programación muy popular.
- **Modularidad**: Node.js es muy modular, lo que significa que puedes reutilizar código y crear aplicaciones más rápidamente.


## ¿Cómo instalar Node.js?

Para instalar Node.js, puedes descargar el instalador desde el sitio web oficial de Node.js y seguir las instrucciones de instalación. También puedes instalar Node.js utilizando un administrador de paquetes como npm o yarn.

```bash
$ sudo apt-get install nodejs
```


## Framework Express

Express es un framework de Node.js que te permite crear aplicaciones web y APIs de forma rápida y sencilla. Express proporciona una serie de funciones y utilidades que te permiten crear aplicaciones web de forma más eficiente.


### Ventajas de Express

- **Simplicidad**: Express es muy fácil de aprender y usar, ya que proporciona una serie de funciones y utilidades que te permiten crear aplicaciones web de forma rápida y sencilla.
- **Flexibilidad**: Express es muy flexible, lo que significa que puedes crear aplicaciones web de cualquier tipo y tamaño.
- **Escalabilidad**: Express es muy escalable, ya que es capaz de manejar una gran cantidad de conexiones simultáneas.


### Desventajas de Express

### Routing

El enrutamiento en Express es la forma en que tu aplicación responde a las solicitudes HTTP. Puedes definir rutas para diferentes URL y métodos HTTP, y Express se encargará de enrutar las solicitudes a la función correspondiente.

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

