// Footer
const year = document.querySelector("#currentyear");
const today = new Date();

year.innerHTML = today.getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;

// Calculate wind chill
let temp = 5.5;
let windSpeed = 33.7;

function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        const windChill = 13.12 + (0.6215 * temp) - (11.37 * (windSpeed ** 0.16)) + ((0.3965 * temp) * (windSpeed ** 0.16))
        return windChill
    }
    else {
        return "N/A"
    }
}

document.getElementById("chill").innerHTML = Number((calculateWindChill(temp, windSpeed).toFixed(1)));