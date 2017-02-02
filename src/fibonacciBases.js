function convertToFib() {
  let number = document.getElementById('number').value
  let result = []
  let fibSeq = []

//calculate fibSeq value
  function fibValue(resultArr){
    let value = 0
    for(let i = 0; i < fibSeq.length; i++) {
      value += ( resultArr[i] * fibSeq[i] )
    } return value
  }

//increment fib array
  function incrementFibLength() {
    fibSeq.length > 1
      ? fibSeq.push(fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2])
      : fibSeq.push(1)
  }

//determine fib length
  function fibLength(number) {
    while(fibValue(result) < number) {
      incrementFibLength()
      result.push(1)
    }
  }

//Finalizing results
  function final() {
    let remainder = number
    for(let i = 0; i < fibSeq.length; i++) {
      if( (fibSeq[i] <= remainder) && (remainder !== 0 )) {
        result.push(1)
        remainder -= fibSeq[i]
      }else {
        result.push(0)}
    }
  }

  // determining necessary fib length
  fibLength(number)
  //reseting results and reversing fib array direction
  result = []
  fibSeq = fibSeq.reverse();
  final()
  alert(result)
}
