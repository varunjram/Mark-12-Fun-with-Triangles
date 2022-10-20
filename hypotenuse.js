const sidesInput = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outpitH1 = document.querySelector("#output");

function calculateSumOfSquares(a, b) {
  const sumOfSquares = a * a + b * b;
  return sumOfSquares;
}

function calculateHypotenuse() {
  const [angle1, angle2] = [Number(sidesInput[0].value), Number(sidesInput[1].value)];

  if (angle1 > 0 && angle2 > 0) {
    const sumOfSquares = calculateSumOfSquares(angle1, angle2);

    const lengthOfHypotenuse = Math.sqrt(sumOfSquares).toFixed(2);

    outpitH1.innerText = "The length of Hypotenuse is " + lengthOfHypotenuse;
  } else {
    alert("Value entered must be greater than 0");
  }
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);
