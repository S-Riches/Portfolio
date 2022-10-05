/*
1. user clicks button
2. button registers click and moves forward or backward
3. button appends the id to the url
*/
function changeBlock(direction) {
    let currentUrl = window.location.href;
    let currentBlockNumber = currentUrl.substring(currentUrl.length - 1);
    let newPathUrl = currentUrl.substring(0, currentUrl.length - 1);
    // TODO : need to ensure that there is a check, of some kind to ensure that there is a block for the function to go to.
    if (direction == "forward") {
        currentBlockNumber++;
    } else if (direction == "backward") {
        currentBlockNumber--;
    } else {
        console.log("error?");
    }
    console.log(newPathUrl.concat(currentBlockNumber));
    window.location.replace(newPathUrl.concat(currentBlockNumber));
}
let leftButton = document.getElementById("leftButton");
let rightButton = document.getElementById("rightButton");
// assign the functions to buttons
rightButton.onclick = function () {
    changeBlock("forward");
};
leftButton.onclick = function () {
    changeBlock("backward");
};
