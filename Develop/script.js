// Assignment Code
var generateBtn = document.querySelector('#generate');


// Write password to the #password input
function writePassword() {
  var passLength = window.prompt('Please select the length of your passcode.')
  if(passLength < 8 || passLength > 128){
    alert("Password length must be between 8 and 128 characters");
  end()

}
  var passUp = window.confirm('Do you want uppercase letters?')
  var passLow = window.confirm('Do you want lowercase letters?')
  var passNum = window.confirm('Do you want numbers?')
  var passSpec = window.confirm('Do you want special characters?')
  

  
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  allUpperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  allLowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  allSpec = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '"', '+', ',', '-', '.', '/', ':', ';', '<', '>', '=', '?','[', ']', '{', '}', '~', '`', '|', '_']
  allCanids= [allUpperCase,allLowerCase,allNumbers,allSpec]
  passwordText.value = password;


  


}


// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
