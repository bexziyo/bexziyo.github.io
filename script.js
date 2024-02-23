const navbarMenu = document.getElementById("navbarMenu");
const menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
  menuBtn.classList.toggle("is-active");
});

