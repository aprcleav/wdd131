// Hamburger Menu
const hamButton = document.querySelector("#menu");
const mainNav = document.querySelector(".navigation");

hamButton.addEventListener('click', () => {
    mainNav.classList.toggle("open");
    hamButton.classList.toggle("open");
});

// Footer
const year = document.querySelector("#currentyear");
const today = new Date();

year.innerHTML = today.getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;

