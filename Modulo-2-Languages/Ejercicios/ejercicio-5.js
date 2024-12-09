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
