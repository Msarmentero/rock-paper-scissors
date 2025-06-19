// Wrapping function
function playGame(){
    // Declaring variables to hold scores and counters
    let humanScore= 0;
    let computerScore= 0;
    let drawScore = 0;
    let roundCount = 0;

    // Targeting HTML elements to hold scores
    let choices = document.querySelectorAll("button.choice");
    let humanCounter = document.getElementById("humanScore");
    let computerCounter = document.getElementById("computerScore");
    let drawCounter = document.getElementById("drawScore");
    let roundCounter = document.getElementById("roundCounter");

    // Targeting HTML elements that declare winners
    let humanVictory = document.getElementById("humanVictory");
    let computerVictory = document.getElementById("computerVictory");
    let drawResult = document.getElementById("drawResult");

    // Randomly declaring the computer choice    
    function getComputerChoice(){
        let computerChoice =['rock','paper','scissors'];
        let randomIndex = Math.floor(Math.random() * computerChoice.length);
        const computerValue = computerChoice[randomIndex];
        
        return computerValue
    }

    // Main game functionality
    function playRound(humanChoice, computerChoice) {
        
        // Scoring conditions
        if(humanChoice === computerChoice){
            drawScore++;
        } else if(
            (humanChoice === "rock" && computerChoice ==="scissors") ||
            (humanChoice === "paper" && computerChoice ==="rock") ||
            (humanChoice === "scissors" && computerChoice ==="paper")
        ){
            humanScore++;
        } else{  
            computerScore++;
        }

        roundCount ++;
        // Displaying overall scorings
        roundCounter.innerText = `Round ${roundCount}`;
        humanCounter.innerText = `Human Score: ${humanScore}`;
        computerCounter.innerText = `Computer Score: ${computerScore}`;
        drawCounter.innerText = `Draws: ${drawScore}`;


        // End Game conditions
        if(humanScore === 5 || computerScore === 5 ){
            endGame();
            }
        }

        // Post Game conditions
        function endGame() {
            if (humanScore > computerScore) {
                humanVictory.style.display = "block";
              } else {
                computerVictory.style.display = "block";
              }

              choices.forEach(choice =>{
                choice.disabled = true;
              })
        }

        // Storing the human choice and 
        // comparing it against the computher choice

        choices.forEach(choice =>{
            choice.addEventListener("click", () =>{
                
                    const humanChoice = choice.id;
                    const computerChoice = getComputerChoice();

                    playRound(humanChoice, computerChoice);
                
            });
        });
    
}
playGame();

