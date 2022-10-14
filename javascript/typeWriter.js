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
        jobTitle : "Junior Software Dev"
    };`;
    let outStr = "";
    for (let i = 0; i < text.length; i++) {
        outStr += text[i];
        terminal.innerText = moveToEnd("_", outStr);
        await sleep(40);
    }
}

// TODO RIGHT HERE
// // Makes the cursor blink
// async function cursorBlink() {
//     let cursor = document.getElementById;
// }

//fades in the header element and GitHub logo to this page
async function fadeIn() {
    let logo = document.getElementById("gitHubLogo");
    let image = document.createElement("img");
    let mobileHeader = document.getElementById("mobileHeader");
    let header = document.getElementById("header");
    image.setAttribute(
        "src",
        "https://cdn.icon-icons.com/icons2/2368/PNG/512/github_logo_icon_143772.png"
    );
    image.setAttribute("alt", "github link");
    logo.appendChild(image);
    logo.style.opacity = "0";
    if (screen.width < 768) {
        mobileHeader.style.opacity = "0";
        await typeWriter();
        mobileHeader.style.transition = "0.5s";
        mobileHeader.style.opacity = "1";
    } else {
        header.style.opacity = "0";
        await typeWriter();
        header.style.transition = "0.5s";
        header.style.opacity = "1";
    }
    // wait until the text has been printed to screen
    logo.style.transition = "0.5s";
    logo.style.opacity = "1";
}

fadeIn();
