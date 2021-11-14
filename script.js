const numbers = document.querySelectorAll(".number")
console.log(numbers)
numbers.forEach((number) => {
    console.log(number)
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

const operators = document.querySelectorAll(".operator")
console.log(operators)
operators.forEach((operator) => {
    console.log(operator)
    operator.addEventListener("click", (event) => {
       inputOperator(event.target.value)
    })
})

const inputOperator = (operator) => {
    prevNumber = currentNumber
    calculationOperator = operator
    currentNumber = ''
}

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})

const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber) 
            break
        case '-':
            result = parseInt(prevNumber) - parseInt(currentNumber) 
            break
        case '*':
            result = parseInt(prevNumber) * parseInt(currentNumber) 
            break
        case '/':
            result = parseInt(prevNumber) / parseInt(currentNumber) 
            break
        default:
            return
    }
    currentNumber = result
    calculationOperator= ''
}

const clearBtn = document.querySelector('.clear')

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}
