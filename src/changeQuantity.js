const minus = document.getElementById("minusValue");
const value = document.getElementById("currentValue");
const plus = document.getElementById("plusValue");

minus.addEventListener("click", () => {
  let currentValue = value.getAttribute("data-value");
  if (currentValue > 0) {
    currentValue--;
    value.setAttribute("data-value", currentValue);
    value.textContent = currentValue;
  }
});

plus.addEventListener("click", () => {
  let currentValue = value.getAttribute("data-value");
  currentValue++;
  value.setAttribute("data-value", currentValue);
  value.textContent = currentValue;
});
