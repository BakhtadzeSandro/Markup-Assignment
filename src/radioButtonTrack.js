const buttons = document.getElementsByName("method");
const eMoney = document.getElementById("emoney");
const cash = document.getElementById("cash");

const firstPartMoney = document.getElementById("firstPart");
const secondPartCash = document.getElementById("secondPart-radio");

const eMoneyBox = document.getElementById("e-money-box");
const cashBox = document.getElementById("cash-box");

firstPartMoney.style.display = "none";
secondPartCash.style.display = "none";

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("change", function () {
    if (this.value == "e-Money") {
      firstPartMoney.style.display = "flex";
      secondPartCash.style.display = "none";
      eMoneyBox.style.border = "1px solid #D87D4A";
      cashBox.style.border = "1px solid #CFCFCF";
    } else if (this.value == "cash-on-delivery") {
      secondPartCash.style.display = "flex";
      firstPartMoney.style.display = "none";
      cashBox.style.border = "1px solid #D87D4A";
      eMoneyBox.style.border = "1px solid #CFCFCF";
    }
  });
}
