var buttons = 1, winnerButton = 0;
function addButtons() {
  var numberOfButtons = document.getElementById("numberOfButtons").value, winnerNumber = Math.floor(Math.random() * numberOfButtons) + 1;
  winnerButton = winnerNumber;
  for (var i = 1; i <= numberOfButtons; ++i) {
    $('#insertButtons').append(`
        <button type="button" class="btn btn-secondary" id="` + buttons + `" onClick="return guessButton(this.id)">Button ` + buttons + `</button>
      `)
    ++buttons;
  }
}

function guessButton(clicked_id) {
  var clickedButton = clicked_id;
  if(clickedButton == winnerButton) {
    $('#removePrevText').remove();
    $('#winOrLose').append(`
      <div id="removePrevText">
        <div class="font">
        <p id="win" style="color:blue; font-size:35px;"> Congratulation, you won! </p>
        </div>
      </div>
      `);
  } else {
    $('#removePrevText').remove();
    $('#winOrLose').append(`
      <div id="removePrevText">
        <div class="font">
          <p id="lose" style="color:red; font-size:35px;"> Wrong button! The winner button was: Button `+ winnerButton +`. Better luck next time! </p>
        </div>
      </div>
      `);
  }
}
