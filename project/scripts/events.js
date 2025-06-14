import {events} from "../data/events.mjs"

const closeButton = document.querySelector("#modal button");
const modal = document.querySelector("#modal");
const hiddenName = document.querySelector("#hiddenName");
const hiddenDate = document.querySelector("#hiddenDate");
const hiddenTime = document.querySelector("#hiddenTime");

closeButton.addEventListener("click", () => {modal.close()});

const displayEvents = (events)=>{
    //call for each events in the event array
    events.forEach(event => {
        let section = document.createElement("section");
        let name = document.createElement("h3");
        let when = document.createElement("p");
        let what = document.createElement("p");
        let outcome = document.createElement("p");
        let input = document.createElement("input");
        

        name.innerHTML = `${event.event}`;
        when.innerHTML = `Date: ${event.date} <br> Time: ${event.time}`;
        what.innerHTML = `Activity: ${event.description}`;
        outcome.innerHTML = `Outcome: ${event.goal}`;
        input.setAttribute("type","submit");
        input.setAttribute("value","Register");
        input.setAttribute("id","registration");
        input.addEventListener("click", () => {showModalMessage(event)});
        
        section.appendChild(name);
        section.appendChild(when);
        section.appendChild(what);
        section.appendChild(outcome);
        section.appendChild(input);
        
        document.querySelector("#events").appendChild(section);
        
        
    });

}
displayEvents(events);

function showModalMessage(event){
    hiddenName.setAttribute("value", `${event.event}`);
    hiddenDate.setAttribute("value", `${event.date}`);
    hiddenTime.setAttribute("value",`${event.time}`);
    modal.showModal();
    
}


