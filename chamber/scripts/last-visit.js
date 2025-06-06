localStorage.setItem("numVisits-ls",0);// reset the coount to 0
/*display element variabke*/
const msToDays = 86400000;
const visits = document.querySelector("#visits");
const h2 = document.querySelector("#visits h2");
const p = document.querySelector("#visits p");
const closeButton = document.querySelector("#visits button");

closeButton.addEventListener("click", () => {visits.close()});
//calculate future days for testing purposes
//  const current = Date.now();
//  const futureDays = 1;//change the number of days into the future
//  const futureTime = current + (futureDays * msToDays);

/*This gets the stored value of the numVisits-ls KEY. If it doesn't exist, then numVisits variable is given 0 as value.*/
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;


/*determine if this is the first visit*/
console.log(numVisits);
if(numVisits !== 0){
    localStorage.setItem("now", Date.now());
    const now = localStorage.getItem("now");
    const firstVisit = localStorage.getItem("firstVisit");
    let numberOfDays;

    // numberOfDays = (futureTime - firstVisit)/msToDays;//to simulate access to page at a future day
    numberOfDays = (now - firstVisit)/msToDays;
    modalVisit(numberOfDays, numVisits); 
}
else{
    
    localStorage.setItem("firstVisit", Date.now());
    modalVisit(0,1);
    
}

/*Increment the number of visits by one.*/
numVisits++;

/*Store the no of visits total in local storage*/
localStorage.setItem("numVisits-ls", numVisits);

function modalVisit(days, numVisits){
    console.log("days: " + days);
    console.log("numVisits: " + numVisits);
    
    if((days == 0) && (numVisits == 1)){
        h2.innerHTML = `Welcome!`;
        p.innerHTML = `Let us know if you have any questions.`;
    }
    else if(parseInt(days) < 1){
        h2.innerHTML = `Back so soon!  Awesome!`;
        p.innerHTML = `Close this window to continue.`;
    }else if(parseInt(days) == 1){
            h2.innerHTML = `You last visited ${parseInt(days)} day ago.`;
            p.innerHTML = `Close this window to continue.`;
        }
        else
        {
            h2.innerHTML = `You last visited ${parseInt(days)} days ago.`;
            p.innerHTML = `Close this window to continue.`;
        }
    
    visits.showModal();
};
