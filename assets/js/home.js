/**
 * SCRIPTS RELATED TO HOME PAGE
 */
 var employer_sureButton = {
    displayText: "Sure!",
    value: "employer_sure",
    link: "/projects.html",
}

var employer_tiredButton = {
    displayText: "No, I'm kind of tired...",
    resultingDialogue: "Oh no! Here's a cat drinking coffee, perhaps it will give you some energy.",
    value: "employer_tired",
    children: [],
}

 var employerButton = {
    displayText: "A curious employer",
    resultingDialogue: "Do you want to check out my projects?",
    value: "employer",
    children: [employer_sureButton, employer_tiredButton],
}

var fanButton = {
    displayText: "An adoring fan",
    resultingDialogue: "I'm flattered!",
    value: "fan",
    children: [],
}

var strangerOKButton = {
    displayText: "Okay!",
    value: "stranger_ok",
    link: "/about.html"
}

var stranger_SureButton = {
    displayText: "If you insist...",
    value: "stranger_sure",
    link: "/about.html",
}

var strangerAnarchyButton = {
    displayText: "You can't tell me what to do! You're just pixels on a screen!",
    resultingDialogue: "Fair enough, but you're currently a bunch of button clicks on my end. We can still be friends :)",
    value: "stranger_doesnt_take_orders",
    children: [stranger_SureButton],
}

var strangerButton = {
    displayText: "A mysterious stranger",
    resultingDialogue: "Don't be a stranger! Read my About page :)",
    value: "fan",
    children: [strangerOKButton, strangerAnarchyButton],
}

var nextButton = {
    displayText: "Hi Naoreen!",
    resultingDialogue: "Choose your character:",
    value: "next",
    children: [employerButton, fanButton, strangerButton],
}

function handleNextButton() {
    setDialogBoxText(nextButton.resultingDialogue);
    setButtons(nextButton.children);
};

function setButtons(buttons) {
    document.getElementById("optionButtons").innerHTML = "";
    buttons.forEach(button => {
        let newDomButton = document.createElement("button");
        newDomButton.type = "button";
        newDomButton.value = button.value;
        newDomButton.textContent = button.displayText;
        newDomButton.classList.add("optionButton");
        newDomButton.onclick = function() {
            handleOptionButton(button);
        };
        document.getElementById("optionButtons").appendChild(newDomButton);
    });
}

function handleOptionButton(chosenButton) {
    if (chosenButton.resultingDialogue) {
        setDialogBoxText(chosenButton.resultingDialogue);
    }
    if (chosenButton.children) {
        setButtons(chosenButton.children);
    }
    if (chosenButton.link) {
        window.location.href = chosenButton.link;
    }

    // bespoke
    if (chosenButton.value == "employer_tired") {
        document.getElementById("cat-drinking-coffee").classList.remove("spriteBox--hidden");
        document.getElementById("cat-drinking-coffee").classList.add("spriteBox");
    }
    
}

function setDialogBoxText(text) {
    document.getElementById("literalDialogueBox__text").innerText = text;
}
