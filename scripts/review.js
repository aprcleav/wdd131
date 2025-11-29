// ----------------- FORM SUBMISSION COUNTER ------------------

const reviewsDisplay = document.querySelector(".numreviews");
let numReviews = Number(localStorage.getItem("reviews-list")) || 0;

if (numReviews !== 0) {
    reviewsDisplay.textContent = numReviews + 1; // add one to make the displayed amount match the amount in localstorage
}
else {
    reviewsDisplay.textContent = `This is your first review! Thank you!`;
}

numReviews++;

localStorage.setItem("reviews-list", numReviews); 

// ---------------------- FOOTER -------------------------
const year = document.querySelector("#currentyear");
const today = new Date();

year.innerHTML = today.getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;