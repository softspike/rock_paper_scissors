// cache (storing something in a variable for future use) in DOM variables (html elements store DOM elements)
const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
// returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.
// .class
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  // random number between 0 and 2
  console.log(Math.floor(Math.random() *3));
  return choices[randomNumber];

}
// to run functions
// console.log(getComputerChoice());


function game (userChoice) {
  const computerChoice = getComputerChoice();
  console.log("computerChoice =>" + computerChoice);
  console.log("userChoice =>" + userChoice);
  
}

game();

function main(){

  // add event_listeners
rock_div.addEventListener('click', function(){
  game("r");


})

paper_div.addEventListener('click', function(){
  game("p");

})

scissors_div.addEventListener('click', function(){
  game("s");

})

}

// to run functions
main();
