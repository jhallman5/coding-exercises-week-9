function getIndex() {
  let phrase          = document.getElementById('phrase').value
  let indexNum        = document.getElementById('indexNum').value
  let currentWord     = 1
  let nextWord        = phrase.indexOf(' ')
  let currentPosition = 0
  let totalWords      = 0

  if(indexNum <= 0 ){
    alert("Seriously dude play the game right")
    return
  }
//
// // still need to work on counting words to solve for numbers > max words
// if(indexNum > totalWords ){
//   alert("Not enough words!")
//   return
// }

// regular logic works
  while(currentWord != indexNum) {
    currentPosition = phrase.indexOf(' ', currentPosition + 1)
    nextWord        = phrase.indexOf(' ', currentPosition + 1)
    currentWord++
  }
  if(nextWord === -1) nextWord = phrase.length
  alert(phrase.slice(currentPosition, nextWord))

}
