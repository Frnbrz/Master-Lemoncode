// 1. Array operations
// Head
// Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.
const head = ([first, ...rest]) => first // fist es el primer elemento del array, ...rest es el resto de elementos del array

// Tail
// Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.
const tail = ([first, ...rest]) => rest // ...rest es el resto de elementos del array

// Init
// Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.

const init = array => array.slice(0, array.length - 1) // slice(0, array.length - 1) devuelve todos los elementos menos el último

// Last
// Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.

const last = array => array[array.length - 1] // devuelve el último elemento del array
