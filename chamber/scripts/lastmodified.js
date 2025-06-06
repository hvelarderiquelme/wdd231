//Footer copyright and last modified information
const ElmtYear = document.querySelector("#current-year");
const ElmtLastModified = document.querySelector("#last-modified");
const currentYear = new Date();
const lastModified = document.querySelector("#last-modified");
const date = new Date(document.lastModified);
let year = currentYear.getFullYear();
const spanElmt = document.createElement("span");

document.querySelector('#current-year').innerHTML = '&COPY;' +  year + ' Medicine Hat Chamber Of Commerce';
document.querySelector('#last-modified').innerHTML = date;
ElmtYear.appendChild(spanElmt);
ElmtLastModified.appendChild(spanElmt);   



