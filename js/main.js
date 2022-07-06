'use strict';

const numberChosen = document.querySelector ('.js_number');
const btn = document.querySelector ('.js_button');
const clue = document.querySelector ('.js_clue');
const tryNumber = document.querySelector ('.js_try');

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    };

// console.log(getRandomNumber(100));


const changeText = () => {
    const randomNumber = getRandomNumber(100);
    console.log(randomNumber);
    if (randomNumber > numberChosen){
        clue.innerHTML = 
    }
}


function handleClick(ev) {
    ev.preventDefault();
    changeText();
};

btn.addEventListener("click", handleClick);

