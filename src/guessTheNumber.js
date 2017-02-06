let mysteryNumber;
let docInput;

function setNumber() {
  docInput =  document.getElementById('answer').value
  if(!mysteryNumber)
    mysteryNumber = (Math.floor(Math.random() * 100) + 1).toString()
}
function combined() {
  setNumber()
  guessTheNumber(docInput, mysteryNumber)
}

function guessTheNumber(docInput, mysteryNumber) {
  console.log('mystery number ' + mysteryNumber)
  let input = docInput

  // let input = document.getElementById('answer').value
  if((typeof docInput != Number) && (docInput.toLowerCase() == 'exit')) {
    window.location="/Users/jhallman5/Desktop/Coding/coding-exercises-week-9/pages/home.html" } //why does this always redirect home?
  else if (docInput == mysteryNumber)
    window.alert ("You got the right answer!")
    return 1
  else if(docInput > mysteryNumber && docInput <= 100)
    return window.alert("Too high! Try something lower.")
  else if(docInput < mysteryNumber && docInput >= 1)
  return window.alert("Too low! Try something higher.")
  else
    return window.alert ("Please enter a number that is 1-100. or type Exit to return home")
}

// //for testing
// module.exports = {guessTheNumber}
