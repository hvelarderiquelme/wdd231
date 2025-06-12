// const getString = window.location.search;
// console.log(getString);

const regInfo = new URLSearchParams(window.location.search);
const eventInfo = document.querySelector(".reg-info");

eventInfo.innerHTML = `<p>Event: ${regInfo.get("event")}.</p>
<p>Date: ${regInfo.get("date")}</p>
<p>Time: ${regInfo.get("time")}</p>
<p>Your name: ${regInfo.get("first")} ${regInfo.get("last")}</p>
<h2>Thank you, we will see you there!</h2>`;