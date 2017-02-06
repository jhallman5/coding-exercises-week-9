function convertToFib() {
  let number = document.getElementById('number').value
  let result = []
  let fibonacci = []

//calculate fibonacci value
  function fibonacciValue(resultArr) {
    let value = 0
    for(let i = 0; i < fibonacci.length; i++) {
      value += ( resultArr[i] * fibonacci[i] )
    } return value
  }
  // why doesnt this work?
// const fibonacciValue = resultArr => {
//    [0,1,2,3,4,5].reduce(total, currentValue, currentIndex) => total + current * fibonacci[currentIndex] }


  // const fibonacciValue = resultArray => {
  //   // The "introductory paragraph", where you handle any set up for the function
  //   let value = 0
  //
  //   // Whitespace, followed by the "body" - in an essay, we would have self contained paragraphs,
  //   // where the paragraph centered around a single point or theme.  In code, we should do the same,
  //   // and each "paragraph" should be separated by whitespace.
  //   for( let index = 0; index < calculatedSequence.length; index++ ) {
  //     value += resultArray[ index ] * calculatedSequence[ index ]
  //   }
  //
  //   // Finally, our essay's conclusion, typically just the return statement in code
  //   // Separated from the previous "paragraph" by whitespace
  //   return value
  // }
//increment fib array
  function incrementFibLength() {
    fibonacci.length > 1
      ? fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2])
      : fibonacci.push(1)
  }

//determine fib length
  function fibLength(number) {
    while(fibonacciValue(result) < number) {
      incrementFibLength()
      result.push(1)
    }
  }

//Finalizing results
  function final() {
    let remainder = number
    for(let i = 0; i < fibonacci.length; i++) {
      if( (fibonacci[i] <= remainder) && (remainder !== 0 )) {
        result.push(1)
        remainder -= fibonacci[i]
      }else {
        result.push(0) }
    }}

  // determining necessary fib length  result[ index ]
  fibLength(number)
  //reseting results and reversing fib array direction
  result = []
  fibonacci = fibonacci.reverse();

  final()
  alert(result)
}

function convertToDeci() {
  let number = document.getElementById('FibNumber').value.split('')
  let result = 0
  let fibonacci = []

//determine fibonacci Sequence
  function incrementFibLength() {
    while (fibonacci.length < number.length)
    fibonacci.length > 1
      ? fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2])
      : fibonacci.push(1)
  }

  incrementFibLength()
  fibonacci.reverse()

  for(let i = 0; i < fibonacci.length; i++) {
    result += (fibonacci[i] * number[i])
  }
  alert(result)
}
