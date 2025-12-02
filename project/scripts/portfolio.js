// Hamburger Menu
const hamButton = document.querySelector("#menu");
const mainNav = document.querySelector(".navigation");

hamButton.addEventListener('click', () => {
    mainNav.classList.toggle("open");
    hamButton.classList.toggle("open");
});

// Portfolio Page
const artworks = [

    {
        name: "Lunch Date With Rhett",
        style: "whimsical",
        image: "images/art2.webp"
    },
    {
        name: "Hiking With Ryan",
        style: "whimsical",
        image: "images/art7.webp"
    },
    {
        name: "Baritone Ukulele",
        style: "whimsical",
        image: "images/art8.webp"
    },
    {
        name: "Courage",
        style: "realistic",
        image: "images/art11.webp"
    },
    {
        name: "Homeschool Wonder",
        style: "whimsical",
        image: "images/art3.webp"
    },
    {
        name: "Florals",
        style: "whimsical",
        image: "images/art5.webp"
    },
    {
        name: "Scandinavian Folk Bunny",
        style: "whimsical",
        image: "images/art6.webp"
    },
    {
        name: "Your Arms Are My Home",
        style: "whimsical",
        image: "images/art1.webp"
    },
    {
        name: "The Joy in Motherhood Comes in Moments",
        style: "realistic",
        image: "images/art9.webp"
    },
    {
        name: "Besties",
        style: "realistic",
        image: "images/art10.webp"
    },
    {
        name: "Jack The Chef",
        style: "realistic",
        image: "images/art12.webp"
    },
    {
        name: "Todd The Fisherman",
        style: "realistic",
        image: "images/art13.webp"
    }
]

createArtCard(artworks);

// Links submenu items to filtered artworks arrays
const allLink = document.querySelector("#all");
const realisticLink = document.querySelector("#realistic");
const whimsicalLink = document.querySelector("#whimsical");

allLink.addEventListener("click", () => {
    createArtCard(artworks);
});

realisticLink.addEventListener("click", () => {
    createArtCard(artworks.filter(artwork => artwork.style == "realistic"));
});

whimsicalLink.addEventListener("click", () => {
    createArtCard(artworks.filter(artwork => artwork.style.startsWith("w")));
});

// Creates and populates art cards from artwork objects
function createArtCard(filteredArtworks) {
    document.querySelector(".art-grid").innerHTML = "";
    filteredArtworks.forEach(artwork => {
        let card = document.createElement("section");
        let name = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = artwork.name;
        img.setAttribute("src", artwork.image);
        img.setAttribute("alt", `${artwork.name}, ${artwork.style} ipad illustration`);
        img.setAttribute("loading", "lazy");

        card.appendChild(img);
        card.appendChild(name);

        document.querySelector(".art-grid").appendChild(card);
    });
}

// Footer
const year = document.querySelector("#currentyear");
const today = new Date();

year.innerHTML = today.getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;

