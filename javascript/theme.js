// default modes, to do comparison with - will try migrate this to a separate json file
let lightMode = {
    textColour: "#302f30",
    backgroundColour: "#c1c1c1",
    altBackgroundColour: "#ede7e3",
    hoverColour: "#5c5b5b",
};
let darkMode = {
    textColour: "#c1c1c1",
    backgroundColour: "#302f30",
    altBackgroundColour: "#171717",
    hoverColour: "#fff",
};
// reads the colours from the root in the css file, then returns a json object with all the variable names and color values
function getColours() {
    let root = getComputedStyle(document.querySelector(":root"));
    // .replace(/\s/g, "") is a way of removing spaces, as for some reason the get property value is returning a space on the first call.
    //  / is an exit character, \s means spaces, tabs and columns, and the g is the global tag meaning all occurrences in this string
    let textColour = root.getPropertyValue("--textColour").replace(/\s/g, "");
    let backgroundColour = root
        .getPropertyValue("--backgroundColour")
        .replace(/\s/g, "");
    let altBackgroundColour = root
        .getPropertyValue("--altBackgroundColour")
        .replace(/\s/g, "");
    let hoverColour = root.getPropertyValue("--hoverColour").replace(/\s/g, "");
    return JSON.stringify({
        textColour,
        backgroundColour,
        altBackgroundColour,
        hoverColour,
    });
}
// sets the new colours with the given parameters
function setColours(newColours) {
    newColours = JSON.parse(newColours);
    let root = getComputedStyle(document.querySelector(":root"));
    for (let i = 0; i < Object.values(newColours).length; i++) {
        let newValue = Object.values(newColours)[i];
        let key = Object.keys(newColours)[i];
        document.documentElement.style.setProperty(
            `--${key}`,
            (`--${key}`, `${newValue}`)
        );
    }
}
// function to run on window load to see if the user has already set the theme
function checkIfThemeChanged() {
    if (localStorage.getItem("theme") === "lightMode") {
        setColours(JSON.stringify(lightMode));
        console.log("lightMode");
    } else if (localStorage.getItem("theme") === "darkMode") {
        setColours(JSON.stringify(darkMode));
        document.getElementById("checkbox").checked = true;
        console.log("darkMode");
    }
}

// function that runs when the user checks the button.
function changeTheme() {
    let currentColours = JSON.parse(getColours());
    if (JSON.stringify(currentColours) == JSON.stringify(lightMode)) {
        setColours(JSON.stringify(darkMode));
        localStorage.setItem("theme", "darkMode");
    } else {
        setColours(JSON.stringify(lightMode));
        localStorage.setItem("theme", "lightMode");
    }
}

window.onload = checkIfThemeChanged();
