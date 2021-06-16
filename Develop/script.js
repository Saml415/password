// Assignment Code
var generateBtn = document.querySelector('#generate');


// Write password to the #password input
function writePassword() {
  var passLength = window.prompt('Please select the length of your passcode.')
  var passUp = window.confirm('Do you want uppercase letters?')
  var passLow = window.confirm('Do you want lowercase letters?')
  var passNum = window.confirm('Do you want numbers?')
  var passSpec = window.confirm('Do you want special characters?')
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
