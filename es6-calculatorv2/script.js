'use strict';

let calculator = document.getElementById('calculator');
let calcDisplayEl = document.getElementById('calc-display');
let calcDisplayValue = calcDisplayEl.value;
let currentCalcMode = calculator.dataset.calcMode;
let calcBtn = document.getElementById('calc-btn');
let clearBtn = document.getElementById('clear-btn');
let decimalBtn = document.getElementById('decimal-btn');
let percentageBtn = document.getElementById('percentage-btn');
let memory = [];
let debug = false;

// If in debug mode, we output console logs and show debug info 
if (!debug) {
    // Turn off all console logs conveniently
    console.log = function() {};

    // Turn off debug data displaying calc mode 
    calculator.classList.add('is-debug-mode');
}

// Make calculator draggable 
// $('.calculator-wrap').draggable({addClasses: true});


// Array of number button elements
let numbers = [
    document.getElementById('btn-1'),
    document.getElementById('btn-2'),
    document.getElementById('btn-3'),
    document.getElementById('btn-4'),
    document.getElementById('btn-5'),
    document.getElementById('btn-6'),
    document.getElementById('btn-7'),
    document.getElementById('btn-8'),
    document.getElementById('btn-9'),
    document.getElementById('btn-0')
];


// Array of operator button elements
let operators = [
    document.getElementById('add-btn'),
    document.getElementById('subtract-btn'),
    document.getElementById('divide-btn'),
    document.getElementById('multiply-btn')
];


numbers.forEach(function(element) {
    // console.log(element);
    element.addEventListener('click', function(event) {
        event.preventDefault();
        currentCalcMode = calculator.dataset.calcMode;

        if (currentCalcMode === 'initial') {

            calcDisplayEl.value = this.value;

            memory.push(calcDisplayEl.value);

        }

        if (currentCalcMode === 'number') {

            // append the last number pressed to the value
            calcDisplayEl.value = calcDisplayEl.value + this.value;

            // We remove the last item (a number) from the array, and then update the array with the currect value
            memory.pop();

            // Update memory
            memory.push(calcDisplayEl.value);
        }

        if (currentCalcMode === 'operator') {

            calcDisplayEl.value = this.value;

            memory.push(calcDisplayEl.value);

            console.log(memory);

        }

        let currentDisplayEl = document.getElementById('calc-display');

        // Set calc mode to number
        calculator.dataset.calcMode = 'number';

        // Update calc mode var
        currentCalcMode = calculator.dataset.calcMode;

        let currentDisplayVal = parseInt(currentDisplayEl.value);

        console.log(memory);

    }, false);
});

// Bind click event to each operator button
operators.forEach(function(element) {
    element.addEventListener('click', function(event) {
        event.preventDefault();

        // Gets value from buttons data-operator attr.
        let buttonOperator = this.getAttribute('data-operator');

        memory.push({
            'operator': buttonOperator
        });


        // Set calc mode to operator
        calculator.dataset.calcMode = 'operator';
        console.log(memory);

    });
});

clearBtn.addEventListener('click', event => {
    event.preventDefault();

    // Reset some stuff
    calcDisplayEl.value = "0";
    memory = [];

    // Set calc mode to initial
    calculator.dataset.calcMode = 'initial';

    // console.log(memory);
    console.clear();

}, false);

decimalBtn.addEventListener('click', event => {
    event.preventDefault();

    if (calcDisplayEl.value !== '0') {
        calcDisplayEl.value = calcDisplayEl.value + '.';
    }
}, false);

percentageBtn.addEventListener('click', event => {
    event.preventDefault();
    if (calcDisplayEl.value !== '0') {
        calcDisplayValue.value = parseInt(calcDisplayEl.value) / 100;
    }
    memory = [calcDisplayEl.value];
    console.log(memory);
}, false);

calcBtn.addEventListener('click', event => {
    event.preventDefault();
    console.log(memory);

    let previousVal = memory[0];
    let operator = memory[1];
    let currentVal = memory[2];

    let calcMethodToUse = operator.operator;
    let result = '';

    switch (calcMethodToUse) {
        case 'add':
            result = add(previousVal, currentVal);
            break;
        case 'subtract':
            result = subtract(previousVal, currentVal);
            break;
        case 'multiply':
            result = multiply(previousVal, currentVal);
            break;
        case 'divide':
            result = divide(previousVal, currentVal);
            break;
    }
    calcDisplayEl.value = result;
    memory = [result];
    console.log(memory);
}, false);


//addition
const add = (a, b) => {
    return +a + +b;
};

const subtract = (a, b) => {
    return a - b;
};
const multiply = (a, b) => {
    return a * b;
}
const divide = (a, b) => {
    return a / b;
}

window.addEventListener("keyup", checkKeyPressed, false);

function checkKeyPressed(e) {
    console.log('click');

    if (calcDisplayEl.is(':focus')) {
        return;
    }

    for (let i = 48; i < 58; i++) {
        console.log(i);

        if (e.keyCode == [i]) {
            $('[data-btn-val="' + ([i] - 48) + '"]').trigger('click');
        }
    }

    if (e.which == 107) {
        $('[data-operator="add"]').trigger('click');
    }

    if (e.which == 109) {
        $('[data-operator="subtract"]').trigger('click');
    }

    if (e.which == 13 || e.which == 187) {
        $('[data-operator="equal"]').trigger('click');
    }

    if (e.keyCode == 67) {
        console.log('cmd + c');
        $('[data-operator="clear"]').trigger('click');
    }
}