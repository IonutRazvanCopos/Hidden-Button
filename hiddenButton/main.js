let winnerIndex = Math.floor(Math.random() * 3);

let buttons = document.querySelectorAll("button");
const lose = "red", win = "green";

buttons.forEach(function(button, index) {
    button.addEventListener("click", function() {
        if (index === winnerIndex) {
          var message = "Winner";
          document.getElementById("message").style.color = win;
        } else {
          var message = "Loser";
          document.getElementById("message").style.color = lose;
        }
        document.getElementById("message").textContent = message;
    });
});
