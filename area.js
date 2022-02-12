const baseHeight = document.querySelectorAll(".base-height");

const checkAreaBtn = document.querySelector("#check-area");

const outputA1 = document.querySelector("#output");


function findProductOf(a, b) {

    const productOfBaseHeight = a * b;

    return productOfBaseHeight;
    // return productOfBaseHeight;
}


function calculateAreaOfTriangle() {


    const productOfBaseHeight = findProductOf(Number(baseHeight[0].value), Number(baseHeight[1].value));

    const areaOfTraingle = 1/2*productOfBaseHeight;

    outputA1.innerText = "Area of your Triangle is " + areaOfTraingle;

}



checkAreaBtn.addEventListener('click', calculateAreaOfTriangle)