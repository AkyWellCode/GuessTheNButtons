var buttons = 1, winnerButton, text = document.createElement("text");

function addButtons() {
  var insertButtons = document.getElementById("insertButtons"), numberOfButtons = document.getElementById("numberOfButtons").value, randomButton = Math.floor(Math.random() * numberOfButtons) + 1;
  winnerButton = randomButton.toString();
  for (let i = 1; i <= numberOfButtons; ++i) {
    var addButton = document.createElement("button");
    addButton.id = buttons;
    addButton.type = "button";
    addButton.className = "btn btn-outline-secondary distanceButtons";
    addButton.innerHTML = "Button " + i;
    addButton.onclick = function() {guessButton(this.id)};
    insertButtons.append(addButton);
    ++buttons;
  }
  return false;
}

function guessButton(clicked_id) {
  if (clicked_id === winnerButton) {
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
