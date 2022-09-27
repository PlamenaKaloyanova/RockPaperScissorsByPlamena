
const rock="Rock";
const paper="Paper";
const scissors="Scissors";

let playerTurn;
let playerMove;
if(playerTurn=="r" || playerTurn=="rock"){
    playerTurn=rock;
}else if(playerMove=="p" || playerMove=="paper"){
    playerMove=paper;
}else if(playerMove=="s" || playerMove=="scissors"){
    playerMove=scissors;
}else{
    console.log('Invalid input. Try Again...')
}

let computerRandomNumber=Math.floor(Math.random()*3)+1;

switch(computerRandomNumber){
    case 1:
        computerRandomNumber=rock;
        break;
    case 2:
        computerRandomNumber=paper;
        break;
    case 3:
        computerRandomNumber=scissors;
        break;        
}
let computerTurn;

console.log(`The computer chooses ${computerTurn}`);
if((playerTurn===rock && computerTurn===scissors)||
(playerTurn===paper && computerTurn===rock)||(playerTurn===scissors 
    && computerTurn===paper)){
        console.log('You win!');
    }else if((playerTurn===rock && computerTurn===paper)||(playerTurn===paper &&
        computerTurn===scissors) ||(playerTurn===scissors && computerTurn===rock)){
            console.log('You lose!')
        }else if((playerTurn===paper && computerTurn===paper)||(playerTurn===scissors &&
            computerTurn===scissors)){
                console.log('This game was s draw!');
            }