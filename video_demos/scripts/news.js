import {key} from "../data/key.mjs";

const url = `https://content.guardianapis.com/search?api-key=${key}`;

async function apiFetch(){
    try{
        const response = await fetch(url);
        if(response.ok){
            const articles = await response.json();
            //console.log(articles);
            displayNews(articles);
        }else{
            throw Error(error.text());
        }
    }catch(error){
        console.log(error);
    }
}

function displayNews(articles){
    //console.log(articles.response.results);
    for(let i=0;i<10;i++){      
        let title = document.createElement("h2");
        let category = document.createElement("h3");
        let link = document.createElement("a");
        let section = document.createElement("section");

        title.innerHTML = articles.response.results[i].webTitle    
        category.innerHTML = `Category: ${articles.response.results[i].sectionName}`;
        link.innerHTML = `Click Here To Read Article`
        link.setAttribute("href",`${articles.response.results[i].webUrl}`);
        section.appendChild(title);
        section.appendChild(category);
        section.appendChild(link);

        document.querySelector("#news").appendChild(section);
        
    }
     
};

apiFetch();
