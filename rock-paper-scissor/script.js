// Main Logic 
function getComputerChoice(){
    let randomChoice = Math.floor(Math.random() * 100) % user + 1;
    let computerChoice;
    // console.log(choice);
    computerChoice = (randomChoice === 1) ? 'Rock' : (randomChoice == 2) ? 'Paper' : 'Scissors';
    // battleWinner(computerChoice , computerChoice);
}
function battleWinner(){
    let computerScore  = 0;
    let userScore = 0;
    while(computerScore < 5 && userScore < 5){
        let computerChoice = getComputerChoice();
        let userChoice = prompt('Choice among thse \n 1. Rock \n 2. Paper \n 3. Scissors');
        if((computerChoice == 'Rock' && userChoice == 'Paper') || (computerChoice == 'Paper' && userChoice == 'Scissors') || (computerChoice == 'Scissors' && userChoice == 'Rock')){
            userScore++;
            console.log(`User Score: ${userScore}`);
        }else if((userChoice == 'Rock' && computerChoice == 'Paper') || (userChoice == 'Paper' && computerChoice == 'Scissors') || (userChoice == 'Scissors' && computerChoice == 'Rock')){
            computerScore++;
            console.log(`Computer Score: ${computerScore}`);
        }
    }
    if(computerScore == 5) console.log("Sadly Computer is More Smater than you");
    else if(userScore== 5) console.log("Yeahh.! AI will not take ur Job");
}