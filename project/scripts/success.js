// Hamburger Menu
const hamButton = document.querySelector("#menu");
const mainNav = document.querySelector(".navigation");

hamButton.addEventListener('click', () => {
    mainNav.classList.toggle("open");
    hamButton.classList.toggle("open");
});

// Form Submission
const messageSent = document.querySelector("#messages");
let messages = Number(localStorage.getItem("messages-sent")) || 0;

if (messages !== 0) {
    let numMessages = messages + 1; // add one to make the displayed amount match the amount in localstorage
    messageSent.innerHTML = `<br>You've sent ${numMessages} messages to April. She will reply as soon as she is able to. <br>Thank you for your patience!`;
}
else {
    messageSent.textContent = `Thank you!`;
}

messages++;

localStorage.setItem("messages-sent", messages); 

// Footer
const year = document.querySelector("#currentyear");
const today = new Date();

year.innerHTML = today.getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;