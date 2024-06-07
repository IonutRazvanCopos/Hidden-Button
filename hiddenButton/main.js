var winnerIndex = Math.floor(Math.random() * 3);

var buttons = document.querySelectorAll("button");

buttons.forEach(function(button, index) {
    button.addEventListener("click", function() {
        var message = index === winnerIndex ? "Winner" : "Loser";
        if (message === "Loser") {
            document.getElementById("message").style.color = "red";
        } else {
            document.getElementById("message").style.color = "green";
        }
        document.getElementById("message").textContent = message;
    });
});