let winnerIndex = Math.floor(Math.random() * 3);

let buttons = document.querySelectorAll("button");
const lose = "red", win = "green", winner = "Winner", loser = "Loser";
const message = document.getElementById("message");

buttons.forEach(function(button, index) {
    button.addEventListener("click", function() {
        if (index === winnerIndex) {
          message.textContent = winner;
          message.style.color = win;
        } else {
          message.textContent = loser;
          message.style.color = lose;
        }
    });
});
