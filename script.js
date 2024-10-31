const form = document.querySelector(".form");
const email = document.querySelector("#email");
const firstName = document.querySelector("#fname");
const lastName = document.querySelector("#lname");
const phone = document.querySelector("#phone");
const password1 = document.querySelector("#pass1");
const password2 = document.querySelector("#pass2");
const errorElement = document.querySelector("#error");
const createAccountBtn = document.querySelector("#createAccountBtn");
const close = document.querySelector(".close");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const backdrop = document.querySelector("#backdrop");

createAccountBtn.addEventListener("click", validateForm);

function validateForm() {
  let isValid = true;

  // Clear previous error messages
  document.querySelectorAll('#error-message').forEach(msg => msg.textContent = '');

  if (firstName.value === "") {
    document.querySelector("#fname-error").textContent = "First name is required";
    isValid = false;
  }
  
  if (lastName.value === "") {
    document.querySelector("#lname-error").textContent = "Last name is required";
    isValid = false;
  }
  
  if (email.value === "") {
    document.querySelector("#email-error").textContent = "Email is required";
    isValid = false;
  }
  
  if (phone.value === "") {
    document.querySelector("#phone-error").textContent = "Phone is required";
    isValid = false;
  }
  
  if (password1.value === "") {
    document.querySelector("#pass1-error").textContent = "Password is required";
    isValid = false;
  }
  
  if (password2.value === "") {
    document.querySelector("#pass2-error").textContent = "Please confirm your password";
    isValid = false;
  }
  
  if (password1.value !== password2.value) {
    document.querySelector("#pass2-error").textContent = "Passwords do not match";
    isValid = false;
  }

  if (isValid) {
    // If there are no validation errors, show the modal
    handleModal();
  }
}

close.addEventListener("click", handleModal);

function toggleBackdrop() {
  backdrop.classList.toggle('visible');
}

function handleModal() {
  modal.classList.toggle("visible");
  modalContent.classList.toggle("visible");
  toggleBackdrop();
}



// const loginText = document.querySelector(".login-text");
// function handleLogin () {
//   loginBox.classList.toggle("visible");
//   toggleBackdrop();
// }