function main () {
  const hypotenuse = getLengthOfHypotenuse(3, 4)
  console.log(hypotenuse)
}

function getLengthOfHypotenuse (a, b) {
  const squareA = square(a)
  const squareB = square(b)
  const sumOfSquares = squareA + squareB
  return Math.sqrt(sumOfSquares)
}

function square (number) {
  return number * number
}

main()
