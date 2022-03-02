// Getting the DOM Elements; grab each Id on the document to be able to access and manipulate it
const resultDOM = document.getElementById("result");
const copybtnDOM = document.getElementById("copy");
const lengthDOM = document.getElementById("length");
const uppercaseDOM = document.getElementById("uppercase");
const numbersDOM = document.getElementById("numbers");
const symbolsDOM = document.getElementById("symbols");
const generatebtn = document.getElementById("generate");
const form = document.getElementById("passwordGeneratorForm");

// Create arrays using ASCII
const UPPERCASE_CODES = arrayFromLowToHigh(65, 90);
const LOWERCASE_CODES = arrayFromLowToHigh(97, 122);
const NUMBER_CODES = arrayFromLowToHigh(48, 57);
const SYMBOL_CODES = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));

// Character Code Generating Function
function arrayFromLowToHigh(low, high) {
    const array = [];
    for (let i = low; i <= high; i++) {
      array.push(i);
    }
    return array;
  }

    // The Password Generating Function
function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
    // Create a large array that contains all options selected by user
    // By default, lowercase letters will be included in generated password
    let charCodes = LOWERCASE_CODES;
    // If user selects uppercase option, add uppercase letters to charCodes
    if (includeUppercase) {
      charCodes = charCodes.concat(UPPERCASE_CODES);
    }
    // If user selects symbols option, add symbols to charCodes
    if (includeSymbols) {
      charCodes = charCodes.concat(SYMBOL_CODES);
    }
    // If user selects numbers option, add numbers to charCodes
    if (includeNumbers) {
      charCodes = charCodes.concat(NUMBER_CODES);
    }
    // Create an empty array that will have randomly selected characters added to it
    const passwordCharacters = [];
    for (let i = 0; i < characterAmount; i++) {
      // Generate a random index position from the charCodes array
      const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
      // We take the empty array and add the character (converted from the ASCII number)
      passwordCharacters.push(String.fromCharCode(characterCode));
    }
    // returns the array of randomly password characters as a string
    return passwordCharacters.join('');
  }