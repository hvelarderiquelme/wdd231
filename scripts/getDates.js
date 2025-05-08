//Footer copyright and last modified information
const ElmtYear = document.querySelector("#current-year");
const ElmtLastModified = document.querySelector("#last-modified");
const currentYear = new Date();
const lastModified = document.querySelector("#last-modified");
const date = new Date(document.lastModified);
let year = currentYear.getFullYear();
const spanElmt = document.createElement("span");

document.querySelector('#current-year').innerHTML = '&COPY;' +  year + '&#x1F3B8;Horacio Velarde Riquelme &#x1F3B8; Canada';
document.querySelector('#last-modified').innerHTML = date;
ElmtYear.appendChild(spanElmt);
ElemtLastModified.appendChild(spanElmt);          