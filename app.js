function generatePin() {
   const getPn = getPin();
   document.getElementById("display-pin").value = getPn;
}

function getPin() {
   const pin = Math.round(Math.random() * 10000);
   const pinString = pin + "";
   if (pinString.length == 4) {
      return pin
   } else {
      return getPin();
   }
}

document.getElementById("key-pad").addEventListener("click", function (e) {
   const number = e.target.innerText;
   const calcInput = document.getElementById('typed-numbers')
   if (isNaN(number)) {
      if (number === "C") {
         calcInput.value = "";
      }
   } else {
      const previousCalcVal = calcInput.value;
      let newCalcVal = previousCalcVal + number;
      calcInput.value = newCalcVal;
   }
});


const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener("click", function () {
   const calcInputVal = document.getElementById('typed-numbers').value;
   const pinVal = document.getElementById("display-pin").value;

   if (calcInputVal === pinVal) {
      document.querySelector('.pin-success').style.display = "block";
      document.querySelector('.pin-failed').style.display = "none";
   } else {
      document.querySelector('.pin-success').style.display = "none";
      document.querySelector('.pin-failed').style.display = "block";
   }
});