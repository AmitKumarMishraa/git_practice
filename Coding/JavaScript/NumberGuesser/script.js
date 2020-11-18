let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:




const generateTarget = () => Math.floor( Math.random()*9)
const compareGuesses = (humanGuess,computerGuess,targetNumber) => {
  if(humanGuess>9 || humanGuess<0){
  return alert("Please enter number between 0 to 9")
}else{
  
  if(Math.abs(targetNumber-humanGuess)<=Math.abs(targetNumber-computerGuess)){
    return true
  }else{
    return false
  }
}
}

const updateScore = winner => {
  if(winner==='human'){
    humanScore++
  } else if(winner==='computer'){
    computerScore++
  }
} 

const advanceRound= () => {currentRoundNumber += 1}

