const navMenu = document.getElementById('navMenu');
const hamburgerMenu = document.getElementById('hamburgerMenu');

hamburgerMenu.addEventListener('click', function () {
    navMenu.classList.toggle('active');
});

const currentYear = document.querySelector("#currentyear");
const year = new Date().getFullYear();

const lastModifiedDate = document.querySelector("#lastModified");
currentYear.innerHTML = year;

lastModifiedDate.innerHTML = new Date(document.lastModified);

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
    },
    {
        templeName: "Salt Lake Temple",
        location: "Salt Lake City, United States",
        dedicated: "1893, April, 6",
        area: 382207,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple7.jpg",
    },
    {
        templeName: "Accra Ghana Temple",
        location: "Accra, Greater Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x225/accra-ghana-temple-detail-249022-2400x1200.jpg",
    },
    {
        templeName: "Taipei Taiwan Temple",
        location: "Taipei, Taipei, Taiwan",
        dedicated: "1984, November, 17",
        area: 9945,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/taipei-taiwan/400x250/taipei-taiwan-temple-lds-1031625-wallpaper.jpg",
    },
    {
        templeName: "Apia Samoa Temple",
        location: "Apia, Pesega, Samoa",
        dedicated: "1983, August, 5",
        area: 18691,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/apia-samoa/800x500/apia-samoa-temple-lds-460475-wallpaper.jpg",
    },
    {
        templeName: "Durban South Africa Temple",
        location: "Durban, South Africa",
        dedicated: "2020, February, 16",
        area: 19860,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/durban-south-africa/800x500/1-8b3f1b895a7c92ee66c2d0c7e78606f75f0d0cc8.jpg",
    },
];

function filterOldTemples() {
    return temples.filter(temple => {
        const dedicatedYear = parseInt(temple.dedicated.split(',')[0]);
        return dedicatedYear < 1900;
    });
}

function filterNewTemples() {
    return temples.filter(temple => {
        const dedicatedYear = parseInt(temple.dedicated.split(',')[0]);
        return dedicatedYear > 2000;
    });
}

function filterLargeTemples() {
    return temples.filter(temple => temple.area > 90000);
}

function filterSmallTemples() {
    return temples.filter(temple => temple.area < 10000);
}

function displayAllTemples() {
    displayTemples(temples);
}

function displayTemples(filteredTemples) {
    const mainContainer = document.querySelector('main .container');
    mainContainer.innerHTML = '';

    filteredTemples.forEach(temple => {
        const templeCard = createTempleCard(temple);
        mainContainer.appendChild(templeCard);
    });
}

function createTempleCard(temple) {
    const card = document.createElement('div');
    card.classList.add('temple-card');

    const image = document.createElement('img');
    image.src = temple.imageUrl;
    image.alt = temple.templeName;
    image.loading = 'lazy';
    card.appendChild(image);

    const details = document.createElement('div');
    details.classList.add('details');

    const name = document.createElement('h3');
    name.textContent = temple.templeName;
    details.appendChild(name);

    const location = document.createElement('p');
    location.textContent = temple.location;
    details.appendChild(location);

    const dedicated = document.createElement('p');
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;
    details.appendChild(dedicated);

    const area = document.createElement('p');
    area.textContent = `Area: ${temple.area.toLocaleString()} square feet`;
    details.appendChild(area);

    card.appendChild(details);

    return card;
}

document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-menu li');

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const filterType = this.textContent.toLowerCase();

            navItems.forEach(navItem => {
                navItem.classList.remove('active');
            });

            this.classList.add('active');

            const main = document.querySelector('main');
            main.innerHTML = `<h2>${filterType.toUpperCase()}</h2><div class="container"></div>`;

            switch (filterType) {
                case 'home':
                    displayAllTemples();
                    break;
                case 'old':
                    displayTemples(filterOldTemples());
                    break;
                case 'new':
                    displayTemples(filterNewTemples());
                    break;
                case 'large':
                    displayTemples(filterLargeTemples());
                    break;
                case 'small':
                    displayTemples(filterSmallTemples());
                    break;
                default:
                    displayAllTemples();
            }
        });
    });

    displayAllTemples();
});

