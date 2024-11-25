function zipObject (keys, values) {
  // console.log(keys)
  // console.log(values)

  // let zipObjectResult = {}

  // for (i = 0; i >= keys.lenght; i++) {
  //   zipObjectResult = {
  //     [keys[i]]: values[i]
  //   }

  //   console.log(zipObjectResult)
  // }

  // return zipObjectResult

  return keys.reduce((acc, key, index) => {
    console.log({ acc, key, index })
    acc[key] = values[index]

    console.log(acc[key] + " = " + values[index])
    return acc
  }, {})
}

// Ejemplo
console.log(zipObject(["spanish", "english", "french"], ["hola", "hi", "salut"])) // {spanish: "hola", english: "hi", french: "salut"} 