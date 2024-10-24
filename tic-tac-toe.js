// Adding an event handler to execute functions when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Storing the elements in div called board into (square)
    let squares = document.querySelectorAll("#board div");

    // The square function is for each element in div
    squares.forEach(function (square) {
            square.classList.add("square");  // Adding the
            console.log("Square styled:", square);  // To track the progress of each square being logged to be styled
    });
});
