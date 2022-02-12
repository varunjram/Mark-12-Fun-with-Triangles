const sidesInput = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector('#hypotenuse-btn');
const outpitH1  = document.querySelector('#output');



function calculateSumOfSquares (a,b){

    const sumOfSquares = a*a + b*b;

    // console.log(sumOfSquares);

    return sumOfSquares;
}




function calculateHypotenuse() {


    const sumOfSquares = calculateSumOfSquares (Number(sidesInput[0].value),Number(sidesInput[1].value))

    const lengthOfHypotenuse = Math.sqrt(sumOfSquares)

    console.log(lengthOfHypotenuse);

    outpitH1.innerText = "The length of Hypotenuse is " + lengthOfHypotenuse;

}

hypotenuseBtn.addEventListener('click' , calculateHypotenuse);