'user strict'

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

if (!debug) {
    console.log = function() {};
    calculator.classList.add('is-debug-mode');
}
// $('.calculator-wrap').draggable({ addClasses: true });

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

let operators = [
    document.getElementById('add-btn'),
    document.getElementById('subtract-btn'),
    document.getElementById('divide-btn'),
    document.getElementById('multiply-btn')
];

numbers.forEach(function(element) {
    element.addEventListener('click', function(event) {
        event.preventDefault();

        currentCalcMode = calculator.dataset.calcMode;

        if (currentCalcMode === 'initial') {
            calcDisplayEl.value = this.value;

            memory.push(calcDisplayEl.value);
        }

        if (currentCalcMode === 'number') {
            calcDisplayEl.value = calcDisplayEl.value + this.value;

            memory.pop();
            memory.push(calcDisplayEl.value);
        }

        if (currentCalcMode === 'operator') {
            calcDisplayEl.value = this.value;

            memory.push(calcDisplayEl.value);
            console.log(memory);
        }

        let currentDisplayEl = document.getElementById('calc-display');
        calculator.dataset.calcMode = 'number';
        currentCalcMode = calculator.dataset.calcMode;

        let currentDisplayVal = parseInt(currentDisplayEl.value);
        console.log(memory);
    }, false);
});

operators.forEach(function(element) {
    element.addEventListener('click', function(event) {
        event.preventDefault();

        let buttonOperator = this.getAttribute('data-operator');

        memory.push({
            'operator': buttonOperator
        });

        calculator.dataset.calcMode = 'operator';
        console.log(memory);
    })
});

clearBtn.addEventListener('click', (event) => {
    event.preventDefault();

    calcDisplayEl.value = "0";
    memory = [];

    calculator.dataset.calcMode = 'initial';
    console.clear();
}, false);