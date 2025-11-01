const year = document.querySelector("#currentyear");

const today = new Date();

document.getElementById("lastModified").innerHTML = `Last modification: <p id="lastModified">${document.lastModified}</p>`;

year.innerHTML = today.getFullYear();