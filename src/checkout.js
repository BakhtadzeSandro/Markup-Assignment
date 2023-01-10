// Checkout modal.

const checkoutModal = document.getElementById("checkout-modal");
const checkoutButton = document.getElementById("checkout");
const checkoutSpan = document.getElementsByClassName("checkout-close")[0];

checkoutButton.onclick = function () {
  checkoutModal.style.display = "block";
};

// checkoutSpan.onclick = function () {
//   checkoutModal.style.display = "none";
// };

window.onclick = function (event) {
  if (event.target == checkoutModal) {
    checkoutModal.style.display = "none";
  }
};

// Email Validation

const emailInput = document.getElementById("email");
const emailVal = document.getElementById("email-val");

emailInput.addEventListener("input", (event) => {
  const currentEmail = event.target.value;
  if (!currentEmail.includes("@")) {
    emailInput.style.outline = "none";
    emailInput.style.borderColor = "red";
    emailVal.style.display = "block";
  } else {
    emailInput.style.borderColor = "#D87D4A";
    emailVal.style.display = "none";
  }
});
