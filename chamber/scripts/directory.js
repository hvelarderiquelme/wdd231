const hamburgerButton = document.querySelector("#hamButton");
const navElement = document.querySelector(".menuLinks");

hamburgerButton.addEventListener("click", () => {
    navElement.classList.toggle("open");
});