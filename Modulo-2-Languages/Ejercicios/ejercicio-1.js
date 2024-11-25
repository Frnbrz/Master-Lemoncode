function biggestWord (phrase) {

  let spliedPhrase = phrase.split(' ')

  let sortedPhrase = spliedPhrase.sort(function (a, b) {
    return b.length - a.length
  })

  return sortedPhrase[0]
}

console.log(biggestWord("Esta frase puede contener muchas palabras"))

console.log(biggestWord("Ejercicios básicos de JavaScript")) 