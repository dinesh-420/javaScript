let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
function checkGuess() {
    let inpVal=userInput.value;
    let randomNumber=Math.ceil(Math.random()*100);
    if (parseInt(inpVal)<randomNumber){
        gameResult.textContent="Too Low! Try again";
        gameResult.style.color="red";
    }
    else if (parseInt(inpVal)>randomNumber){
        gameResult.textContent="Too hign! Try again";
        gameResult.style.color="red";
    }
    else if (parseInt(inpVal)===randomNumber){
        gameResult.textContent="congrats! your guess is correct";
        gameResult.style.color="green";
    }
    else {
        gameResult.textContent="Enter a valid input";
        gameResult.style.color="red";
    }
}