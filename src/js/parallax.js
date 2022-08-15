const backgrounds = document.querySelectorAll(".bg");

console.log(backgrounds);

document.addEventListener("mousemove", (event) => {
  backgrounds.forEach((bg) => {
    bg.style.transform = `translate(${
      event.clientX / 10 - window.innerWidth / 20
    }px, ${event.clientY / 10 - window.innerHeight / 20}px)`;
  });
});

// move background based on mobile phone tilt
window.addEventListener("deviceorientation", (event) => {
  backgrounds.forEach((bg) => {
    bg.style.transform = `translate(${event.gamma}px, ${event.beta - 35}px)`;
  });
});
