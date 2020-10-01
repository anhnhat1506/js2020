// alert(1111);
const calculator = document.querySelector('.calculator')
const keys = document.querySelector('.calculator__keys')
const display = document.querySelector('.calculator__display')
const previousKeyType = calculator.dataset.previousKeyType

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent
        if (!action) {
            if (displayedNum === '0' || previousKeyType === 'operator') {
                display.textContent = keyContent
            } else {
                display.textContent = displayedNum + keyContent
            }
        }

        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'devide'
        ) {
            key.classList.add('is-depressed')
            // Add custom attribute
            calculator.dataset.previousKeyType = 'operator'
            calculator.dataset.firstValue = displayedNum
            calculator.dataset.operator = action
        }

        if (action === 'decimal') {
            display.textContent = displayedNum + '.'
        }

        // if (action === 'clear') {
        //     console.log('clear key!')
        // }

        if (action === 'calculate') {
            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            const secondValue = displayedNum
            display.textContent = calculate(firstValue, operator, secondValue)
        }


        // Remove .is-depressed class from all keys
        Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'))
    }
});