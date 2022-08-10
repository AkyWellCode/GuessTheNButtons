var randomButton = Math.floor(Math.random() * 3) + 1, winnerButton = randomButton.toString(), winOrLose = document.getElementById("winOrLose"), text = document.createElement("text");
function button(clicked_id) {
  if (winnerButton === clicked_id) {
    text.innerHTML = "Congratulation, you won!";
    text.style.color = "blue";
    text.style.fontSize = "x-large";
    winOrLose.append(text);
  } else {
    text.innerHTML = "Wrong button! The correct button is: Button " + winnerButton + ". Better luck next time!";
    text.style.color = "red";
    text.style.fontSize = "x-large";
    winOrLose.append(text);
  }
}
