const joinInfo = new URLSearchParams(window.location.search);
const memberInfo = document.querySelector(".member-info");

memberInfo.innerHTML = `<p>Name: ${joinInfo.get("first")} ${joinInfo.get("last")}</p>
<p>E-mail: ${joinInfo.get("email")}</p>
<p>Phone: ${joinInfo.get("phone")}</p>
<p>Registered on: ${joinInfo.get("time-stamp")}</p>`;