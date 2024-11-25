function subsets (word) {
  let result = []
  for (let i = 0; i < word.length; i++) {
    result.push(word.slice(i + 1))
  }
  return result
}

// Ejemplo
console.log(subsets("message")) // ["essage", "ssage", "sage", "age", "ge", "e"]