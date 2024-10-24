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
  
  