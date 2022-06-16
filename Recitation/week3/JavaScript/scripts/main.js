// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = () => {
  let mySrc = myImage.getAttribute('src');
  // TO DO: Change the image
  myImage.src = mySrc == "images/js-icon.png" ? "images/js-illus.png" : "images/js-icon.png";
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


setUserName = () => {
  let myName = prompt('Please enter your name.');
  // TO DO: Set the heading to be 'Javascript is cool, ' + name
  console.log(myName.length)
//  myHeading.textContent = myName.length > 0 ? `Javascript is cool, ${myName}` : `Javascript is cool`; 
  myHeading.innerHTML = myName.length > 0 ? `Javascript is cool, ${myName}` : `Javascript is cool`; 
}

myButton.onclick = () => {
  setUserName();
}
