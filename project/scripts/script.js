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

const destinations = [
    {
        name:"Eden Nature Park",
        place: "Toril, Davao City",
        imageUrl:
            "https://www.edennaturepark.com.ph/wp-content/uploads/2017/02/eden-logo.png",
    },
    {
        name:"People's Park",
        place: "Palma Gil Street, Davao City",
        imageUrl:
            "https://th.bing.com/th/id/R.e6dc30de6d4e31394baa048a1bad291f?rik=6nELPi%2bwhR53Ow&riu=http%3a%2f%2fwww.phtourguide.com%2fwp-content%2fuploads%2f2011%2f06%2fPeoples-Park.jpg&ehk=HJOja6gs8K3JGTTOHa41NBRbhPMVKUYD2NRREQwhgis%3d&risl=&pid=ImgRaw&r=0",
    },
    {
        name:"Davao Butterfly House",
        place: "Barangay Catalunan Grande, Davao City",
        imageUrl:
            "https://th.bing.com/th/id/R.d7721c1f31a4c0a64d074ee17a00caed?rik=b1i20wR0YEkzlA&riu=http%3a%2f%2f2.bp.blogspot.com%2f-WUzUj3dCLmY%2fTl2RJSVAoAI%2fAAAAAAAACSY%2f6vXHGExPdiE%2fs640%2fbutterfly%2bhouse.jpg&ehk=xc8fsVOySi41S8zjJxXJR0WiT4n9H0LXCBH%2fcUK40iE%3d&risl=&pid=ImgRaw&r=0",
    },
    {
        name:"Philippine Eagle Center",
        place: "Calinan, Davao City",
        imageUrl:
            "https://i.ytimg.com/vi/70ahXhXFJ2I/maxresdefault.jpg",
    },
    {
        name:"Davao Crocodile Park",
        place: "Barangay Woodland, Davao City",
        imageUrl:
            "https://3.bp.blogspot.com/_FwhlyJ47SlI/TLLLSS-ql4I/AAAAAAAAAIw/-hYBIUEwK9E/s1600/bl1.jpg",
    },
    {
        name:"Mount Apo",
        place: "between Davao City, Davao del Sur, and North Cotabato",
        imageUrl:
            "https://th.bing.com/th/id/R.4c4a83587a16be18fe2bdf376a5baf75?rik=dDAvh9Dq9VaQdw&pid=ImgRaw&r=0",
    },
    {
        name:"Mount Talomo",
        place: "Talomo, Davao City",
        imageUrl:
            "https://th.bing.com/th/id/R.5fe53433cdce65ae43450835e7fa87ae?rik=DByhUs3XM7yyBA&riu=http%3a%2f%2f2.bp.blogspot.com%2f-9x2iOmRZiSw%2fTwVcEJ2K2AI%2fAAAAAAAAF5Y%2fSlFYz3UpKko%2fs1600%2f102_0048.JPG&ehk=qFiPM%2byyYmvAil9FCDWAhphWFJx1EexcUpJxPErwHtA%3d&risl=&pid=ImgRaw&r=0",
    },
    {
        name:"Samal Island",
        place: "Samal City",
        imageUrl:
            "https://3.bp.blogspot.com/-4czNNwZNpsw/WC6L_KZjswI/AAAAAAAAAPY/xfQh-tyjAPU_lXuSLGRJXa6r2htFN0_xwCLcB/s1600/Samal-Island%2Bby%2Bmindanaotoursdotcom.jpg",
    },
    {
        name:"Talicud Island",
        place: "Talicud, Samal City",
        imageUrl:
            "https://th.bing.com/th/id/R.e0b8d74fedbfd1062d9f8e6874cd0274?rik=Zq4LUit5RESS3g&riu=http%3a%2f%2f4.bp.blogspot.com%2f-ZfuSuq_Me9E%2fUZXLZp_LfPI%2fAAAAAAAAGOc%2fAXwY801oDYs%2fs1600%2fIMG_0420c.jpg&ehk=8r2POCmLM1MjIBs464sOXuCS%2ffQDZdEN5cQ8EwnDhzg%3d&risl=&pid=ImgRaw&r=0",
    },
    {
        name:"Hagimit Falls",
        place: "Hagimit, Samal City",
        imageUrl:
            "https://th.bing.com/th/id/R.8607a46119549ce53b973693125cca74?rik=yVcmrjvJxh95JQ&riu=http%3a%2f%2fwww.traveltothephilippines.info%2fwp-content%2fuploads%2f2019%2f08%2fDavao-del-Norte-Hagimit-Falls7-1.jpg&ehk=9B11%2bjPG5uT4PFZLFK87a0AM6%2bmHFvC4ZQcf7kVevHw%3d&risl=&pid=ImgRaw&r=0",
    },
    {
        name:"Tamugan River",
        place: "Tamugan, Davao City",
        imageUrl:
            "https://edgedavao.net/wp-content/uploads/2017/03/Tamugan-River_Apo-Agua-Infra.jpg",
    },
];

function filterOlddestinations() {
    return destinations.filter(destination => {
        const dedicatedYear = parseInt(destination.dedicated.split(',')[0]);
        return dedicatedYear < 1900;
    });
}

function filterNewdestinations() {
    return destinations.filter(destination => {
        const dedicatedYear = parseInt(destination.dedicated.split(',')[0]);
        return dedicatedYear > 2000;
    });
}

function filterLargedestinations() {
    return destinations.filter(destination => destination.area > 90000);
}

function filterSmalldestinations() {
    return destinations.filter(destination => destination.area < 10000);
}

function displayAlldestinations() {
    displaydestinations(destinations);
}

function displaydestinations(filtereddestinations) {
    const mainContainer = document.querySelector('main .container');
    mainContainer.innerHTML = '';

    filtereddestinations.forEach(destination => {
        const destinationCard = createdestinationCard(destination);
        mainContainer.appendChild(destinationCard);
    });
}

function createdestinationCard(destination) {
    const card = document.createElement('div');
    card.classList.add('destination-card');

    const image = document.createElement('img');
    image.src = destination.imageUrl;
    image.alt = destination.place;
    image.loading = 'lazy';
    card.appendChild(image);

    const details = document.createElement('div');
    details.classList.add('details');


    const name = document.createElement('h3');
    name.textContent = destination.name;
    details.appendChild(name);

    const location = document.createElement('p');
    location.textContent = destination.place;
    details.appendChild(location);

    // const dedicated = document.createElement('p');
    // dedicated.textContent = `Dedicated: ${destination.dedicated}`;
    // details.appendChild(dedicated);

    // const area = document.createElement('p');
    // area.textContent = `Area: ${destination.area.toLocaleString()} square feet`;
    // details.appendChild(area);

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
                    displayAlldestinations();
                    break;
                case 'destination':
                    displaydestinations(filterOlddestinations());
                    break;
                case 'contact us':
                    displaydestinations(filterNewdestinations());
                    break;
                default:
                    displayAlldestinations();
            }
        });
    });

    displayAlldestinations();
});

