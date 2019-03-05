var wins = null;
var losses = null;
var ties = null;

document.getElementById("rock-button").addEventListener("click", function(){
  userChoice("rock")
});
document.getElementById("paper-button").addEventListener("click", function(){
  userChoice("paper")
});
document.getElementById("scissors-button").addEventListener("click", function(){
  userChoice("scissors")
});
document.getElementById("reset-button").addEventListener("click", function(){
  resetScore()});

function userChoice(userChoice){
  var outcome = null;
  var computer = computerChoice()

  displayImage("user", userChoice)
  displayImage("computer", computer)
  
  if (computer === userChoice){
    outcome = "tie"
  } else if (computer === "rock" && userChoice === "scissors") {
    outcome = "lose"
  } else if (computer === "scissors" && userChoice === "paper") {
    outcome = "lose"
  } else if (computer === "paper" && userChoice === "rock") {
    outcome = "lose"
  } else {
    outcome = "win"
  }

  score(outcome);
};

function computerChoice(){
  var choices = ["paper", "rock", "scissors"]
  var random = choices[Math.floor(Math.random() * 3)] 
  return random
};

function displayImage(player, choice){
  var displayPicture = null;
  var image = null;

  if (player === "user"){
    var displayPicture = document.getElementById("user-selection-image")
  } else if (player === "computer"){
    var displayPicture = document.getElementById("computer-selection-image")
  } else {}

    if (choice === "paper"){
    image = "url(\"paper.png\")"
  } else if (choice === "rock"){
    image = "url(\"rock.png\")"
  } else if (choice === "scissors"){
    image = "url(\"scissors.png\")"
  } else {}

  displayPicture.style.backgroundImage = image
}


function score(outcome){

  var w = document.getElementById("wins")
  var l = document.getElementById("losses")
  var t = document.getElementById("ties")
  
  w.style.color = "black"
  l.style.color = "black"
  t.style.color = "black"

  if (outcome === "win"){
    wins ++
    w.innerHTML = wins
    w.style.color = "green"
    document.getElementById("user-selection-image").innerHTML = "WINNER"
    document.getElementById("computer-selection-image").innerHTML = ""
  } else if (outcome === "lose"){
    losses ++
    l.innerHTML = losses
    l.style.color = "red"
    document.getElementById("user-selection-image").innerHTML = ""
    document.getElementById("computer-selection-image").innerHTML = "WINNER"
  } else if (outcome === "tie"){ 
    ties ++
    t.innerHTML = ties
    document.getElementById("user-selection-image").innerHTML = ""
    document.getElementById("computer-selection-image").innerHTML = ""
  } else {}

}

function resetScore(){
  wins = 0
  losses = 0
  ties = 0

  var scoreboardItems = ["wins", "losses", "ties"]
  for (var i = 0; i < scoreboardItems.length; i++){
  var scoreboardItem = document.getElementById(scoreboardItems[i])
  scoreboardItem.innerHTML = 0
  scoreboardItem.style.color = "black";
  }

  document.getElementById("user-selection-image").innerHTML = ""
  document.getElementById("computer-selection-image").innerHTML = ""
  document.getElementById("user-selection-image").style.backgroundImage = ""
  document.getElementById("computer-selection-image").style.backgroundImage = ""  

  console.log("reset Score")
}