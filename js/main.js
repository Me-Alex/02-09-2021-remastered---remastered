// let buttonHide = document.querySelector(".click-me-to-hide");
// let buttonShow = document.querySelector(".click-me-to-show");
// let navigation = document.querySelector(".nav");
// buttonHide.style.display = "none";

// buttonHide.onclick = () => {
//     navigation.style.display = "none";
//     // buttonShow.style.display = "inherit";
//     buttonHide.style.display = "none";

// }
// buttonShow.onclick = () => {
//     navigation.style.display = "flex";
//     // buttonShow.style.display = "none";
//     buttonHide.style.display = "inherit";
// }
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav");
const header = document.querySelector(".header");
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    if (header.style.opacity == "1")
        header.style.opacity = "0.8";
    else
        header.style.opacity = "1";

}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    header.style.opacity = "0.8";

}