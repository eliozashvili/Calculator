'use strict';

const monitorNum = document.querySelector('.monitor');

let numbers = [];
//======= Nikitas code
function isAllowed(key) {
    return ['1', '2', '3', '4', '5', '6', '0', '7', '8', '9'].includes(key);
}

function getTextContext(key) {
    return isAllowed(key) ? pushNumbers(key) : console.log('string not allowed');
}

function pushNumbers(key) {
    numbers.push(key);
    monitorNum.textContent = numbers.join('');
}

document.addEventListener('keydown', (event) => {
    getTextContext(event.key);
})

const calcNumbers = ['._0', '._1', '._2', '._3', '._4', '._5', '._6', '._7', '._8', '._9'];

for (let num of calcNumbers) {
    document.querySelector(num).addEventListener('click', () => {
        getTextContext(num.replace('._', ''));
    })
}
/* ======================================== */
const C = document.querySelector('.C');
// Assigning empty array to reset monitor
C.addEventListener('click', () => {
    numbers = [];
    monitorNum.textContent = numbers;
})
document.addEventListener('keydown', (event) => {
    if (event.key === 'c' || event.key === 'C') {
        numbers = [];
        monitorNum.textContent = numbers;
    }
})
/* ======================================== */
