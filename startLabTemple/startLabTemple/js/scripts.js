import { temples } from "../data/temples.js";


import { url } from "../data/temples.js";
console.log(url);

const showHere = document.querySelector('#showHere');
const mydialog = document.querySelector("#mydialog");
const myTitle = document.querySelector("#mydialog h2");
const myclose = document.querySelector("#mydialog button");
const myinfo = document.querySelector("#mydialog p");

myclose.addEventListener("click", () => mydialog.close());

function displayItems(data){
    
    data.forEach(temple => {
        console.log(temple);
        const photo = document.createElement("img");
        photo.src = `${url}${temple.path}`;
        photo.alt = temple.name;
        photo.addEventListener("click", () => {showStuff(temple)});
        showHere.appendChild(photo);
    });
}

displayItems(temples);

function showStuff(temple){
    myTitle.innerHTML = temple.name;
    myinfo.innerHTML = `Dedicated ${temple.dedicated} by ${temple.person} as temple number ${temple.number}`;
    mydialog.showModal();
}