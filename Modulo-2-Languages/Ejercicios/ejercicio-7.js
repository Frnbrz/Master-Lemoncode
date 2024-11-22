//  Apartado A

function f () {
  console.log(a)
  console.log(g())

  var a = "good job!"
  function g () {
    return a
  }
  console.log(a)
}

f()

//  Apartado B

var a = 1;

(function () {
  console.log(a)
  var a = 2
  b = 4
  var c = 3
})()

console.log(a)
console.log(b)
console.log(c)