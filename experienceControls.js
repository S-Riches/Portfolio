/*
1. user clicks button
2. button registers click and moves forward or backward
3. button appends the id to the url
4. function checks its possible to target to new position via given input
*/
function changeBlock(direction, numberOfBlocks) {
    let currentUrl = window.location.href;
    let currentBlockNumber = currentUrl.substring(currentUrl.length - 1);
    let newPathUrl = currentUrl.substring(0, currentUrl.length - 1);
    if (direction == "forward") {
        if (currentBlockNumber != numberOfBlocks) {
            currentBlockNumber++;
        }
    } else if (direction == "backward") {
        if (currentBlockNumber > 0) {
            currentBlockNumber--;
        }
    }

    window.location.replace(newPathUrl.concat(currentBlockNumber));
}
let leftButton = document.getElementById("leftButton");
let rightButton = document.getElementById("rightButton");

// assign the functions to buttons
rightButton.onclick = function () {
    changeBlock("forward", 3);
};
leftButton.onclick = function () {
    changeBlock("backward", 3);
};
