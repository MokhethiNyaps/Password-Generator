// All characters we can randomly choose from
const characters = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
  "U","V","W","X","Y","Z",
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
  "u","v","w","x","y","z",
  "0","1","2","3","4","5","6","7","8","9",
  "~","`","!","@","#","$","%","^","&","*","(",")",
  "_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
]

// Grabbing display elements and button from the DOM
let display1 = document.getElementById("display1")
let display2 = document.getElementById("display2")
let button = document.querySelector(".btn")

// Function to generate a random string of 15 characters
function generateRandomString() {
  let result = []

  // Repeat 15 times
  for (let i = 0; i < 15; i++) {
    // Pick a random index from the characters array
    let randomIndex = Math.floor(Math.random() * characters.length)
    // Add that random character to our result
    result.push(characters[randomIndex])
  }

  // Join all characters into a single string and return it
  return result.join("")
}

// When the button is clicked
button.addEventListener("click", () => {
  // Generate two random strings
  display1.textContent = generateRandomString()
  display2.textContent = generateRandomString()
})
