// Function to play Rock, Paper, Scissors
function playRockPaperScissors() {
    // 1. User makes a choice
    let userChoice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();

    // Validate user input
    if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
        alert("Invalid input! Please enter rock, paper, or scissors.");
        return; // Exit the function if input is invalid
    }

    // 2. Computer makes a choice
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3); // Random number between 0 and 2
    let computerChoice = choices[randomIndex]; // Get the computer's choice from the array

    // 3. Determine the winner
    let resultMessage;
    if (userChoice === computerChoice) {
        resultMessage = "It's a tie! You both chose " + userChoice + ".";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    ) {
        resultMessage = "You win! " + userChoice + " beats " + computerChoice + ".";
    } else {
        resultMessage = "You lose! " + computerChoice + " beats " + userChoice + ".";
    }

    // Display the result
    alert(resultMessage);
}

// Call the function to play the game
playRockPaperScissors();