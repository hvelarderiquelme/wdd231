import {events} from "../data/events.mjs"

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
        outcome.innerHTML = `You will learn to ${event.goal}`;
        

        section.appendChild(name);
        section.appendChild(when);
        section.appendChild(what);
        section.appendChild(outcome);
        
        document.querySelector("#events").appendChild(section);
        
        
    });

}
displayEvents(events);

