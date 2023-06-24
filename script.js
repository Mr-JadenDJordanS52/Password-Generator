// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page 


// Assignment Code
var generateBtn = document.querySelector("#generate");

// First, set the alphanumeric + special characters used in the password as global variables to be used throughout the entire code.
var lowercasealphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercasealphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialcharacters = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", ",", ".", "?", "/", "|", "'", ";", ":"];


// Then, set up the computer prompts to help the user generate a password meeting the requirements.
alert("Hello there! I will help you generate a unique alphanumeric + special character password! :]");
alert("Your password must be between 8 and 128 characters and include 1 out of the 4 type of characters: lowercase letters, uppercase letters, numbers, and special characters.");
alert("Let's get your password!");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

prompt("For starters, how many characters do you want your password to have? Please select a number between 8 - 128.");
}
var passwordrequirement = prompt("For starters, how many characters do you want your password to have? Please select a number between 8 - 128.");
if (passwordrequirement) {passwordrequirement < 8|| passwordrequirement > 128
    alert("I'm sorry. Your password MUST be between 8 and 128 characters!");
}

if (!passwordrequirement) {
  alert("I'm sorry. You must enter a value to proceed!")
}
// else (passwordrequirement) {passwordrequirement > 8 && passwordrequirement < 128} 
 // alert("Okay! Your password will include " + passwordrequirement + " as the number of characters!");

var includeslowercase = confirm("Would you like to include lowercase letters as characters?");
if (includeslowercase) {
  alert("Okay! Your password will include lowercase letters as characters!");
}

else {
  alert("Okay! Your password will NOT include lowercase letters as characters!");
}

var includesUppercase = confirm("Would you like to include Uppercase letters as characters?");
if (includesUppercase) {
  alert("Okay! Your password will include Uppercase letters as characters!");
}

else {
  alert("Okay! Your password will NOT include Uppercase letters as characters!");
}

var includesnumbers = confirm("Would you like to include numbers as characters?");
if (includesnumbers) {
  alert("Okay! Your password will include numbers as characters!");
}

else {
  alert("Okay! Your password will NOT include numbers as characters!");
}

var includesspecial = confirm("Would you like to include special characters as characters?");
if (includesspecial) {
  alert("Okay! Your password will include special characters as characters!");
}

else {
  alert("Okay! Your password will NOT include special characters as characters!");
}

if (!includeslowercase && !includesUppercase && !includesnumbers && !includesspecial) {
    alert("Sorry you MUST select at least one character to use for your password!");
}
else if (includeslowercase && includesUppercase && includesnumbers && includesspecial) {
  var = includes4charactertypes
  includes4charactertypes = includeslowercase.concat(includesUppercase, includesnumbers, includesspecial);
}
else if (includeslowercase && includesUppercase && includesnumbers) {
  var = includes3charactertypes
  includes3charactertypes = includeslowercase.concat(includesUppercase, includesnumbers);
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
