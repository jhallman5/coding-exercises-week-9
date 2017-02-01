function convertFib() {
  let number = document.getElementById('number')
  let result = []
  let fibSeq = []

// make the fibbonacci sequesne
  function incrementFibLength() {
    if(fibSeq = [])  { fibSeq =[1] return;}
    if(fibSeq = [1]) { fibSeq = [1,1] return;}
    fibSeq.push(fibSeq[fibSeq.length] + fibSeq[fibSeq.length - 1])
  }

//calculate fibSeq value
function fibValue(){
  let value = 0
  for(let i = 0; i < fibSeq.legnth; i ++) {
    value += ( result[i] * fibSeq[i] )
  }
  return value
}

//switch fib values
function flipTheBits(value){
  if(value === 1){ return 0}
  if(value === 0){return 1}
}

// main
function flippingValues() {
  while(fibValue < number) {
    let count = 0
    if((count + 1) > fibSeq.length) {incrementFibLength()}
    fibSeq[count].flipTheBits()
    count++
    for(let i = 0; i < count; i++) {
      fibSeq[i] = 0
    }
  }
}


  // fib 1 => 1

  //fib 2 => 11

  // 3 => 101

  //fib 4 => 211



}
