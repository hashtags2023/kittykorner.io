// fancymytext.js
function makeTextBigger() {
    const textArea = document.getElementById("userInput");
    textArea.style.fontSize = "24pt";
}

function applyFancyStyle() {
    const textArea = document.getElementById("userInput");
    if (document.getElementById("fancyShmancy").checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function addMoo() {
    const textArea = document.getElementById("userInput");
    let text = textArea.value.toUpperCase();
    const sentences = text.split(".");
    for (let i = 0; i < sentences.length - 1; i++) {
        sentences[i] = sentences[i].trim() + "-Moo";
    }
    textArea.value = sentences.join(". ");
}

