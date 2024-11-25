// Ejercicio 01

function biggestWord (phrase) {

  let spliedPhrase = phrase.split(' ')

  let sortedPhrase = spliedPhrase.sort(function (a, b) {
    return b.length - a.length
  })

  return sortedPhrase[0]
}

console.log('******* EJERCICIO 1 **********')
console.log(biggestWord("Esta frase puede contener muchas palabras")) // "contener"
console.log(biggestWord("Ejercicios básicos de JavaScript")) // "Ejercicios"

// Ejercicio 2

function printAverage (classResults) {
  const notaAlumnos = calculateMedia(classResults)

  return mediaNumberToString(notaAlumnos)
}

function calculateMedia (notasAlumnos) {

  let eso2oParsedToArray = Object.entries(notasAlumnos)
  let totalNota = 0
  eso2oParsedToArray.forEach(([nombreAlumno, notaAlumno]) => {
    totalNota = totalNota + notaAlumno
  })

  return totalNota / eso2oParsedToArray.length

}

function mediaNumberToString (notaMedia) {
  if (notaMedia === 10) return 'Matrícula de Honor'

  if (notaMedia >= 9) return 'Sobresaliente'

  if (notaMedia >= 7) return 'Notable'

  if (notaMedia >= 6) return 'Bien'

  if (notaMedia >= 5) return 'Suficiente'

  if (notaMedia >= 4) return 'Insuficiente'

  return 'Muy deficiente'

}

console.log('******* EJERCICIO 2 **********')

console.log('Clase 1: ' + printAverage({
  David: 8.25,
  Maria: 9.5,
  Jose: 6.75,
  Juan: 5.5,
  Blanca: 7.75,
  Carmen: 8,
}
))

console.log('Clase 2: ' + printAverage({
  David: 10,
  Maria: 10,
  Jose: 10,
  Juan: 10,
  Blanca: 10,
  Carmen: 10
}))

console.log('Clase 3: ' + printAverage({
  David: 0,
  Maria: 0,
  Jose: 0,
  Juan: 0,
  Blanca: 0,
  Carmen: 0
}))


// Ejercicio 3

function f (input) {
  if (input === undefined) return result = "Unknown"
  if (input === null) return result = ""
  return input
}

console.log('******* EJERCICIO 3 **********')

console.log(f(undefined))

// Ejercicio 4

function clone (source) {
  return { ...source }
}

function merge (source, target) {
  return { ...source, ...target }
}

console.log('******* EJERCICIO 4 **********')

let a = { name: "Maria", surname: "Ibañez", country: "SPA" }
let b = { name: "Luisa", age: 31, married: true }

console.log(merge(a, b))

// Ejercicio 5



function isEqual (a, b) {
  let itsEqual = false
  for (i = 0; i <= Object.entries(a).length; i++) {
    Object.entries(a)[i] === Object.entries(b)[i] ? itsEqual = true : itsEqual = false
  }

  return itsEqual
}

console.log('******* EJERCICIO 5 **********')

// let user = { name: "María", age: 30 }
// let clonedUser = { name: "María", age: 30 }

// console.log(isEqual(user, clonedUser))

let user = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
}
let clonedUser = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
}


function isDeepEqual (a, b) {
  let itsEqual = false
  for (i = 0; i <= Object.entries(a).length; i++) {
    Object.entries(a)[i] === Object.entries(b)[i] ? itsEqual = true : itsEqual = false
  }
  return itsEqual
}

console.log(isDeepEqual(user, clonedUser))


// Ejercicio 6

function dice () {

  return

}

console.log('******* EJERCICIO 6 **********')


function throwDice () {
  let diceNumber = 0

  return diceNumber + Math.random() * 10
}

console.log("dado uno: " + throwDice())
console.log("dado dos: " + throwDice())
