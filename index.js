const emailId = document.getElementById("email-id");
const errorMsg = document.getElementById("error-msg");
const submitBtn = document.getElementById("submit-btn");
const emailLabel = document.querySelector(".email");
const emailConfirmation = document.querySelector(".email-confirmation");

let mailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

window.addEventListener("DOMContentLoaded", function() {
  const email = localStorage.getItem("email");
  if (email) {
    emailConfirmation.textContent = `A confirmation email has been sent to ${email}. Please open it and click the button inside to confirm your subscription.`;
  }
});

function checker() {
  if (emailId.value.match(mailRegex)) {
    errorMsg.style.display = "none";
    emailId.style.borderColor = "initial";
    emailId.style.color = "initial";
    emailId.style.background = "initial";
  } else if (emailId.value === "") {
    errorMsg.style.display = "none";
    emailId.style.borderColor = "initial";
    emailId.style.color = "initial";
    emailId.style.background = "initial";
  } else {
    errorMsg.style.display = "block";
    emailId.style.borderColor = "hsl(4, 100%, 67%)";
    emailId.style.color = "hsl(4, 100%, 67%)";
    emailId.style.background = "hsla(4, 100%, 67%, 0.2)";
  }
}

submitBtn.addEventListener("click", function() {
  if (emailId.value.match(mailRegex)) {
    localStorage.setItem("email", emailId.value);
    window.location.href = "success-validation.html";
  }
});