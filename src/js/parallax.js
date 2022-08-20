const backgrounds = document.querySelectorAll(".bg");
const backgrounds2 = document.querySelectorAll(".bg2");
const parallax = document.querySelectorAll(".bg .parallax");
const parallax2 = document.querySelectorAll(".bg2 .parallax");

console.log(backgrounds);

window.addEventListener("scroll", () => {
  console.log("ololo");
  console.log(window.scrollY);
  console.log(backgrounds);
  parallax.forEach((bg) => {
    bg.style.transform = `translateY(${window.scrollY / 4}px)`;
  });
  parallax2.forEach((bg) => {
    bg.style.transform = `translateY(${window.scrollY / 8}px)`;
  });
});

window.addEventListener("deviceorientation", (event) => {
  backgrounds.forEach((bg) => {
    bg.style.transform = `translate(${event.gamma}px, ${event.beta - 35}px)`;
  });
  backgrounds2.forEach((bg) => {
    bg.style.transform = `translate(${event.gamma / 2}px, ${
      (event.beta - 35) / 2
    }px)`;
  });
});
