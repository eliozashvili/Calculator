'use strict';

const calculatorNumbersClass = ['._C', '._0', '._1', '._2', '._3', '._4', '._5', '._6', '._7', '._8', '._9', '._plus', '._equals', '._minus', '._multiplication', '._division', '._point'];
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
const symbol = ['c', 'C', '+', '-', '*', '/', '=', '.', 'Enter', 'Backspace'];
const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const isAllowed = function (key) {
    return symbol.includes(key) || number.includes(key);
}
// If key is allowed calculator function is called
const getTextContext = function (key) {
    return isAllowed(key) && calculator(key);
}
// Pushes key to number and prints it to monitor
let numbers = '';
let result = 0;

const monitorNum = document.querySelector('.monitor');

const calculator = function (key) {
    // if key is a number or key is a symbol it is added to 'numbers'
    if (number.includes(key) || symbol.includes(key)) {
        monitorNum.textContent = numbers += key.replaceAll('Backspace', '');

        if (key === 'Backspace') {
            numbers = numbers.slice(0, numbers.length - 1);
            monitorNum.textContent = numbers;
        }
        // C clears numbers and result and manipulates with DOM pointerEvents
        if (key === 'c' || key === 'C') {
            numbers = '';
            result = 0;
            monitorNum.textContent = result;

            for (let i = 1; i < calculatorNumbersClass.length; i++) {
                document.querySelector(calculatorNumbersClass[i]).style.pointerEvents = 'auto';
            }
        }
    }

    if (key === '=' || key === 'Enter') {
        numbers = numbers.replaceAll('=', '').replaceAll('Enter', '');
        result = eval(numbers);
        monitorNum.textContent = result;

        for (let i = 1; i < calculatorNumbersClass.length; i++) {
            document.querySelector(calculatorNumbersClass[i]).style.pointerEvents = 'none';
        }
        // if numbers is more than 15 symbols, first character is substracted
        numbers.length > 15 && (numbers = numbers.substr(1));
    }
}