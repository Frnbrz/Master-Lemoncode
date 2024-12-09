// 2. Concat
// Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.

// const concat = (a, b) => // Implementation here.

const concat = (a, b) => [...a, ...b] // Devuelve la concatenación de ambos arrays

// Otra forma de hacerlo utilizando rest operator
const concat2 = (...arrays) => arrays.reduce((acc, array) => [...acc, ...array])

// Otra forma de hacerlo utilizando rest operator
const concat3 = (...arrays) => [].concat(...arrays)

// Ejemplo de uso:
const a = [1, 2, 3, 4]
const b = ['a', 'b', 'c', 'd']

console.log(concat(a, b)) // [1, 2, 3, 4, "a", "b", "c", "d"]

console.log(concat2(a, b)) // [1, 2, 3, 4, "a", "b", "c", "d"]

console.log(concat3(a, b)) // [1, 2, 3, 4, "a", "b", "c", "d"]
