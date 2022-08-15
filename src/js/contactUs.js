// open modal
document.querySelectorAll(".contact_us_button").forEach((button) => {
  button.addEventListener("click", () => {
    document
      .querySelector(".contact_us_popup")
      .classList.add("contact_us_popup_visible");
  });
});

// close on click X button
document.querySelector(".close_button").addEventListener("click", () => {
  document
    .querySelector(".contact_us_popup")
    .classList.remove("contact_us_popup_visible");
});

// close on click outside
document.querySelector(".contact_us_popup").addEventListener("click", () => {
  document
    .querySelector(".contact_us_popup")
    .classList.remove("contact_us_popup_visible");
});

// don't close on click inside
document
  .querySelector(".contact_us_popup_content")
  .addEventListener("click", (e) => {
    e.stopPropagation();
  });

// send data to email
document
  .querySelector(".send_feedback_button")
  .addEventListener("click", async () => {
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const messageField = document.getElementById("message");

    document
      .querySelector(".contact_us_popup")
      .classList.remove("contact_us_popup_visible");

    await new Promise((resolve) => setTimeout(resolve, 1000));

    nameField.value = "";
    emailField.value = "";
    messageField.value = "";
  });
