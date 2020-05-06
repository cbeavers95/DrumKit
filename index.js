

// This function finds the first button in the document, adds an event listener
// and "listens" for the first parameter, which is a click. Once the click is
// heard, the second parameter, a javascript function is carried out as a response.
// document.querySelectorAll("button")[i].addEventListener("click", handleClick);


// These lines look for selectors with class drum and add an event listener to each

// Detecting Button Press
var numButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numButtons; i++ ) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        // this.style.color = "white";
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });
}



// Detecting Key Press
document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});



function makeSound(key) {
    switch (key) {
        case "w":
        // Be sure to change the variable name for each case!
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "a":
            var kickBass = new Audio('sounds/kick-bass.mp3');
            kickBass.play();
            break;
        case "s":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "d":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        default:
            console.log(buttonInnerHTML);

    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("."+ currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);

}
