// alert(1111);
const calculator = document.querySelector('.calculator')
const keys = document.querySelector('.calculator__keys')
const display = document.querySelector('.calculator__display')
const previousKeyType = calculator.dataset.previousKeyType


const calculate = (n1, operator, n2) => {
    const firstNum = parseFloat(n1)
    const secondNum = parseFloat(n2)
    if (operator === 'add') return firstNum + secondNum
    if (operator === 'subtract') return firstNum - secondNum
    if (operator === 'multiply') return firstNum * secondNum
    if (operator === 'divide') return firstNum / secondNum
        // return result
}

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target
        const resultString = createResultString()
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent

        const createResultString = () => {
            if (!action) {
                // Variables required are:
                // 1. keyContent
                // 2. displayedNum
                // 3. previousKeyType
                // 4. action
                return displayedNum === '0' || previousKeyType === 'operator' || previousKeyType === 'calculate' ? keyContent : displayedNum + keyContent
                    // if (displayedNum === '0' ||
                    //     previousKeyType === 'operator' ||
                    //     previousKeyType === 'calculate'
                    // ) {
                    //     return keyContent
                    // } else {
                    //     return displayedNum + keyContent
                    // }
                    // calculator.dataset.previousKey = 'number'
            }
            if (action === 'decimal') {
                if (!displayedNum.includes('.')) return displayedNum + '.'
                if (previousKeyType === 'operator' || previousKeyType === 'calculate') return '0.'
                    // if (!displayedNum.includes('.')) {
                    //     display.textContent = displayedNum + '.'
                    // } else if (previousKeyType === 'operator' || previousKeyType === 'calculate') {
                    //     display.textContent = '0.'
                    // }
                    // calculator.dataset.previousKey = 'decimal'
            }
        }



        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'devide'
        ) {
            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            const secondValue = displayedNum

            if (firstValue && operator && previousKeyType !== 'operator' && previousKeyType !== 'calculate') {
                const calcValue = calculate(firstValue, operator, secondValue)
                display.textContent = calcValue
                    // Update calculated value as firstValue
                calculator.dataset.firstValue = calcValue
            } else {
                // If there are no calculations, set displayedNum as the firstValue
                calculator.dataset.firstValue = displayedNum
            }

            key.classList.add('is-depressed')
                // Add custom attribute
            calculator.dataset.previousKeyType = 'operator'
                // calculator.dataset.firstValue = displayedNum
            calculator.dataset.operator = action
        }

        if (action === 'clear') {
            // const clearButton = calculator.querySelector('[data-action=clear]')
            // clearButton.textContent = 'AC'
            // calculator.dataset.previousKeyType = 'clear'
            if (key.textContent === 'AC') {
                calculator.dataset.firstValue = ''
                calculator.dataset.modValue = ''
                calculator.dataset.operator = ''
                calculator.dataset.previousKeyType = ''
            } else {
                key.textContent = 'AC'
            }

            display.textContent = 0
            calculator.dataset.previousKeyType = 'clear'
        }

        if (action === 'calculate') {
            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            const secondValue = displayedNum

            if (firstValue) {
                if (previousKeyType === 'calculate') {
                    firstValue = displayedNum
                    secondValue = calculator.dataset.modValue
                }
                display.textContent = calculate(firstValue, operator, secondValue)
            }
            // Set modValue attribute
            calculator.dataset.modValue = secondValue
            calculator.dataset.previousKeyType = 'calculate'
        }


        // Remove .is-depressed class from all keys
        Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'))
    }
});