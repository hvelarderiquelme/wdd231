const openButton = document.querySelector("#openButton");
const dialogBox = document.querySelector("#dialogBox");
const closeButton = document.querySelector("#closeButton");
const dialogBoxText = document.querySelector("#dialogBox div");

//Show the dialog button opens the dialog modally
openButton1.addEventListener("click", ()=>{
    dialogBox.showModal();
    dialogBoxText.innerHTML = `One apple has 95 calories`;
});

openButton2.addEventListener("click", ()=>{
    dialogBox.showModal();
    dialogBoxText.innerHTML = `One orange has 105 calories`;
});

openButton3.addEventListener("click", ()=>{
    dialogBox.showModal();
    dialogBoxText.innerHTML = `One banana has 45 calories`;
});

//Close dialog box
closeButton.addEventListener("click", () =>{
    dialogBox.close();
});