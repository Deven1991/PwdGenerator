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
  passwordlength = parseInt(passwordlength);
  console.log(passwordlength)
  // Need to add return in passwordlength function

  if (passwordlength < 8) {
    window.alert("Password must be between 8-128 characters");
    isproperlength();
  } else if (passwordlength > 128) {
    window.alert("Password must be bewteen 8-128 characters");
    isproperlength()
  }
}

// Password is generated from random combination of the above
function generatePassword() {
  isproperlength();
  lowercasecheck = confirm("Do you want lowercase letters in your password?");
  uppercasecheck = confirm("Do you want uppercase letters in your password?");
  numbercheck = confirm("Do you want numbers included in your password?")
  specialcheck = confirm("Do you want special characters in your password?")

  var randomChar = ""

    if (lowercasecheck === true) {
    // If user selects lowercase characters, adds lowercase letters to password
      randomChar += lowercaseCharacters
    }

    
    if (uppercasecheck === true) {
      // If user selects uppercase characters, adds uppercase letters to password
      randomChar += uppercaseCharacters
    }

    
    if (numbercheck === true) {
      // If user selects numbers characters, adds numbers  to password
      randomChar += numberCharacters
    }

    
    if (specialcheck === true) {
      // If user selects special characters, adds speical characters to password
      randomChar += specialCharacters
    }

      let writePassword = "";
      for (let i = 0; i < passwordlength; ++i) {
        let at = Math.floor(Math.random() * (passwordlength + 1));
        writePassword += randomChar.charAt(at);
      }
      return writePassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);