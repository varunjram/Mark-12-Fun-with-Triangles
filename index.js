const inputs = document.querySelectorAll(".angle-input");
// console.log(inputs);
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputE1 = document.querySelector("#output");
const form = document.querySelector("#form");
form.addEventListener("submit", (e) => e.preventDefault());
// const doNotPress = document.querySelector("#do-not-press");

function calculatrSumOfAngles(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  // console.log(sumOfAngles);
  return sumOfAngles;
}

function isTriangle(e) {
  const [angle1, angle2, angle3] = [Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value)];
  const angles = calculatrSumOfAngles(angle1, angle2, angle3);
  console.log(angle1, angle2, angle3);
  // console.log(typeof(inputs[0].value),inputs[1].value,inputs[2].value);

  if (angle1 === 0 || angle2 === 0 || angle3 === 0) {
    alert("Value in all the input fields must be greater than 0");
  } else {
    if (angles === 180) {
      outputE1.innerText = "Yay, The angles Form Triangle";
      // console.log("yes");
    } else if (angle1 < 0 || angle2 < 0 || angle3 < 0) {
      outputE1.innerText = "Please enter Positive value";
    } else if (angles > 0 && angles !== 180) {
      outputE1.innerText = "Oh Oh! The angles don't form a Triangle";
      // console.log("NP");
    }
  }
}

isTriangleBtn.addEventListener("click", isTriangle);
