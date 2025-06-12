const myKey = "27368332-a4f0-4002-821c-7a564758213e";
const url = `https://content.guardianapis.com/search?api-key=${myKey}`;


async function apiFetch() {
    try{
        const response = await fetch(url);
        if (response.ok){
            const articles = await response.json();
            console.log(articles); //testing only
            displayNews(articles); //uncomment when ready
        }else{
            throw Error(await response.text());
        }
    }catch (error){
        console.log(error);
    }
}

function displayNews(articles){
    //console.log(articles.response.results);
    for(i=0;i<10;i++){      
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
// displayNews();