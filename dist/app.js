"use strict";

const menu1 = document.querySelector(".menuItem1");
const menu2 = document.querySelector(".menuItem2");
const menu3 = document.querySelector(".menuItem3");

function closeNav() {
  document.querySelector(".openNav").classList.toggle("!left-0");
  document.querySelector("body").classList.toggle("overflow-hidden");
  menu1.classList.toggle("rotate-45");
  menu1.classList.toggle("translate-y-[13px]");
  menu2.classList.toggle("translate-x-[-100%]");
  menu2.classList.toggle("opacity-0");
  menu3.classList.toggle("rotate-[-48deg]");
  menu3.classList.toggle("translate-y-[-10px]");
}

function navWorking() {
  document.querySelector("body").classList.remove("overflow-hidden");
  document.querySelector(".openNav").classList.toggle("!left-0");
}

// back to top button //
let mybutton = document.getElementById("myBtn");
function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("scroll", () => {
  if (window.innerWidth < 1024 && window.scrollY > 1050) {
    mybutton.setAttribute("style", "display: flex;");
  } else if (window.innerWidth >= 1024 && window.scrollY > 700) {
    mybutton.setAttribute("style", "display: flex;");
  } else {
    mybutton.setAttribute("style", "display: none;");
  }
});

// accordian //
let downArrow = document.querySelectorAll(".downArrow");
let arrow = document.querySelectorAll(".arrow");
// downArrow.addEventListener("click", () => {
//   document.querySelectorAll(".arrow").classList.toggle("rotate-180");
// });

console.log(downArrow);

downArrow.forEach((el, i) => {
  el.addEventListener("click", () => {
    arrow.forEach((e) => {
      e.classList.toggle("rotate-180");
    });
  });
});
