// simple js function to allow for the menu to open and close
function dropDownMenu() {
    let menu = document.getElementById("links");
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.animation = "fadeIn 1s";
        menu.style.display = "flex";
    }
}
