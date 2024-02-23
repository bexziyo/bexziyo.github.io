const navbarMenu = document.getElementById("navbarMenu");
const menuBtn = document.getElementById("menuBtn");
const darkBtn = document.getElementById("dark");
const darkBtn2 = document.getElementById("dark2");

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("lightstyle");

});
darkBtn2.addEventListener("click", () => {
  document.body.classList.toggle("lightstyle");

});


menuBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
  menuBtn.classList.toggle("is-active");
});

