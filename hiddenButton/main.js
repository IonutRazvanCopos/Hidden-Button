let winnerIndex = Math.floor(Math.random() * 3);

let buttons = document.querySelectorAll("button");
const message = document.getElementById("message");

buttons.forEach(function(button, index) {
    button.addEventListener("click", function() {
        if (index === winnerIndex) {
          message.textContent = "Winner";
          message.style.color = "green";
        } else {
          message.textContent = "Loser";
          message.style.color = "red";
        }
    });
});
