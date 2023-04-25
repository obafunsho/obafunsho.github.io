const r = document.querySelector(":root");
const copyEl = document.getElementById("copyright");

const menuIcon = document.getElementById("menu-icon"),
    sidebar = document.getElementById("sidebar");

const currentYear = new Date().getFullYear();
copyEl.innerHTML = `&copy; ${currentYear} • Built by Oba Adelusi`;

menuIcon.addEventListener("click", () => {
    sidebar.classList.toggle("show");
});

// Change value of primary hue
// function getRandomHue() {
//     const MAX_HUE = 360;
//     return Math.floor(Math.random() * MAX_HUE);
// }

// document.addEventListener("DOMContentLoaded", () => {
//     const rand = getRandomHue();
//     r.style.setProperty('--hue', rand);
// })
