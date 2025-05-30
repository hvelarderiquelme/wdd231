const directory = "data/members.json";
const cards = document.querySelector("#cards");
let numberOfSpotlights = Math.random() * 2 + 2;
// console.log(parseInt(numberOfSpotlights));
async function getMembersData(){
    const response = await fetch(directory);
    const data = await response.json();
    displayMembers(data.members);
    
}

const displayMembers = (members) =>{
    let name = "";
    let numCards = 0;
   
    // console.log(parseInt(numberOfSpotlights));
    while(numCards < parseInt(numberOfSpotlights)){
    // for(i=1; i<=parseInt(numberOfSpotlights); i++){
        console.log("spots=" + parseInt(numberOfSpotlights));
        let index = Math.random() * 7;
        console.log("index=" + parseInt(index));
        let arrayElement = parseInt(index);
        let card = document.createElement("section");
        let companyName = document.createElement("h2");
        let address = document.createElement("h4");
        let phoneNumber = document.createElement("h4");
        let url = document.createElement("h4");
        let logo = document.createElement("img");
        //  console.log('i=' + i);
        
      
        // if(members[arrayElement].level == 1){
        //     i = i-1;
    
        // }

        if(members[arrayElement].level != 1){
            if(name != members[arrayElement].name){
            
                companyName.textContent = `${members[arrayElement].name}`;
                address.textContent = `${members[arrayElement].address}`;
                phoneNumber.textContent = `Phone: ${members[arrayElement].phone}`;
                url.textContent = `Website: ${members[arrayElement].url}`;
                logo.setAttribute("src", members[arrayElement].image);
                logo.setAttribute("alt", members[arrayElement].name);
                logo.setAttribute("loading", "lazy");

                card.appendChild(companyName);
                card.appendChild(logo);
                card.appendChild(address);
                card.appendChild(phoneNumber);
                card.appendChild(url);

                document.querySelector("#cards").appendChild(card);
                name = members[arrayElement].name;
            
                numCards++;   
                console.log("numCards="+ numCards);
            }
        }
         
 
    }
   
    
}

getMembersData();