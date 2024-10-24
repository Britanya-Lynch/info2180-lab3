// Global variables 
let boardState = Array(9).fill(null);  // Tracks the state of the board
let isXPlayerTurn = true;  // Track whose turn it is 



// Exercise 1 
// Adding an event handler to execute functions when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll("#board div");   // Storing the elements in div called board into (square)

    // Adding the 'square' class with click events
    squares.forEach((square, index) => {
        square.classList.add("square");  // Add 'square' class for styling
        square.addEventListener("click", () => handleSquareClick(square, index));  // Add click event for handling player moves
        square.addEventListener("mouseover", handleMouseOver);  // Add hover effect
        square.addEventListener("mouseout", handleMouseOut);  // Remove hover effect
    });

    // Attach event listener for the New Game button
    const newGameButton = document.querySelector(".btn");
    newGameButton.addEventListener("click", resetGame);  // Reset the game when "New Game" button is clicked
});



// Exercise 2 
// Function to handle clicks on squares
function handleSquareClick(square, index) {
    // Check if the square is empty and game is not won yet
    if (!boardState[index] && !checkForWinner()) {
        square.textContent = isXPlayerTurn ? "X" : "O";  // Mark the square with X or O
        boardState[index] = isXPlayerTurn ? "X" : "O";  // Update the board state
        square.classList.add(isXPlayerTurn ? "X" : "O");  // Add the player's class for styling

        isXPlayerTurn = !isXPlayerTurn;  // Switch to the other player's turn

        if (checkForWinner()) {
            const statusDiv = document.getElementById('status');
            statusDiv.textContent = `Congratulations! ${boardState[index]} is the Winner!`;  // Display winner message
            statusDiv.classList.add('you-won');  // Add 'you-won' class for styling
        }
    }
}



// Exercise 3 
// Function to handle hover effect when the mouse enters or leaves a square
function handleMouseOver(event) {
    const square = event.target;  // Get the square that triggered the event
    if (!square.textContent) {  // Only add hover effect if the square is empty
        square.classList.add("hover");
    }
}

function handleMouseOut(event) {
    const square = event.target;  // Get the square that triggered the event
    square.classList.remove("hover");  // Remove hover class when the mouse leaves
}



// Exercise 4 
// Function to check for a winner by comparing the board state to winning combinations
function checkForWinner() {
    const winningCombinations = [
        [0, 1, 2], /* Top row */         [3, 4, 5],/*Middle row*/         [6, 7, 8],// Bottom row
        [0, 3, 6], /* First column*/     [1, 4, 7], /*Second column*/     [2, 5, 8], // Third column
        [0, 4, 8], /*Left diagonal*/     [2, 4, 6]  // Right diagonal
    ];
   
    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
            return true;  // A winning combination is found
        }
    }
    return false;  // No winner found yet
}



// Exercise 5 
// Function to reset the game when "New Game" button is clicked
function resetGame() {
    // Reset game state
    boardState = Array(9).fill(null);  // Clear the board state
    isXPlayerTurn = true;  // Set turn back to player X

    // Reset the status message
    const statusDiv = document.getElementById('status');
    statusDiv.textContent = 'Move your mouse over a square and click to play an X or an O.';  // Reset the status message
    statusDiv.classList.remove('you-won');  // Remove the 'you-won' class

    // Clear each square's content and classes, re-enable clicks
    document.querySelectorAll('#board div').forEach(square => {
        square.textContent = '';  // Clear the text content
        square.className = 'square';  // Reset the class to 'square'
    });
}



// Exercise 6 
// Ensure users cannot change the value of squares that already have an X or O
document.querySelectorAll("#board div").forEach((square, index) => {
    square.addEventListener("click", () => {
        if (boardState[index]) return;  // Prevent the user from changing a square that is already filled
        handleSquareClick(square, index);  // Otherwise, allow the move
    });
});
























