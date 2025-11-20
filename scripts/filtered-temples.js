// Hamburger menu
const hamButton = document.querySelector("#menu");
const mainNav = document.querySelector(".navigation");

hamButton.addEventListener('click', () => {
    mainNav.classList.toggle("open");
    hamButton.classList.toggle("open");
});

// Array of temple objects
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Moses Lake Washington",
        location: "Moses Lake, Washington, United States",
        dedicated: "2023, September, 17",
        area: 28933,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/870578c5fa6f11edb2e2eeeeac1e709e84598271/full/500%2C/0/default"
    },
    {
        templeName: "Dallas Texas",
        location: "Dallas, Texas, United States",
        dedicated: "1984, October, 19-24",
        area: 44207,
        imageUrl:
            "https://www.churchofjesuschrist.org/imgs/c853d3386e74f389bb61d29d08feb2243aedde77/full/500%2C/0/default"
    },
    {
        templeName: "Frankfurt Germany",
        location: "Frankfurt, Germany",
        dedicated: "1987, August, 28-30",
        area: 32895,
        imageUrl:
            "https://churchofjesuschrist.org/imgs/53cd8f853566e3d1fbb7a7619801ff4481dba7a6/full/500%2C/0/default"
    },
    {
        templeName: "Kirtland Ohio",
        location: "Kirtland, Ohio, United States",
        dedicated: "1836, March, 27",
        area: 15000,
        imageUrl:
            "https://www.churchofjesuschrist.org/imgs/cpgqik2ds9fs8ktmxxzoruxy5863bwhtycp1vtvt/pct:0,7.8,100,84.5/!1000%2C563/0/default"
    }
];

createTempleCard(temples);

// Links temple nav links to filtered temples arrays
const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");

homeLink.addEventListener("click", () => {
    createTempleCard(temples);
});

oldLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.dedicated.startsWith("18")));
    let heading = document.querySelector(".active");
    heading.textContent = "Old"
});

newLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.dedicated.startsWith("2")));
    let heading = document.querySelector(".active");
    heading.textContent = "New"
});

largeLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area > 90000));
    let heading = document.querySelector(".active");
    heading.textContent = "Large"
});

smallLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area < 10000));
    let heading = document.querySelector(".active");
    heading.textContent = "Small"
});

// Creates and populates temple cards from temple objects
function createTempleCard(filteredTemples) {
    document.querySelector(".res-grid").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location: </span>${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated: </span>${temple.dedicated}`;
        area.innerHTML = `<span class="label">Floor Area: </span>${temple.area} ft²`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".res-grid").appendChild(card);
    });
}

// Footer
const year = document.querySelector("#currentyear");
const today = new Date();

year.innerHTML = today.getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;