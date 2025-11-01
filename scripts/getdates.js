const year = document.querySelector("#currentyear");

const today = new Date();

document.getElementById("lastModified").innerHTML = document.lastModified;

year.innerHTML = today.getFullYear();