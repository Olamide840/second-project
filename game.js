let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;
function checkGuess() {
    let userGuess = parseInt(document.getElementById("guessInput").value);
    let message = document.getElementById("message");
    let attemptsLeft = document.getElementById("attempts");
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = "Please enter a valid number between 1 and 100.";
        return;
    }
    attempts--;
    attemptsLeft.textContent = attempts;
    if (userGuess === randomNumber) {
        message.textContent = `Congratulations! ${randomNumber} is correct! You Won! You are Amazing.`;
        message.style.color = "green";
    } else if (attempts === 0) {
        message.textContent = `Uhnn! Game Over. The number was ${randomNumber}. Try Again.`;
        message.style.color = "red";
    } else {
        message.textContent = userGuess > randomNumber ? "Too high! Try again." : "Too Low! Try again.";
    }
}
 function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 10;
    document.getElementById("guessInput").value = "";
    document.getElementById("message").textContent = "";
    document.getElementById("attempts").textContent = attempts;
 }