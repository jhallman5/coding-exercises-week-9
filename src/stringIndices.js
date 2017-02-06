function getIndex() {
  let phrase          = document.getElementById('phrase').value
  let indexNum        = document.getElementById('indexNum').value

  phrase = phrase.split(' ')

  if(( indexNum <= 0 )|| ( indexNum > phrase.length )){
    alert("Seriously dude play the game right")
    return
  }
  alert(phrase[indexNum - 1])
}
