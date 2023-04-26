const copyEl = document.getElementById("copyright");

const menuIcon = document.getElementById("menu-icon"),
    sidebar = document.getElementById("sidebar");

const currentYear = new Date().getFullYear();
copyEl.innerHTML = `&copy; ${currentYear} • Built by Oba Adelusi`;

menuIcon.addEventListener("click", () => {
    sidebar.classList.toggle("show");
});
