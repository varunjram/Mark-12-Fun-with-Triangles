const baseHeight = document.querySelectorAll(".base-height");

const checkAreaBtn = document.querySelector("#check-area");

const outputA1 = document.querySelector("#output");

function findProductOf(a, b) {
  const productOfBaseHeight = a * b;

  return productOfBaseHeight;
  // return productOfBaseHeight;
}

function calculateAreaOfTriangle() {
  const [a, b] = [Number(baseHeight[0].value), Number(baseHeight[1].value)];

  if (a > 0 && b > 0) {
    const productOfBaseHeight = findProductOf(a, b);

    const areaOfTraingle = (1 / 2) * productOfBaseHeight;

    outputA1.innerText = "Area of your Triangle is " + areaOfTraingle;
  } else {
    alert("Value entered must be greater than 0");
  }
}

checkAreaBtn.addEventListener("click", calculateAreaOfTriangle);
