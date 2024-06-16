const currentYear = document.querySelector("#currentyear");
const year = new Date().getFullYear();

const lastModfiedDate = document.querySelector("#lastModified");
currentYear.innerHTML = year;
lastModfiedDate.innerHTML = new Date(document.lastModified);