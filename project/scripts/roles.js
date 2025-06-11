import {writing_roles} from "../data/writing-roles.mjs"
const writerCard = document.querySelector("#writer-cards");

function displayRoles(roles){
    roles.forEach(role => {

        let figure = document.createElement("figure");
        let title = document.createElement("h2");
        let description = document.createElement("p");
        let photo = document.createElement("img");

        title.innerHTML = `${role.role}`;
        photo.setAttribute("src",`${role.url}`);
        photo.setAttribute("alt", `${role.role}`);
        photo.setAttribute("loading", "lazy");
        description.innerHTML = `${role.description}`;

        figure.appendChild(title);
        figure.appendChild(photo);
        figure.appendChild(description);
        writerCard.append(figure);
        
    });
}

displayRoles(writing_roles);