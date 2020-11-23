// cache (storing something in a variable for future use) in DOM variables (html elements store DOM elements)
let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
// returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.
// .class
const scoreBoard_div = document.querySelector(".score-board");
// get the p tag in the .result
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  // random number between 0 and 2
  const randomNumber = (Math.floor(Math.random() *3));
  return choices[randomNumber];

}

// 53:42/// 1:09:51;
/////////////////////////////////////////////////////////////////////////////////////////////////////////

function convertToWord (letter){
  if(letter === "r") return "Rock";
  if(letter === "p") return "Paper";
  // not met
  return "Scissors";
}


//DEFINING THE FUNCTION
function win(userChoice, computerChoice){
  userScore++;
  userScore_span.innerHTML = userScore;
  // doesnt work .innerHTML
  computerScore_span= computerScore;
  //font size (3) super script
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sup();
  result_p.innerHTML =` ${convertToWord(userChoice)} ${smallUserWord} beats ${convertToWord(computerChoice)} ${smallCompWord} you win!`;
  console.log(userChoice);
  console.log(computerChoice);

  /////////////////////////////////////////////////////////////////////////////////////////////////////////
}
  //define!!!
function lose(userChoice, computerChoice){
  computerScore++;
  userScore_span.innerHTML = userScore;
  // doesnt work .innerHTML
  computerScore_span = computerScore;
  //font size (3) super script
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sup();
  result_p.innerHTML =` ${convertToWord(userChoice)} ${smallUserWord} loses ${convertToWord(computerChoice)} ${smallCompWord} you lost...`;

}

function draw(){
  // userScore--;
  // userScore_span.innerHTML = userScore;
  // // doesnt work .innerHTML
  // computerScore_span = computerScore;
  // //font size (3) super script
  // const smallUserWord = "user".fontsize(3).sup();
  // const smallCompWord = "comp".fontsize(3).sup();
  // result_p.innerHTML =` ${convertToWord(userChoice)} ${smallUserWord} beats ${convertToWord(computerChoice)} ${smallCompWord} you win!`;
  // console.log(userChoice);
  // console.log(computerChoice);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////


// to run functions
// console.log(getComputerChoice());

//PASSING THE FUNCTION FROM LINE 27
function game (userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice){
    // user picks & computer picks
    case "rs":
    case "pr":
    case "sp":
      //argument
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      // console.log("It's a draw");
      break;              
  }
  // const name = "facundo";
  // if (name === "facundo") {
  //   console.log("hello");
  // } else if (name === "pine") {
  //   console.log("hey");
  // }

  // console.log("computerChoice =>" + computerChoice);
  // console.log("userChoice =>" + userChoice);
}


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
