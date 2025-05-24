const passwordDisplay = document.querySelector("#passwordDisplay");
const generateButton = document.querySelector("#generateButton");
const passwordDiv = document.querySelector("#passwordDiv");

const includeUppercase = document.querySelector("#includeUppercase");
const includeNumbers = document.querySelector("#includeNumbers");
const includeSpecialChars = document.querySelector("#specialChars");

function generatePassword(e) {
  e.preventDefault();
  let characterNum = Number(document.querySelector("#characterNum").value);
  console.log(characterNum);
  if (includeUppercase.checked) {
    console.log("Include uppercase");
  }
  if (includeNumbers.checked) {
    console.log("Include numbers");
  }
  if (includeSpecialChars.checked) {
    console.log("Include special characters");
  }
}
