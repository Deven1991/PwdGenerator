// Assignment Code


// Determine Password Generator Criteria
var generateBtn = document.querySelector("#generate");
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz"
var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numberCharacters = "0123456789"
var specialCharacters = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var passwordlength;
var lowercasecheck;
var uppercasecheck;
var numbercheck;
var specialcheck;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// User choose number of characters in password (between 8-128 characters)
function isproperlength() {
  passwordlength = prompt("How many characters do you want your password to be? Must be between 8-128 characters:)");

  if (passwordlength < 8) {
    window.alert("Password must be between 8-128 characters");
    isproperlength();
  }
  else if (passwordlength > 128) {
    window.alert("Password must be bewteen 8-128 characters");
    isproperlength()
  }
}

// User opts for lowercase
function islowercase() {
  lowercasecheck = prompt("Do you want lowercase letters in your password? Type Yes or No)");

  if (lowercasecheck === "yes")
    return lowercasecheck;

}
  else if (lowercasecheck === "no")
  return lowercasecheck;
  }

// User opts for uppercase
function isuppercase() {
  uppercasecheck = prompt("Do you want uppercase letters in your password? Type Yes or No)");

  if (uppercasecheck === "yes")
    return uppercasecheck;

}else if (uppercasecheck === "no")
  return uppercasecheck;
}

// User opts for numbers
function containsnumericvalues() {
  numbercheck = prompt("Do you want numbers included in your password? Types Yes or No")

  if (numbercheck === "yes")
    return numbercheck;

} else if (numbercheck === "no")
  return numbercheck
}

// User opts for special characters
function containsspecialcharacters() {
  specialcheck = prompt("Do you want special characters in your password? Type Yes or No")

  if (specialcheck === "yes")
    return specialcheck;

} else if (specialcheck === "no")
  return specialcheck
}

// Password is generated from random combination of the above
function generatePassword() {

  isproperlength();
  console.log(passwordlength);

  isuppercase();
  console.log(uppercasecheck);

  containsnumericvalues();
  console.log(numbercheck);

  containsspecialcharacters();
  console.log(specialcheck);

  var characters = lowercaseCharacters
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


