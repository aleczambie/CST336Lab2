//event listeners

document.querySelector("#guessBtn").addEventListener("click", checkGuess);
document.querySelector("#resetBtn").addEventListener("click", initializeGame)
//document.querySelector("h1").style.color="red";

let randomNumber;
let attempts = 0;
let totalWins =0;
let totalLosses =0;
let attemptsLeft =7;

initializeGame();

function initializeGame(){
    document.querySelector("#totalWins").innerHTML=`Total wins: <span id="wins">${totalWins}</span>  Total losses: <span id="losses">${totalLosses}</span>`;
    randomNumber = Math.floor(Math.random()*99)+1;
    console.log("randomNumber: " + randomNumber);
    attempts=0;
    attemptsLeft = 7;

    document.querySelector("#attemptsLeft").innerHTML= `You have <span class = "numbersLeft">${attemptsLeft}</span> attempts remaining.`;
    document.querySelector("#attemptsLeft").style.color="rgb(11, 95, 160)";

    //hide reset button
    document.querySelector("#resetBtn").style.display = "none";

    //show guessing button
    document.querySelector("#guessBtn").style.display="inline";

    let playerGuess = document.querySelector("#playerGuess");
    playerGuess.focus(); //add focus
    playerGuess.value=""; //clear textbox

    let feedback = document.querySelector("#feedback");
    feedback.textContent=""; //clear feedback

    //clear previous guesses
    document.querySelector("#guesses").textContent="";
}


function checkGuess(){
    let feedback = document.querySelector("#feedback");
    feedback.textContent="";
    let guess = document.querySelector("#playerGuess").value;
    console.log("Player Guess: " + guess);
    if(guess<1 || guess>99){
       feedback.textContent = "Enter a number between 1 and 99";
       feedback.style.color = "red";
       let playerGuess = document.querySelector("#playerGuess");
        playerGuess.focus(); //add focus
        playerGuess.value=""; //clear textbox
       return
    }
    attempts++;
    attemptsLeft--
    console.log("Attempts: " + attempts);

    if(attemptsLeft == 1){
        document.querySelector("#attemptsLeft").innerHTML = `You have <span class="numbersLeft">${attemptsLeft}</span> attempt remaining.`;
        document.querySelector("#attemptsLeft").style.color = "orange";
    }else{
        document.querySelector("#attemptsLeft").innerHTML= `You have <span class="numbersLeft">${attemptsLeft}</span> attempts remaining.`;
   document.querySelector("#attemptsLeft").style.color="rgb(11, 95, 160);";
    }



    

    feedback.style.color="orange";
    if(guess == randomNumber){
        feedback.textContent="You guessed it correctly! You won!"
        feedback.style.color="darkgreen";
        totalWins++;
        gameOver();
        document.querySelector("#attemptsLeft").innerHTML = `You have 0 attempts left.`;
        document.querySelector("#attemptsLeft").style.color = "green";
        document.querySelector("#resetBtn").style.color = "white";
        document.querySelector("#resetBtn").style.backgroundColor="green";
        document.querySelector("#resetBtn").style.borderColor="green";

    }else{
        document.querySelector("#guesses").textContent += guess + " ";
        if (attempts === 7){
            feedback.textContent="Sorry, you lost. The correct number was: " + randomNumber;
            totalLosses++;
            feedback.style.color="red";
            gameOver();
        }else if(guess > randomNumber){
            feedback.textContent="Guess was too high";
            let playerGuess = document.querySelector("#playerGuess");
            playerGuess.focus(); //add focus
            playerGuess.value=""; //clear textbox
          

        }else{
            feedback.textContent="Guess was too low";
            let playerGuess = document.querySelector("#playerGuess");
            playerGuess.focus(); //add focus
            playerGuess.value=""; //clear textbox
    
        }
    }
}

function gameOver(){
    document.querySelector("#totalWins").innerHTML=`Total wins: <span id="wins">${totalWins}</span>  Total losses: <span id="losses">${totalLosses}</span>`;
    let guessBtn = document.querySelector("#guessBtn");
    let resetBtn = document.querySelector("#resetBtn");
    guessBtn.style.display = "none";
    resetBtn.style.display = "inline"
    document.querySelector("#attemptsLeft").style.color="red";
}