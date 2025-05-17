const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#cards");

gridbutton.addEventListener("click", () =>{
    display.classList.add("cards");
    display.classList.remove("list");
});

listbutton.addEventListener("click", () =>{
    display.classList.add("list");
    display.classList.remove("cards");
});