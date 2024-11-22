function clone (source) {
  return { ...source }
}

function merge (source, target) {
  return { ...source, ...target }
}

console.log('******* EJERCICIO 4 **********')

let a = { name: "Maria", surname: "Ibañez", country: "SPA" }
let b = { name: "Luisa", age: 31, married: true }
