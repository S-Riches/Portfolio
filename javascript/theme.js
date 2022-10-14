// Legacy code atm, gonna keep it here until i get the new way to change modes working
// function changeTheme() {
//     let Theme = document.body.className;
//     if (Theme === "lightMode") {
//         document.body.className = "darkMode";
//         localStorage.setItem("theme", "darkMode");
//         console.log(Theme);
//     } else {
//         localStorage.setItem("theme", "lightMode");
//         document.body.className = "lightMode";
//         console.log(Theme);
//     }
// }
// // using the browsers local storage we can remember what the user selected
// function checkIfThemeChanged() {
//     if (localStorage.getItem("theme") === "lightMode") {
//         document.body.className = "lightMode";
//         console.log("lightMode");
//     } else if (localStorage.getItem("theme") === "darkMode") {
//         document.body.className = "darkMode";
//         document.getElementById("checkbox").checked = true;
//         console.log("darkMode");
//     }
// }
// window.onload = checkIfThemeChanged();
