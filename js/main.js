'use strict';

const numberInput = document.querySelector ('.js_number');
const btn = document.querySelector ('.js_button');
const clue = document.querySelector ('.js_clue');
const tryNumber = document.querySelector ('.js_try');
let numberOfTrys = 0;

const randomNumber = getRandomNumber(100);

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    };

const changeTextClue = (event) => {
     let numberChosen = parseInt(numberInput.value);
     console.log(randomNumber);

    if (numberChosen < 0 || numberChosen > 100){
        alert("Debe de ser un número entre 1 y 100");
        return;
    }

    else if (numberChosen > randomNumber){
        clue.innerHTML = "Pista: Número demasiado alto";
    }

    else if (numberChosen < randomNumber){
        clue.innerHTML = "Pista: Número demasiado bajo";
    }

    else {
        clue.innerHTML = "¡¡¡HAS GANADO CAMPEONA!!!";
    }
    changeNumberTry();
}

const changeNumberTry = () => {
    numberOfTrys += 1;
    tryNumber.innerHTML = numberOfTrys;
}


function handleClick(event) {
    event.preventDefault();
    changeTextClue();   
};

btn.addEventListener("click", handleClick);
