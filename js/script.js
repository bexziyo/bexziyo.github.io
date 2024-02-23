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


const openModal1 = document.getElementById('openModal1')
const dialog1 = document.getElementById('dialog1')
const closeModal1 = document.getElementById('closeModal1')

openModal1.addEventListener("click", () => {
  dialog1.classList.add("open-modal");
});
closeModal1.addEventListener("click", () => {
  dialog1.classList.remove("open-modal");
});
