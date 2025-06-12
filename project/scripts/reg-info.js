const getString = window.location.search;
console.log(getString);

const regInfo = new URLSearchParams(window.location.search);
const eventInfo = document.querySelector(".reg-info");

eventInfo.innerHTML = `<p>Event: ${regInfo.get("event")}.</P>
<p>Date: ${regInfo.get("date")}</P>
<p>Time: ${regInfo.get("time")}</p>`;