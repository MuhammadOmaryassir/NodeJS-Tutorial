let one = function () {
  setTimeout(() => {
    console.log('one')
  }, 200)
}
let two = function () {
  setTimeout(() => {
    console.log('two')
  }, 0)
}

let three = function () {
  console.log('three')
}

one()
two()
three()
