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