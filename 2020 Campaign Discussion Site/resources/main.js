$(document).ready(function(){

  console.log("hello world!")

  var userInput = document.getElementById("user");
  console.log(userInput)
  var validBool;
  userInput.onkeyup = function() {
    var id = "user";
    // console.log(userInput.value)
    // console.log(userInput.value.length)
    validateInput(id);
  }

  var passwordInput = document.getElementById("psw");
  console.log(passwordInput)

  passwordInput.onkeyup = function() {
    var id = "psw";
    // console.log(passwordInput.value)
    // console.log(passwordInput.value.length)
    validateInput(id);
  }


});

function validateInput(id) {
  if (id == "psw") {
    var id2 = "pswLabel";

    var lowerCaseLetters = /.*[a-z].*/g; // : Fill in the regular experssion for lowerCaseLetters
    var upperCaseLetters = /.*[A-Z].*/g; // : Fill in the regular experssion for upperCaseLetters
    var numbers = /.*[0-9].*/g; // : Fill in the regular experssion for digits
    var minLength = 8; // : Change the minimum length to what what it needs to be in the question

    var lowerCaseBool = document.getElementById(id).value.match(lowerCaseLetters);
    var upperCaseBool = document.getElementById(id).value.match(upperCaseLetters);
    var numbersBool = document.getElementById(id).value.match(numbers);
    var lengthBool = document.getElementById(id).value.length >= minLength

    // Validate lowercase letters
    if(lowerCaseBool && upperCaseBool && numbersBool && lengthBool) {
        document.getElementById(id2).classList.remove("text-danger");
        document.getElementById(id2).classList.add("text-success");
        document.getElementById(id2).innerHTML = "&check;"
        return true;
    } else {
        document.getElementById(id2).classList.add("text-danger");
        document.getElementById(id2).classList.remove("text-success");
        document.getElementById(id2).innerHTML = "&times;"
        return false
    }

  }
  else if (id == "user") {
    var id2 = "userLabel";
    console.log(document.getElementById(id).value);
    if (document.getElementById(id).value.length < 5) {
      document.getElementById(id2).innerHTML = "&times;"
      document.getElementById(id2).classList.add("text-danger");
      document.getElementById(id2).classList.remove("text-success");
      return false
    } else {
      document.getElementById(id2).innerHTML = "&check;"
      document.getElementById(id2).classList.remove("text-danger");
      document.getElementById(id2).classList.add("text-success");
      return true;
    }
  }
}
