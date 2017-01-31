const mysteryNumber = Math.floor(Math.random() * 100) + 1

function guessTheNumber () {
  // console.log(mysteryNumber)
  let input = document.getElementById('answer').value
  if((typeof input != Number) && (input.toLowerCase() == 'exit')) {
    window.location="/Users/jhallman5/Desktop/Coding/coding-exercises-week-9/pages/home.html" } //why does this always redirect home?
  else if (input == mysteryNumber)
    alert ("You got the right answer!")
  else if(input > mysteryNumber && input <= 100)
    alert ("Too high! Try something lower.")
  else if(input < mysteryNumber && input >= 1)
    alert ('Too low! Try something higher.')
  else
    alert ("Please enter a number that is 1-100. or type Exit to return home")
}

// //for testing
// module.exports = {
//   guessTheNumber : guessTheNumber
// }
