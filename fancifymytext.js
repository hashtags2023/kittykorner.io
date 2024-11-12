/* fancifymytext.js */
// Function to display the "Hello, world!" alert
function displayHelloWorldAlert() {
    alert("Hello, world!");
}

// Function to make the text bigger
function makeTextBigger() {
    // Show an alert to confirm the button works
    alert("Button clicked to make text bigger!");

    // Access the text area and change the font size
    const textArea = document.getElementById("userInput");
    textArea.style.fontSize = "24pt";  // Change font size to 24pt
}

// Function to apply styles based on the radio button selection
function applyFancyStyle() {
    const textArea = document.getElementById("userInput");

    // Check which radio button is selected
    if (document.getElementById("fancyShmancy").checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else if (document.getElementById("boringBetty").checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

// Function to add "Moo" to the text
function addMoo() {
    const textArea = document.getElementById("userInput");
    let text = textArea.value.toUpperCase(); // Convert text to uppercase
    const sentences = text.split(".");  // Split by periods to handle sentences

    // Add "-Moo" to each sentence
    for (let i = 0; i < sentences.length - 1; i++) {
        sentences[i] = sentences[i].trim() + "-Moo";
    }
    textArea.value = sentences.join(". ");  // Join sentences back together
}

