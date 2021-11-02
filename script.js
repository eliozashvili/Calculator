'use strict';

const monitorNum = document.querySelector('.monitor');

let numbers = [];
// When you click/press value is pushed to numbers array
/* ======================================== */
const zero = document.querySelector('._0');

zero.addEventListener('click', () => {
    const eventZero = 0;
    numbers.push(eventZero);
    monitorNum.textContent = numbers.join('');
})
document.addEventListener('keydown', (event) => {
    if (event.key === '0') {
        const eventZero = 0;
        numbers.push(eventZero);
        monitorNum.textContent = numbers.join('');
    }
})
/* ======================================== */
const one = document.querySelector('._1');

one.addEventListener('click', () => {
    const eventOne = 1;
    numbers.push(eventOne);
    monitorNum.textContent = numbers.join('');
})
document.addEventListener('keydown', (event) => {
    if (event.key === '1') {
        const eventOne = 1;
        numbers.push(eventOne);
        monitorNum.textContent = numbers.join('');
    }
})
/* ======================================== */
const two = document.querySelector('._2');

two.addEventListener('click', () => {
    const eventTwo = 2;
    numbers.push(eventTwo);
    monitorNum.textContent = numbers.join('');
})
document.addEventListener('keydown', (event) => {
    if (event.key === '2') {
        const eventTwo = 2;
        numbers.push(eventTwo);
        monitorNum.textContent = numbers.join('');
    }
})
/* ======================================== */
const three = document.querySelector('._3');

three.addEventListener('click', () => {
    const eventThree = 3;
    numbers.push(eventThree);
    monitorNum.textContent = numbers.join('');
})
document.addEventListener('keydown', (event) => {
    if (event.key === '3') {
        const eventThree = 3;
        numbers.push(eventThree);
        monitorNum.textContent = numbers.join('');
    }
})
/* ======================================== */
const four = document.querySelector('._4');

four.addEventListener('click', () => {
    const eventFour = 4;
    numbers.push(eventFour);
    monitorNum.textContent = numbers.join('');
})
document.addEventListener('keydown', (event) => {
    if (event.key === '4') {
        const eventFour = 4;
        numbers.push(eventFour);
        monitorNum.textContent = numbers.join('');
    }
})
/* ======================================== */
const five = document.querySelector('._5');

five.addEventListener('click', () => {
    const eventFive = 5;
    numbers.push(eventFive);
    monitorNum.textContent = numbers.join('');
})
document.addEventListener('keydown', (event) => {
    if (event.key === '5') {
        const eventFive = 5;
        numbers.push(eventFive);
        monitorNum.textContent = numbers.join('');
    }
})
/* ======================================== */
const six = document.querySelector('._6');

six.addEventListener('click', () => {
    const eventSix = 6;
    numbers.push(eventSix);
    monitorNum.textContent = numbers.join('');
})
document.addEventListener('keydown', (event) => {
    if (event.key === '6') {
        const eventSix = 6;
        numbers.push(eventSix);
        monitorNum.textContent = numbers.join('');
    }
})
/* ======================================== */
const seven = document.querySelector('._7');

seven.addEventListener('click', () => {
    const eventSeven = 7;
    numbers.push(eventSeven);
    monitorNum.textContent = numbers.join('');
})
document.addEventListener('keydown', (event) => {
    if (event.key === '7') {
        const eventSeven = 7;
        numbers.push(eventSeven);
        monitorNum.textContent = numbers.join('');
    }
})
/* ======================================== */
const eight = document.querySelector('._8');

eight.addEventListener('click', () => {
    const eventEight = 8;
    numbers.push(eventEight);
    monitorNum.textContent = numbers.join('');
})
document.addEventListener('keydown', (event) => {
    if (event.key === '8') {
        const eventEight = 8;
        numbers.push(eventEight);
        monitorNum.textContent = numbers.join('');
    }
})
/* ======================================== */
const nine = document.querySelector('._9');

nine.addEventListener('click', () => {
    const eventNine = 9;
    numbers.push(eventNine);
    monitorNum.textContent = numbers.join('');
})
document.addEventListener('keydown', (event) => {
    if (event.key === '9') {
        const eventNine = 9;
        numbers.push(eventNine);
        monitorNum.textContent = numbers.join('');
    }
})
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
