function getRandomValues(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

function getComputerChoice(){
    let computerChoice = ""
    const computerValue = getRandomValues(1,4)
    console.log(computerValue)

    if (computerValue === 1){
        computerChoice = "scissors"
        console.log(computerChoice)
    }
    if (computerValue === 2){
        computerChoice = "rock"
        console.log(computerChoice)
    }
    if (computerValue === 3){
        computerChoice = "paper"
        console.log(computerChoice)
    }
}

getComputerChoice();