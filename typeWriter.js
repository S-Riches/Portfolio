// using a promise to work as a sleep method to allow the user to see whats being input
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// function to move the cursor to the end of the page
function moveToEnd(char, string) {
    let pos = string.indexOf(char);
    let moveToEndStr = string.substring(pos, pos + 1);
    let x = string.concat(moveToEndStr);
    if (x[0] === "_") {
        x = String(x).slice(1);
    }
    return x;
}

// function to put the text into the terminal box to appear as someone is actually typing it
async function typeWriter() {
    const terminal = document.getElementById("terminalText");
    const text = `_let name = {
        firstName : "Sam",
        lastName : "Riches",
        jobTitle : "Junior Software developer"
    };`;
    let outStr = "";
    for (let i = 0; i < text.length; i++) {
        outStr += text[i];
        terminal.innerText = moveToEnd("_", outStr);
        await sleep(40);
    }
}

typeWriter();
