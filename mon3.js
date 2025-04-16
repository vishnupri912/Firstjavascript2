let userInputElement=document.getElementById("userInput");
let gameResultInput=document.getElementById("gameResult");
let randomNumber=Math.ceil(Math.random()*100);
function onButton(){
    let guessNumber=parseInt(userInputElement.value);
    if(guessNumber>randomNumber){
        gameResultInput.textContent="Too High! Try Again.";
        gameResultInput.style.backgroundColor="#1e217c";
    }
    else if(guessNumber<randomNumber){
        gameResultInput.textContent="Too Low! Try Again.";
        gameResultInput.style.backgroundColor="#1e217c";
    }
    else if(guessNumber===randomNumber){
        gameResultInput.textContent="Congratulations! You got it Right.";
        gameResultInput.style.backgroundColor="#1e217c";
    }
    else{
        gameResultInput.textContent="Please provide a valid input.";
        gameResultInput.style.backgroundColor="#1e217c";
    }

}