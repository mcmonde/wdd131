const dateModified = new Date(document.lastModified);
document.querySelector("#lastModified").innerHTML = dateModified;

const visits = document.querySelector(".numberOfTimes");

let numberOfVisits = Number(window.localStorage.getItem("visit-times")) || 0;

if (numberOfVisits !== 0) {
    visits.textContent = `You have visited this site: ${numberOfVisits} times`;
} else {
    visits.textContent = `This is your first visit. 🥳 Welcome!`;
}

numberOfVisits++;

localStorage.setItem("visit-times", numberOfVisits);