// const getString = window.location.search;
// console.log(getString);

const registrationDate = new Date();
const personInfo = new URLSearchParams(window.location.search);
const personalInfo = document.querySelector(".information");

personalInfo.innerHTML = `<p>Name: ${personInfo.get("first")}</p>
<p>Lastname: ${personInfo.get("last")}</p>
<p>E-mail: ${personInfo.get("email")}</p>
<p>Phone Number: ${personInfo.get("phone")}
<p>Company: ${personInfo.get("company")}
<p>Registered on: ${registrationDate}`;