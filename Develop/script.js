// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = "";
allUpperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
allLowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
allSpec = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  '"',
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  ">",
  "=",
  "?",
  "[",
  "]",
  "{",
  "}",
  "~",
  "`",
  "|",
  "_",
];
allCanids = [];

// Write password to the #password input
function writePassword() {
  var passLength = window.prompt(
    "Please select the length of your passcode (Must be between 8 to 128 characters long.)."
  );
  if (passLength < 8 || passLength > 128) {
    alert("Password length must be between 8 and 128 characters");
    end();
  }
  var passUp = window.confirm("Do you want uppercase letters?");
  if (passUp) {
    allCanids = allCanids.concat(allUpperCase);
    var index = Math.floor(Math.random() * allUpperCase.length);
    var nextChar = allCanids[index];
    password += nextChar;
  }
  var passLow = window.confirm("Do you want lowercase letters?");
  if (passLow) {
    allCanids = allCanids.concat(allLowerCase);
    index = Math.floor(Math.random() * allLowerCase.length);
    nextChar = allCanids[index];
    password += nextChar;
  }
  var passNum = window.confirm("Do you want numbers?");
  if (passNum) {
    allCanids = allCanids.concat(allNumbers);
    index = Math.floor(Math.random() * allNumbers.length);
    nextChar = allCanids[index];
    password += nextChar;
  }
  var passSpec = window.confirm("Do you want special characters?");
  if (passSpec) {
    allCanids = allCanids.concat(allSpec);
    index = Math.floor(Math.random() * allSpec.length);
    nextChar = allCanids[index];
    password += nextChar;
  }
  if (!passUp && !passLow && !passNum && !passSpec) {
    window.alert("At least one character type must be included!");
    return;
  }

  for (i = 0; i < passLength; i++) {
    index = Math.floor(Math.random() * allCanids.length);
    nextChar = allCanids[index];
    password += nextChar;

    index = Math.floor(Math.random() * allCanids.length);
    nextChar = allCanids[index];
    password += nextChar;
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
