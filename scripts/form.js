// ---------------------- FOOTER -------------------------
const year = document.querySelector("#currentyear");
const today = new Date();

year.innerHTML = today.getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;

// ---------------------- FORM ---------------------------

// Array of product objects
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

// Populate products from array
populateProducts(products); 

function populateProducts(products) {
    const newProduct = document.getElementById("products");
    products.forEach(product => {
        const option = document.createElement("option");

        option.id = product.name;
        option.name = product.name;
        option.value = product.id;
        option.textContent = product.name.toUpperCase();

        newProduct.appendChild(option);
    })
}

// ----------------- FORM SUBMISSION COUNTER ------------------

const reviewsDisplay = document.querySelector(".numreviews");
let numReviews = Number(localStorage.getItem("reviews-list")) || 0;

if (numReviews !== 0) {
    reviewsDisplay.textContent = numReviews;
}
else {
    reviewsDisplay.textContent = `This is your first review! Thank you!`;
}

numReviews++;

localStorage.setItem("reviews-list", numReviews);