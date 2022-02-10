const inputs =document.querySelectorAll(".angle-input");
// console.log(inputs);
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputE1 = document.querySelector("#output");
// const doNotPress = document.querySelector("#do-not-press");


function calculatrSumOfAngles (angle1,angle2,angle3) {

    const sumOfAngles = angle1 + angle2 + angle3
    // console.log(sumOfAngles);
    return sumOfAngles
}




function isTriangle () {

    const angles = calculatrSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));

    // console.log(typeof(inputs[0].value),inputs[1].value,inputs[2].value);

    if (angles === 180 ) {

        outputE1.innerText ="Yay, The angles Form Triangle";
        // console.log("yes");

    } else { 
        outputE1.innerText = "Oh Oh! The angles don't form a Triangle";
        // console.log("NP");

    }


}


isTriangleBtn.addEventListener("click",isTriangle)


