const mysteryNumber = Math.floor(Math.random() * 100) + 1

function guessTheNumber () {
  let input = document.getElementById('answer').value
  if((typeof input != Number) && (input.toLowerCase() == 'exit')) {
    window.location="/Users/jhallman5/Desktop/Coding/coding-exercises-week-9/pages/home.html" } //why does this always redirect home?
  if (input == mysteryNumber)
    alert ("You got the right answer!")
  if(input > mysteryNumber && input <= 100)
    alert ("Too high! Try something lower.")
  if(input < mysteryNumber && input >= 1)
    alert ('Too low! Try something higher.')
  else if(input < 1 || input > 100 || ((typeof input != Number) && input.toLowerCase() != 'exit'))
    alert ("Please enter a number that is 1-100. or type Exit to return home")
}

//for testing
module.exports = {
  guessTheNumber : guessTheNumber
}
