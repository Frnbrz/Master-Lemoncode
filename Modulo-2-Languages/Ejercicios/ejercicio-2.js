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
