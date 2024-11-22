const isPrime = (number) => {
  if (number < 2) return false
  for (let i = 2, sqrt = Math.sqrt(number); i <= sqrt; i++) {
    if (number % i === 0) return false
  }
  return true
}

const showPrimes = (from, to) => {
  for (let i = from; i <= to; i++) {
    console.log(`${i} ${isPrime(i) ? 'es primo!' : 'no es primo!'}`)
  }
}

showPrimes(1, 10) // 2, 3, 5, 7