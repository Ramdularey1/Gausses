const userInput = document.querySelector(".user-input");
const userValue = document.querySelector(".value");
const submitButton = document.querySelector(".submit");
const tenNumber = document.querySelector(".tenNumber");
const guesstext = document.querySelector(".guesstext");
const winColor = document.querySelector(".win-color");
const resetgame = document.querySelector(".reset");
const botDisplay = document.querySelector(".bot-display")


let attempt = 10;
var i = 1;

//Generate random number

let randomNumber = Math.floor(Math.random() * 100);



// handle button click

submitButton.addEventListener("click", () => {



    
    if (userInput.value >= 101) {
      
        return;
    }

    if (attempt <= 1) {
        guesstext.textContent = "You Loos!"
        winColor.style.backgroundColor = "red";
        botDisplay.style.display = "none"
        resetgame.style.display = "flex"
        return
    }

    let userInputValue = userInput.value;
    userValue.textContent += " " + userInputValue;
    attempt--;
    if (userInput.value === "") {

        return;
    }

   





    //decreasing value of number of chance
    let textNumber = tenNumber.textContent
    if (textNumber >= 1) {
        tenNumber.textContent -= i;
    }

    console.log(userInputValue);

    if (userInputValue > randomNumber) {
        guesstext.textContent = "Your guess is too high!"
        winColor.style.backgroundColor = "darkgoldenrod";

    }
    else if (userInputValue == randomNumber) {
        guesstext.textContent = "You win!"
        winColor.style.backgroundColor = "green";
        botDisplay.style.display = "none"
        resetgame.style.display = "flex"
    }

    else {
        guesstext.textContent = "Your guess is too low!"
        winColor.style.backgroundColor = "darkgoldenrod";
    }
    // gaussvalue(userInputValue);
    userInput.value = "";

})



resetgame.addEventListener("click", () => {
    location.reload();
})






