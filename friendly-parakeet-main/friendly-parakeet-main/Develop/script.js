// Assignment code here//

// Acceptable password criteria
var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
var lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
var symbols = "!@#$%^&*";
var numbers = 1234567890
var lengthMin = 8
var lengthMax = 128


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
