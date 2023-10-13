// Get the DOM elements
const input = document.querySelector("#inputNumber"),
guess = document.querySelector("#guessNumber");
checkButton = document.querySelector("button");
remainChances = document.querySelector(".chances");

// like autofocus attribue in HTML
input.focus();

// Get random number between 1 to 100
let randomNum = Math.floor(Math.random() *100);
console.log(randomNum);
chance = 10;



checkButton.addEventListener("click", () => {
    // Decrement the chance variable on every click
    chance--;

    let inputValue = input.value;


    if(inputValue != ""){
        // Check if the input value is equal to the random number
        if(inputValue == randomNum){

            // Update guessed number, disable the input, check button text and color.
            [guess.textContent, input.disabled] = ["Congratulations 🎉 you've guessed the number!", true];
            [checkButton.textContent, guess.style.color] = ["Replay", "#333"];

          // Check if the input value is > random number, and within 1-99 range.  
        } else if(inputValue > randomNum && inputValue < 100){
            
            [guess.textContent, remainChances.textContent] = ["Your guessed number is high", chance];
            guess.style.color = "#333";

        // Check if the input value is < random number, and within 1 to 99 range. 
        } else if(inputValue < randomNum && inputValue > 0){
            [guess.textContent, remainChances.textContent] = ["Your guessed number is low", chance];
            guess.style.color = "#333";

        // If the input value is not within the range of 1 to 99
        } else{
            [guess.textContent, remainChances.textContent] = ["Your number is invalid!", chance];
            guess.style.color = "red";
        
        }
        
        // If the inputValue textbox is empty.
    } else if(inputValue == ""){
        guess.textContent = "Please input a number";
        guess.style.color = "red";
    }

        // Check if the chance is zero.
        if(chance == 0){

            [checkButton.textContent, input.disabled, inputValue] = ["Replay", true, ""];
            [guess.textContent, guess.style.color] = ["😓 Oops! you've lost the game", "#DE0611"];
        }
        if(chance < 0){
            window.location.reload();
        }


   
});