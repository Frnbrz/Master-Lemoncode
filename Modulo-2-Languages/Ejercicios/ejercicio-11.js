function reverseText (text) {
  let textArray = text.split(" ") // ["Uno", "dos", "tres"]
  let reversedText = textArray.reverse().join(" ")
  return reversedText
}


console.log(reverseText("Uno dos tres")) // "tres dos Uno"