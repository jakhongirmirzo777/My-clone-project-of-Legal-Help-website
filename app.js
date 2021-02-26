const container = document.querySelector(".illustration__box");
const card = document.querySelector(".illustration__card");
const sizes = document.querySelector(".illustration__sizes");
const title = document.querySelector(".illustration__info h3");
const description = document.querySelector(".illustration__info p");
const img = document.querySelector(".illustration__img");
const start = document.querySelector(".illustration__start");

// Moving animation
container.addEventListener("mousemove", function (e) {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
  let yAxis = (window.innerHeight * 3 - e.pageY) / 20;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animate In
container.addEventListener("mouseenter", function (e) {
  card.style.transition = "none";
  img.style.transform = "translateZ(175px) rotate(0)";
  title.style.transform = "translateZ(150px)";
  description.style.transform = "translateZ(125px)";
  sizes.style.transform = "translateZ(100px)";
  start.style.transform = "translateZ(75px)";
});

// Animate Out
container.addEventListener("mouseleave", function (e) {
  card.style.transition = "all 0.5s ease";
  card.style.transform = "rotateY(0deg) rotateX(0deg)";
  title.style.transform = "translateZ(0)";
  img.style.transform = "translateZ(0) rotate(15deg)";
  sizes.style.transform = "translateZ(0)";
  description.style.transform = "translateZ(0)";
  start.style.transform = "translateZ(0)";
});

///////////////////////////////
///////////////////////////////
