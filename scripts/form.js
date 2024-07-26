document.addEventListener('DOMContentLoaded', () => {
    // Update the current year and last modified date
    const currentYear = document.querySelector("#currentyear");
    const year = new Date().getFullYear();
    currentYear.innerHTML = year;

    const lastModifiedDate = document.querySelector("#lastModified");
    lastModifiedDate.innerHTML = new Date(document.lastModified);

    // Populate the product dropdown
    const select = document.querySelector("#products");
    const products = [
        { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
        { id: "fc-2050", name: "power laces", averagerating: 4.7 },
        { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
        { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
        { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 },
    ];

    for (let x of products) {
        let option = document.createElement("option");
        option.value = x.id;
        option.innerHTML = x.name.toUpperCase();
        option.classList.add("option-style");
        select.appendChild(option);
    }

    // Form validation for star rating
    const form = document.querySelector('.form-container');
    if (form) {
        const stars = form.querySelectorAll('input[name="stars"]');
        const starError = document.getElementById('star-error');

        form.addEventListener('submit', (event) => {
            let isValid = false;
            for (const star of stars) {
                if (star.checked) {
                    isValid = true;
                    starError.textContent = '';
                    break;
                }
            }
            if (!isValid) {
                event.preventDefault();
                starError.textContent = 'Please select a star rating.';
            }

            console.log('Stars:', stars);
        });
    } else {
        console.error('Form element not found.');
    }
});
