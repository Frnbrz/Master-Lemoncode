// 1. Array operations
// Head
// Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.

// Destrucción de arrays, como argumento de una función se puede desestructurar un array
const head = ([first, ...rest]) => first // fist es el primer elemento del array, ...rest es el resto de elementos del array

// Tail
// Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.

// Rest operator, como argumento de una función se puede obtener el resto de elementos de un array
const tail = ([first, ...rest]) => rest // ...rest es el resto de elementos del array

// Init
// Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.

// Slice, devuelve una copia de una parte de un array dentro de un nuevo array
const init = (array) => array.slice(0, array.length - 1) // slice(0, array.length - 1) devuelve todos los elementos menos el último

// Last
// Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.

// Acceso a elementos de un array,
const last = (array) => array[array.length - 1] // devuelve el último elemento del array

// Slice devuelve una copia de una parte de un array dentro de un nuevo array
const last2 = (array) => array.slice(-1)[0] // devuelve el último elemento del array

// Pop elimina el último elemento de un array y devuelve ese elemento
const last3 = (array) => array.pop()

// Reduce, reduce un array a un solo valor
const last4 = (array) => array.reduce((_, last) => last)

// Spread operator, devuelve una copia de un array
const last5 = (array) => [...array].pop() // devuelve el último elemento del array

// Reverse invierte un array
const last6 = (array) => array.reverse()[0] // devuelve el último elemento del array

// Nuevo metodo de array at(), devuelve el elemento en la posición indicada con indice negativo se empieza a contar desde el final por ej -3 es el tercer elemento desde el final
const last7 = (array) => array.at(-1) // devuelve el último elemento del array
