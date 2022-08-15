const contactUsPopup = document.querySelector(".contact_us_popup");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const messageField = document.getElementById("message");

const openPopup = () =>
  contactUsPopup.classList.add("contact_us_popup_visible");

const closePopup = () =>
  contactUsPopup.classList.remove("contact_us_popup_visible");

document.querySelectorAll(".contact_us_button").forEach((button) => {
  button.addEventListener("click", openPopup);
});

document.querySelector(".close_button").addEventListener("click", closePopup);

contactUsPopup.addEventListener("click", closePopup);

document
  .querySelector(".contact_us_popup_content")
  .addEventListener("click", (e) => {
    e.stopPropagation();
  });

// send data to email
document
  .querySelector(".send_feedback_button")
  .addEventListener("click", async () => {
    closePopup();

    // todo: change to send email
    await new Promise((resolve) => setTimeout(resolve, 1000));

    nameField.value = "";
    emailField.value = "";
    messageField.value = "";
  });
