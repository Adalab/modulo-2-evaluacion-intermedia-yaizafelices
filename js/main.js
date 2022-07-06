'use strict';

const numberInput = document.querySelector ('.js_number');
const btn = document.querySelector ('.js_button');
const clue = document.querySelector ('.js_clue');
const tryNumber = document.querySelector ('.js_try');

const randomNumber = getRandomNumber(100);

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    };

// console.log(getRandomNumber(100));


const changeTextClue = () => {

     let numberChosen = parseInt(numberInput.value);

    console.log(randomNumber);



    if (numberChosen > randomNumber){
        clue.innerHTML = "Pista: Número demasiado alto";
    }

    if (numberChosen < randomNumber){
        clue.innerHTML = "Pista: Número demasiado bajo";
    }

    if (numberChosen === randomNumber){
        clue.innerHTML = "¡¡¡HAS GANADO CAMPEONA!!!";
    }
}

const changeNumberTry = () => {
    let numberOfTrys = parseInt(tryNumber.innerHTML);
    tryNumber.innerHTML = numberOfTrys + 1;
}


function handleClick(ev) {
    ev.preventDefault();

    changeTextClue();
    changeNumberTry();
    
};

btn.addEventListener("click", handleClick);

