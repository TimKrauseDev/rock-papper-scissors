
/*** HELPER FUNCTIONS ***/

//computer chooses rps
function computerPlay(){
    let computerChoice = Math.floor(Math.random() *  3);

    compRock.classList.remove('btn-focus2');
    compPaper.classList.remove('btn-focus2');
    compScissors.classList.remove('btn-focus2');


    if(computerChoice==0){ compRock.classList.add('btn-focus2'); }
    else if(computerChoice==1){ compPaper.classList.add('btn-focus2'); }
    else{ compScissors.classList.add('btn-focus2'); }

    return computerChoice;

}

//find who won round and add to score (if not tie)
function findRoundWinner(playerChoice, computerChoice){
    
    //tie
    if(playerChoice == computerChoice){ roundWinner.textContent = "Tie!"; }

    //not tie
    if(playerChoice == 0){
        if(computerChoice == 1){ roundWinner.textContent = "You lose! Paper beats Rock."; 
        computerScore++; }
        if(computerChoice == 2){ roundWinner.textContent = "You win! Rock beats Scissors."; 
        playerScore++; }
    }
    if(playerChoice == 1){
        if(computerChoice == 0){ roundWinner.textContent = "You win! Paper beats Rock."; 
        playerScore++; }
        if(computerChoice == 2){ roundWinner.textContent = "You lose! Scissors beats Paper."; 
        computerScore++; }
    }
    if(playerChoice == 2){
        if(computerChoice == 0){ roundWinner.textContent = "You lose! Rock beats Scissors."; 
        computerScore++; }
        if(computerChoice == 1){ roundWinner.textContent = "You win! Scissors beats Paper."; 
        playerScore++; }
    }

    //update scores
    console.log(playerScore);
    console.log(computerScore);
    currentScorePlayer.textContent = "SCORE: " + playerScore;
    currentScoreComputer.textContent = "SCORE: " + computerScore;

    //if there is a winner
    if(computerScore == 5 || playerScore == 5){

        gameDIV.setAttribute('style', 'display: none');
        outroDIV.setAttribute('style', 'display: flex');
        pscore.textContent = "PLAYER: " + playerScore;
        cscore.textContent = "COMPUTER: " + computerScore;

        if(computerScore == 5){
            winnnerIMG.innerHTML = "<img src='images/computer.png' height=150px>";
        }
        else{
            winnnerIMG.innerHTML = "<img src='images/player.png' height=150px>";
        }
    }
}

//use player choice and play round
function playRound(playerChoice){
   
        computerChoice = computerPlay();
        findRoundWinner(playerChoice, computerChoice);

}

//restart everything
function restart(){
    playerScore = 0;
    computerScore = 0;
    currentScorePlayer.textContent = "SCORE: " + playerScore;
    currentScoreComputer.textContent = "SCORE: " + computerScore;
    roundWinner.textContent = 'First to 5. Choose Your Weapon!';
    compRock.classList.remove('btn-focus2');
    compPaper.classList.remove('btn-focus2');
    compScissors.classList.remove('btn-focus2');
    outroDIV.setAttribute('style', 'display: none');
    gameDIV.setAttribute('style', 'display: flex');
}

function startGame(){
    console.log("Hello");
    introDIV.setAttribute('style', 'display: none');
    gameDIV.setAttribute('style', 'display: flex');
}

/*** VARIABLES ***/
let rps = ["rock", "paper", "scissors"];
let computerScore = 0;
let playerScore = 0;
let playerChoice; let computerChoice;

/*** DOM ***/
let currentScorePlayer = document.querySelector('#playerScore > div');
let currentScoreComputer = document.querySelector('#computerScore > div');
let btnRock = document.querySelector('#rock');
let btnPaper = document.querySelector('#paper');
let btnScissors = document.querySelector('#scissors');
let compRock = document.querySelector('#btnc0');
let compPaper = document.querySelector('#btnc1');
let compScissors = document.querySelector('#btnc2');
const roundWinner = document.querySelector('#roundWinner');
let btnrestart = document.querySelector('#btnRestart');
let introDIV = document.querySelector('#intro');
let gameDIV = document.querySelector('#game');
let outroDIV = document.querySelector('#outro');
let btnStart = document.querySelector('#btnStart');
let pscore = document.querySelector('#pscore');
let cscore = document.querySelector('#cscore');
let winnnerIMG = document.querySelector('#winnerIMG');


/*** EVENTS ***/
btnStart.addEventListener('click', () => {startGame();} );
btnRock.addEventListener('click', () => {playRound(0);} );
btnPaper.addEventListener('click', () => {playRound(1);} );
btnScissors.addEventListener('click', () => {playRound(2);} );
btnrestart.addEventListener('click', () => {restart();} );