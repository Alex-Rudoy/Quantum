const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);

        if (entry.target.classList.contains("goals_1")) {
          document
            .querySelector(".quarter_1")
            .classList.add("visible", "active");
          document.querySelector(".dot_1").classList.add("visible");
          document.querySelector(".line").classList.add("line_1");
        }

        if (entry.target.classList.contains("goals_2")) {
          document.querySelector(".quarter_1").classList.remove("active");
          document
            .querySelector(".quarter_2")
            .classList.add("visible", "active");
          document.querySelector(".dot_2").classList.add("visible");
          document.querySelector(".line").classList.add("line_2");
        }

        if (entry.target.classList.contains("goals_3")) {
          document.querySelector(".quarter_1").classList.remove("active");
          document.querySelector(".quarter_2").classList.remove("active");
          document
            .querySelector(".quarter_3")
            .classList.add("visible", "active");
          document.querySelector(".dot_3").classList.add("visible");
          document.querySelector(".line").classList.add("line_3");
        }
      }
    });
  },
  {
    threshold: 0.5,
    rootMargin: "0px 1000px",
  }
);

const toAnimate = document.querySelectorAll(".toAnimate");
toAnimate.forEach((item) => observer.observe(item));
