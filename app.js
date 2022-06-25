//query selector variables go here 👇
let hamburgerMenu = document.getElementById("hamburger-menu");
let navMenu = document.getElementById("nav-menu");

//global variables go here 👇

//event listeners go here 👇
hamburgerMenu.addEventListener("click", displayMenu);

//functions and event handlers go here 👇
function displayMenu() {
  if (window.getComputedStyle(navMenu).display === "none") {
    navMenu.style.display = "flex";
    hamburgerMenu.style.color = "cornflowerblue";
    setInterval(() => {
      navMenu.style.display = "none";
      hamburgerMenu.style.color = "black";
    }, 10000);
  } else {
    navMenu.style.display = "none";
    hamburgerMenu.style.color = "black";
  }
}
