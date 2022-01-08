/**
 * SCRIPTS RELATED TO HOME PAGE
 */

// Map State to numbers
const HELLO = 0;
const WHO_ARE_YOU = 1;
const PICKED_EMPLOYER = 2;
const PICKED_STRANGER = 3;
const PICKED_FAN = 4;

currentState = HELLO;

function handleNextButton() {
    if (currentState == HELLO) {
        // update state
        currentState = WHO_ARE_YOU;

        // hide the "next" button
        document.getElementById("literalDialogueBox__nextButton").style.display = "none";

        // update the text in the dialog box
        setDialogBoxText("Choose your character:");

        // show three options
        document.getElementById("optionButtons").classList.replace("optionButtons--hidden","optionButtons--visible")
    }
};

function handleOptionButton(chosenButton) {
    if (currentState == WHO_ARE_YOU) {
        if (chosenButton == "employer") {
            setDialogBoxText("Do you want to check out my projects?")
        }
        else if (chosenButton == "fan") {
            setDialogBoxText("I'm flattered!")
        }
        else if (chosenButton == "stranger") {
            setDialogBoxText("Don't be a stranger! Check out my About page :)");
        }
    }
}

function setDialogBoxText(text) {
    document.getElementById("literalDialogueBox__text").innerText = text;
}
