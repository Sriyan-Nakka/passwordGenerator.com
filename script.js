let uppercase = false;
let numbers = false;
let specialChars = false;
let password = "";

const passwordDisplay = document.querySelector("#passwordDisplay");
const generateButton = document.querySelector("#generateButton");
const passwordDiv = document.querySelector("#passwordDiv");

const includeUppercase = document.querySelector("#includeUppercase");
const includeNumbers = document.querySelector("#includeNumbers");
const includeSpecialChars = document.querySelector("#specialChars");

function generatePassword(e) {
  e.preventDefault();
  let characterNum = Number(document.querySelector("#characterNum").value);

  password = "";
  uppercase = includeUppercase.checked;
  numbers = includeNumbers.checked;
  specialChars = includeSpecialChars.checked;

  if (uppercase) {
    console.log("Include uppercase");
  }
  if (numbers) {
    console.log("Include numbers");
  }
  if (specialChars) {
    console.log("Include special characters");
  }

  for (let char = 1; char <= characterNum; char++) {
    // Combo 1
    if (uppercase && numbers && specialChars) {
      let charType = Math.floor(Math.random() * 4) + 1;
      console.log("charType", charType);
      charInclude(charType, 1);
    }
    // Combo 2
    else if (uppercase && numbers) {
    }
    // Combo 3
    else if (uppercase && specialChars) {
    }
    // Combo 4
    else if (numbers && specialChars) {
    }
    // Combo 5
    else if (numbers) {
    }
    // Combo 6
    else if (specialChars) {
    }
  }

  document.querySelector("#passwordDiv").style.display = "block";
  document.querySelector("#passwordDisplay").textContent = password;
}

function charInclude(charType, combo) {
  if (combo === 1) {
    switch (charType) {
      //lowercase
      case 1:
        let lowerCharNum = Math.floor(Math.random() * 26) + 1;
        console.log("lowerCharNum", lowerCharNum);
        includeLowercaseChar(lowerCharNum);
        break;
      //uppercase
      case 2:
        let upperCharNum = Math.floor(Math.random() * 26) + 1;
        console.log("upperCharNum", upperCharNum);
        includeUppercaseChar(upperCharNum);
        break;
      //numbers
      case 3:
        break;
      //special characters
      case 4:
        break;
    }
  } else if (combo === 2) {
    //combo 2 code
  } else if (combo === 3) {
    //combo 3 code
  } else if (combo === 4) {
    //combo 4 code
  } else if (combo === 5) {
    //combo 5 code
  } else if (combo === 6) {
    //combo 6 code
  }
}

function includeLowercaseChar(charNum) {
  switch (charNum) {
    case 1:
      password += "a";
      console.log(password);
      break;
    case 2:
      password += "b";
      console.log(password);
      break;
    case 3:
      password += "c";
      console.log(password);
      break;
    case 4:
      password += "d";
      console.log(password);
      break;
    case 5:
      password += "e";
      console.log(password);
      break;
    case 6:
      password += "f";
      console.log(password);
      break;
    case 7:
      password += "g";
      console.log(password);
      break;
    case 8:
      password += "h";
      console.log(password);
      break;
    case 9:
      password += "i";
      console.log(password);
      break;
    case 10:
      password += "j";
      console.log(password);
      break;
    case 11:
      password += "k";
      console.log(password);
      break;
    case 12:
      password += "l";
      console.log(password);
      break;
    case 13:
      password += "m";
      console.log(password);
      break;
    case 14:
      password += "n";
      console.log(password);
      break;
    case 15:
      password += "o";
      console.log(password);
      break;
    case 16:
      password += "p";
      console.log(password);
      break;
    case 17:
      password += "q";
      console.log(password);
      break;
    case 18:
      password += "r";
      console.log(password);
      break;
    case 19:
      password += "s";
      console.log(password);
      break;
    case 20:
      password += "t";
      console.log(password);
      break;
    case 21:
      password += "u";
      console.log(password);
      break;
    case 22:
      password += "v";
      console.log(password);
      break;
    case 23:
      password += "w";
      console.log(password);
      break;
    case 24:
      password += "x";
      console.log(password);
      break;
    case 25:
      password += "y";
      console.log(password);
      break;
    case 26:
      password += "z";
      console.log(password);
      break;
  }
}
function includeUppercaseChar(charNum) {
  switch (charNum) {
    case 1:
      password += "A";
      console.log(password);
      break;
    case 2:
      password += "B";
      console.log(password);
      break;
    case 3:
      password += "C";
      console.log(password);
      break;
    case 4:
      password += "D";
      console.log(password);
      break;
    case 5:
      password += "E";
      console.log(password);
      break;
    case 6:
      password += "F";
      console.log(password);
      break;
    case 7:
      password += "G";
      console.log(password);
      break;
    case 8:
      password += "H";
      console.log(password);
      break;
    case 9:
      password += "I";
      console.log(password);
      break;
    case 10:
      password += "J";
      console.log(password);
      break;
    case 11:
      password += "K";
      console.log(password);
      break;
    case 12:
      password += "L";
      console.log(password);
      break;
    case 13:
      password += "M";
      console.log(password);
      break;
    case 14:
      password += "N";
      console.log(password);
      break;
    case 15:
      password += "O";
      console.log(password);
      break;
    case 16:
      password += "P";
      console.log(password);
      break;
    case 17:
      password += "Q";
      console.log(password);
      break;
    case 18:
      password += "R";
      console.log(password);
      break;
    case 19:
      password += "S";
      console.log(password);
      break;
    case 20:
      password += "T";
      console.log(password);
      break;
    case 21:
      password += "U";
      console.log(password);
      break;
    case 22:
      password += "V";
      console.log(password);
      break;
    case 23:
      password += "W";
      console.log(password);
      break;
    case 24:
      password += "X";
      console.log(password);
      break;
    case 25:
      password += "Y";
      console.log(password);
      break;
    case 26:
      password += "Z";
      console.log(password);
      break;
  }
}
