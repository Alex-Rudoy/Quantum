const projectSlider = (slider) => {
  const prevButton = slider.querySelector(
    ".projectSlider_controls .slider_button_left"
  );
  const nextButton = slider.querySelector(
    ".projectSlider_controls .slider_button_right"
  );
  const sliderContent = slider.querySelector(".projectSlider_content");
  const fullScreenSlider = document.querySelector(
    `.fullScreenSlider[data-sliderid="${slider.getAttribute("data-sliderid")}"]`
  );
  const fullScreenSliderContent = fullScreenSlider.querySelector(
    ".fullScreenSlider_content"
  );
  const fullScreenPrevButton = fullScreenSlider.querySelector(
    ".fullScreenSlider_controls .slider_button_left"
  );
  const fullScreenNextButton = fullScreenSlider.querySelector(
    ".fullScreenSlider_controls .slider_button_right"
  );

  const numberOfSlides = sliderContent.children.length;

  let currentSlide = 0;
  let fullScreenCurrentSlide = 0;
  let isVisible = false;

  const animateSlider = () => {
    const slideToMove = sliderContent.children[currentSlide];
    prevButton.classList.remove("disabled");
    nextButton.classList.remove("disabled");
    if (currentSlide === 0) prevButton.classList.add("disabled");
    if (currentSlide === numberOfSlides - 1 - (window.innerWidth > 768 ? 1 : 0))
      nextButton.classList.add("disabled");
    sliderContent.style.transform = `translateX(${-slideToMove.offsetLeft}px)`;
  };

  const animateFullSlider = () => {
    fullScreenSlider.classList.add("fullScreenSlider_visible");
    isVisible = true;
    const slideToMove =
      fullScreenSliderContent.children[fullScreenCurrentSlide];

    for (let i = 0; i < numberOfSlides; i++) {
      fullScreenSliderContent.children[i].classList.remove("active");
    }
    fullScreenSliderContent.children[fullScreenCurrentSlide].classList.add(
      "active"
    );

    fullScreenPrevButton.classList.remove("disabled");
    fullScreenNextButton.classList.remove("disabled");
    if (fullScreenCurrentSlide === 0)
      fullScreenPrevButton.classList.add("disabled");
    if (fullScreenCurrentSlide === numberOfSlides - 1)
      fullScreenNextButton.classList.add("disabled");

    fullScreenSliderContent.style.transform = `translateX(${
      -slideToMove.offsetLeft + (window.innerWidth / 100) * 15
    }px)`;
  };

  animateSlider();

  prevButton.addEventListener("click", () => {
    if (currentSlide === 0) return;
    currentSlide--;
    animateSlider();
  });

  nextButton.addEventListener("click", () => {
    if (currentSlide === numberOfSlides - 1 - (window.innerWidth > 768 ? 1 : 0))
      return;
    currentSlide++;
    animateSlider();
  });

  fullScreenPrevButton.addEventListener("click", (e) => {
    e.stopPropagation();
    if (fullScreenCurrentSlide === 0) return;
    fullScreenCurrentSlide--;
    animateFullSlider();
  });

  fullScreenNextButton.addEventListener("click", (e) => {
    e.stopPropagation();
    if (fullScreenCurrentSlide === numberOfSlides - 1) return;
    fullScreenCurrentSlide++;
    animateFullSlider();
  });

  for (let i = 0; i < numberOfSlides; i++) {
    sliderContent.children[i].addEventListener("click", () => {
      if (window.innerWidth < 768) return;
      fullScreenCurrentSlide = i;
      animateFullSlider();
    });
  }

  fullScreenSlider.addEventListener("click", () => {
    fullScreenSlider.classList.remove("fullScreenSlider_visible");
    isVisible = false;
  });

  document.addEventListener("keydown", (e) => {
    if (!isVisible) return;

    if (e.key === "ArrowLeft") {
      fullScreenPrevButton.click();
    } else if (e.key === "ArrowRight") {
      fullScreenNextButton.click();
    }
  });

  for (let i = 0; i < numberOfSlides; i++) {
    fullScreenSliderContent.children[i].addEventListener("click", (e) => {
      if (fullScreenSliderContent.children[i].classList.contains("active"))
        return;
      e.stopPropagation();
      fullScreenCurrentSlide = i;
      animateFullSlider();
    });
  }
};

const sliders = document.querySelectorAll(".projectSlider");
sliders.forEach((slider) => projectSlider(slider));
