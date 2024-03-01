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

// **************************************************************************************

let openModalBtn = document.getElementById("openModalBtn");
let modal = document.getElementById("myModal");
let closeModalBtn = document.getElementById("closeModalBtn");

openModalBtn.addEventListener("click", function () {
  modal.style.display = "block";

});

closeModalBtn.addEventListener("click", function () {
  modal.style.display = "none";

});

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});


// **************************************************************************************
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}
// **************************************************************************************


function progressBarAndCountNumber() {

  const progress = document.querySelectorAll('.progress');
  let count = 0;
  // You must put the maximum number in the MAX variable.
  let MAX = 100;

  let run = setInterval(() => {
    count++;
    progress.forEach(element => {
      if (count <= element.dataset.progress) {
        element.parentElement.style.background = `conic-gradient(#5c27fe ${count}%, #212428 0)`;
        element.firstElementChild.textContent = `${count}%`;
      };
      if (count == MAX) {
        clearInterval(run);
      };
    });
  }, 50);
}

setTimeout(function () { progressBarAndCountNumber();; }, 4000);






document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
      var scroll = window.pageYOffset || document.documentElement.scrollTop;

      if (scroll > 200) {
          document.getElementById('top').style.display = "block";
      } else {
          document.getElementById('top').style.display = "none";
      }
  });

  document.getElementById('top').addEventListener("click", function () {
      scrollToTop(10000);
  });
});

function scrollToTop(duration) {
  var start = window.pageYOffset || document.documentElement.scrollTop,
      currentTime = 0,
      increment = 200;

  var animateScroll = function () {
      currentTime += increment;
      var val = Math.easeInOutQuad(currentTime, start, -start, duration);
      window.scrollTo(0, val);
      if (currentTime < duration) {
          requestAnimationFrame(animateScroll);
      }
  };
  animateScroll();
}

Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};

