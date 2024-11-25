function includes (array, value) {
  // for (let i = 0; i < array.length; i++) {
  //   if (array[i] === value) {
  //     return true
  //   }
  // }
  // return false
  return array.some(element => element === value)
}


console.log(includes([1, 2, 3], 3)) // true
console.log(includes([1, 2, 3], 0)) // false