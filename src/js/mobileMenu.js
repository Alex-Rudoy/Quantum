const menuIcon = document.querySelector(".menu_icon");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu *");

const toggleMenu = () => {
  menuIcon.classList.toggle("close");
  menu.classList.toggle("menu_visible");
};

const closeMenu = () => {
  menuIcon.classList.remove("close");
  menu.classList.remove("menu_visible");
};

menuIcon.addEventListener("click", toggleMenu);

menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});
