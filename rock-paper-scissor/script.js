function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 100) % 3 + 1;
    return (randomChoice === 1) ? 'Rock' : (randomChoice === 2) ? 'Paper' : 'Scissors';
}

function getUserChoice() {
    let userChoice;
    do {
        userChoice = prompt('Choose among these: \n 1. Rock \n 2. Paper \n 3. Scissors');
    } while (![1, 2, 3].includes(parseInt(userChoice)));

    return userChoice;
}

function battleWinner() {
    let computerScore = 0;
    let userScore = 0;

    while (computerScore < 5 && userScore < 5) {
        let computerChoice = getComputerChoice();
        let userChoice = getUserChoice();

        if ((computerChoice === 'Rock' && userChoice === '2') ||
            (computerChoice === 'Paper' && userChoice === '3') ||
            (computerChoice === 'Scissors' && userChoice === '1')) {
            userScore++;
            console.log(`userScore: ${userScore}`);
        } else if ((userChoice === '1' && computerChoice === 'Paper') ||
            (userChoice === '2' && computerChoice === 'Scissors') ||
            (userChoice === '3' && computerChoice === 'Rock')) {
            computerScore++;
            console.log(`computerScore: ${computerScore}`);
        }
    }

    if (computerScore === 5) console.log("Sadly, the computer is smarter than you . Y ou will be jobless Soon.!");
    else if (userScore === 5) console.log("Yeahh.! AI will not take your job");
}

battleWinner();