// cart modal.
const modal = document.getElementById("myModal");
const btn = document.getElementById("modal-cart");
const span = document.getElementsByClassName("close")[0];
const body = document.querySelector("body");
btn.onclick = function () {
  modal.style.display = "block";
  body.style.overflow = "hidden";
};

span.onclick = function () {
  modal.style.display = "none";
};

// window.onclick = function (event) {
// 	if (event.target == modal) {
// 		modal.style.display = "none";
// 	}
// };
// Hamburger menu.

const hamburgerButton = document.getElementById("hamburger-menu");
const hamburgerModal = document.getElementById("hamburger-modal");

hamburgerButton.addEventListener("click", () => {
  if (hamburgerModal.style.display === "none") {
    hamburgerModal.style.display = "block";
    body.style.overflow = "hidden";
  } else {
    hamburgerModal.style.display = "none";
  }
});

let allModals = document.querySelectorAll(".closeAllModal");

for (let i = 0; i < allModals.length; i++) {
  allModals[i].addEventListener("click", () => {
    allModals[i].style.display = "none";
    body.style.overflow = "scroll";
  });

  allModals[i].firstElementChild.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}
