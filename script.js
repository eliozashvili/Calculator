'use strict';

const monitorNum = document.querySelector('.monitor');

let numbers = [];
const calculatorNumbersClass = ['._0', '._1', '._2', '._3', '._4', '._5', '._6', '._7', '._8', '._9', '._C', '._plus', '._equals', '._minus', '._multiplication', '._division', '._point'];
// For click event
for (let num of calculatorNumbersClass) {
    document.querySelector(num).addEventListener('click', () => {
        if (num === '._plus')
            getTextContext('+');
        else if (num === '._minus')
            getTextContext('-');
        else if (num === '._multiplication')
            getTextContext('*');
        else if (num === '._division')
            getTextContext('/');
        else if (num === '._point')
            getTextContext('.');
        else if (num === '._equals')
            getTextContext('=');
        else
            getTextContext(num.replace('._', ''));
    })
}
// For keydown event
document.addEventListener('keydown', event => {
    getTextContext(event.key);
})
// Checking if symbol is in our allowed list
const symbols = ['c', 'C', '+', '-', '*', '/', '=', '.'];
const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const isAllowed = function (key) {
    return symbols.includes(key) || number.includes(key);
}
// Pushes key to number array and prints it to monitor
let args = [];
const pushNumbers = function (key) {
    if (number.includes(key)) {
        numbers.push(key);
        monitorNum.textContent = numbers.join('');
    } else if (symbols.includes(key)) {
        if (key === 'c' || key === 'C') {
            numbers = [];
            args = [];
            monitorNum.textContent = '0';
        } else if (key === '+') {
            let arrToNumber = Number(numbers.map((toInt) => parseInt(toInt, 10)).join(''));
            args.push(arrToNumber);
            plus(...args);
            numbers = [];
        }
    }
    numbers.length > 15 && numbers.shift();
}

// If key is allowed pushNumbers function pushes to numbers array
const getTextContext = function (key) {
    return isAllowed(key) ? pushNumbers(key) : console.log('Character not allowed.');
}

const plus = function (...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    monitorNum.textContent = sum;
    return sum;
}