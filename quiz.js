
const quizForm =document.querySelector(".quiz-form");

const submitAnswerbtn = document.querySelector("#submit-answer-btn");

const outputQ1 = document.querySelector('#output');

const correctAnswers = ["90°","right angled"];


function calculateScore () {

    let score = 0;
    let index = 0;
    const formResults = new FormData (quizForm);
    for(let value of formResults.values()) {
    if (value === correctAnswers[index]){

        score = score + 1;
    }
    index = index +1
    }

    outputQ1.innerText = 'Your score is ' + score;

}


submitAnswerbtn.addEventListener("click",calculateScore);