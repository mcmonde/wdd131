document.addEventListener('DOMContentLoaded', () => {

    const dateModified = new Date(document.lastModified);
    const formattedDate = dateModified;
    document.querySelector("#lastModified").textContent = `Last Modified: ${formattedDate}`;

    const visitsElement = document.querySelector(".numberOfTimes");
    let numberOfVisits = Number(localStorage.getItem("visit-times")) || 0;

    if (numberOfVisits > 0) {
        visitsElement.textContent = `You have visited this site ${numberOfVisits} times.`;
    } else {
        visitsElement.textContent = `This is your first visit. Welcome!`;
    }

    numberOfVisits++;
    localStorage.setItem("visit-times", numberOfVisits);
});
