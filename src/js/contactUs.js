const contactUsPopup = document.querySelector(".contact_us_popup");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const messageField = document.getElementById("message");
const sendButton = document.querySelector(".send_feedback_button");
const feedbackResult = document.querySelector(".feedback_result");

const openPopup = () =>
  contactUsPopup.classList.add("contact_us_popup_visible");

const closePopup = () => {
  contactUsPopup.classList.remove("contact_us_popup_visible");
  feedbackResult.innerHTML = "";
};

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
sendButton.addEventListener("click", async () => {
  try {
    sendButton.disabled = true;
    const res = await fetch(
      "https://quantum-gravity-back.herokuapp.com/api/qgfeedback",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nameField.value,
          email: emailField.value,
          message: messageField.value,
        }),
      }
    );

    if (res.status !== 200) throw new Error();

    feedbackResult.innerHTML = "Thank you for your feedback!";

    await new Promise((resolve) => setTimeout(resolve, 2000));

    nameField.value = "";
    emailField.value = "";
    messageField.value = "";
    closePopup();
  } catch (error) {
    feedbackResult.innerHTML =
      "Something went wrong, email us at m.elementies@gmail.com";
  } finally {
    sendButton.disabled = false;
  }
});
