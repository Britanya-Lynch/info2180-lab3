
// Exercise 1
// Adding an event handler to execute functions when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Storing the elements in div called board into (square)
    let squares = document.querySelectorAll("#board div");

    // The square function is for each element in div
    squares.forEach(function (square) {
            square.classList.add("square");  // Adding the class
            console.log("Square styled:", square);  // To track the progress of each square being logged to be styled
    });
});




// Exercise 2
let playerX = "X";  // Initializing player X
let playerO = "O";  // Initializing player O
let currentPlayer = playerX;  // Start the game with player X
let gameBoard = Array(9).fill(null);  // Initialize game board with 9 nulls

// Selects all the elements with div id "board", then goes through each element in varying positions
document.querySelectorAll("#board div").forEach(function (square, index) {
    square.addEventListener("click", function () { // Adds a click event listener function so it can address the square on command
        if (gameBoard[index] === "") {  // If the square is empty then ..
            square.textContent = currentPlayer; // It will take the content inside the square as the value to represent the current player
            square.classList.add(currentPlayer); // It will add the value used to the square
            gameBoard[index] = currentPlayer; // Tracks the moves being made by current player
            
            // The code checks if the current player is playerX. If true, it switches the currentPlayer to playerO. Otherwise, 
            // it sets the currentPlayer back to playerX, ensuring the players alternate between X and O.
            if (currentPlayer === playerX) {
                currentPlayer = playerO;  // If currentPlayer is 'X', set it to 'O'
            } else {
                currentPlayer = playerX;  // If currentPlayer is not 'X' (thus it's 'O'), set it to 'X'
            }
            
        }
    });
});



// Excerise 3
// Function to change style when mouse hovers over square
document.addEventListener("DOMContentLoaded", function () {
    let squares = document.querySelectorAll("#board div");
  
    // Add event listeners for hover effect
    squares.forEach(function (square) {
      square.addEventListener("mouseover", handleMouseOver);   
      square.addEventListener("mouseout", handleMouseOut);    
    });
  });
  
  // Function to handle hover (mouseover) effect
  function handleMouseOver(event) {
    const gameSquare = event.target;  // Get the square that triggered the event
    // Add hover class only if the square is empty
    if (gameSquare.textContent === "") {
      gameSquare.classList.add("hover");
    }
  }
  
  // Function to handle mouseout effect (removing hover class)
  function handleMouseOut(event) {
    const gameSquare = event.target;  // Get the square that triggered the event
    gameSquare.classList.remove("hover");
  }
  
  

// Exercise 4 
let gameState = Array(9).fill(null), isXTurn = true; 9  // squares and each is being tracked for turns

// Define all possible winning combinations (rows, columns, and diagonals) 
const winningCombinations = [
  [0, 1, 2], /* Top row */         [3, 4, 5],/*Middle row*/         [6, 7, 8],// Bottom row
  [0, 3, 6], /* First column*/     [1, 4, 7], /*Second column*/     [2, 5, 8], // Third column
  [0, 4, 8], /*Left diagonal*/     [2, 4, 6]  // Right diagonal
];

// Wait for the DOM to fully load before accessing elements
document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll("#board div"); // Select all squares (div elements) in the board

  // Loop through each square and assign a click event
  squares.forEach((square, i) => {
    square.onclick = () => {
      // If the square is already filled (gameState[i] is not null) or the game is already won, do nothing
      if (gameState[i] || checkForWinner()) return;
      square.textContent = gameState[i] = isXTurn ? "X" : "O";   // Set the square's text content to 'X' or 'O' depending on the player's turn
      isXTurn = !isXTurn;  // Switch turns: if it was 'X's turn, now it's 'O's, and vice versa
      checkForWinner(); // Check if the current move resulted in a win
    };
  });
});

// Function to check if there's a winner
// This function looks through all the winning combinations and checks if any of them are satisfied
function checkForWinner() {
  // Finding the winning condition
  const winner = winningCombinations.find(([a, b, c]) => 
    gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]);

  // If a winner is found (the winning combination exists)
  if (winner) {
    const winnerPlayer = gameState[winner[0]]; // Get the winning player ('X' or 'O')
    const statusDiv = document.getElementById('status'); // Update the status div with a winning message and add the 'you-won' class for styling
    statusDiv.textContent = `Congratulations! ${winnerPlayer} is the Winner!`;
    statusDiv.classList.add('you-won');

    // Disable further clicks on the board once there's a winner
    document.querySelectorAll("#board div").forEach(sq => sq.style.pointerEvents = "none");

    return true; // Return true to indicate a winner was found
  }
  return false; // If none isnt found
}



// Exercise 5
// Restart the game
document.getElementById('Restart').addEventListener('click', () => {
    // Reset status message
    const statusMsg = document.getElementById('status');
    statusMsg.textContent = 'Move your mouse over a square and click to play an X or an O.';
    statusMsg.classList.remove('you-won'); // Removing 'you-won' class

    // Reset game state and player turn
    boardState = Array(9).fill(null); // Clear the board state
    isXPlayer = true; // Setting X as the first player

    // Reset each square's content and re-enable clicks
    document.querySelectorAll('#board div').forEach(square => {
        square.textContent = ''; // Clear square content
        square.className = ''; // Remove all classes from the square
        square.style.pointerEvents = 'auto'; 
    });
});

