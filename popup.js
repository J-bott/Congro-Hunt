
const popUps = document.getElementsByClassName("popup");
const closeButton = document.getElementsByClassName("close-button");
// popUp bottom corner counter
let count = 0;

window.addEventListener("load", function(){
    var preloader = document.getElementById("preloader");
    preloader.style.display = "none";
})

function popUp(){
  // show popups with current exhibition
    popUps[count].style.display = 'block';
}


document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with the specified class
    const closeButton = document.getElementsByClassName('close-button');

    // Loop through all elements with the class
    for (let i = 0; i < closeButton.length; i++) {
        // Add event listener to each button
        closeButton[i].addEventListener("click", popDown);
    }

    // Define the function to be triggered
    function popDown(){
        for (var i = 0; i < popUps.length; i++) {
            popUps[i].style.display = 'none';
        }

    }
});


