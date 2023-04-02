const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length);
  console.log(randomNumber);
  if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "paper";
  } else if (randomNumber === 3) {
    computerChoice = "scisors";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
};

function getResult() {
  if (computerChoice === userChoice) {
    result = "It is a draw!";
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = "You win!";
  }
  if (computerChoice === "rock" && userChoice === "scisors") {
    result = "You lose!";
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = "You lose!";
  }
  if (computerChoice === "paper" && userChoice === "scisors") {
    result = "You win!";
  }
  if (computerChoice === "scisors" && userChoice === "rock") {
    result = "You win!";
  }
  if (computerChoice === "scisors" && userChoice === "paper") {
    result = "You lose!";
  }
  resultDisplay.innerHTML = result;
};
