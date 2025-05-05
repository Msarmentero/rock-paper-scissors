function playGame(){
    let humanScore= 0;
    let computerScore= 0;
    let humanChoice = "";
    let computerChoice = "";

    function getRandomValues(min, max){
        return Math.floor(Math.random() * (max - min) + min);
    }
    
    function getComputerChoice(){
        let computerChoice = ""
        const computerValue = getRandomValues(1,4)
        
    
        if (computerValue === 1){
            computerChoice = "scissors"
        
        }
        if (computerValue === 2){
            computerChoice = "rock"
            
        }
        if (computerValue === 3){
            computerChoice = "paper"
        
        }
        return computerChoice
    }

    function getHumanChoice(){
        const humanChoice = window.prompt("Rock, paper or scissors?")
        return humanChoice
        
    }

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        
        //console.log(`human choice: ${humanChoice}`)
        //console.log(`computer choice: ${computerChoice}`)
        
        if(humanChoice === computerChoice){
            console.log("Draw!")
        } else if(
            (humanChoice === "rock" && computerChoice ==="scissors") ||
            (humanChoice === "paper" && computerChoice ==="rock") ||
            (humanChoice === "scissors" && computerChoice ==="paper")
        ){
            console.log("Human wins!")
            humanScore++;
        } else{
            console.log("computer wins!")
            computerScore++;
        }
        console.log(`Score, human score: ${humanScore}, computer score: ${computerScore}`)
        }


    for (let i = 0; i < 5; i++) {
        humanChoice= getHumanChoice();
        computerChoice= getComputerChoice();

        playRound(humanChoice,computerChoice);
        
    }

    if (humanScore > computerScore) {
        console.log("Human wins the game!");
      } else if (computerScore > humanScore) {
        console.log("Computer wins the game!");
      } else {
        console.log("It's a draw!");
      }
}
playGame()

