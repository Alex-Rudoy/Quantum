import "./contactUs";
import "./intersectionObserver";
import "./mobileMenu";
import "./parallax";
import "./slider";

import "../styles/index.scss";

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.remove("no_transition");
  setTimeout(() => {
    document.getElementById("loader").classList.add("hidden");
  }, 100);
});
