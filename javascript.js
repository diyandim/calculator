let num1 = 0;
let operator = '';
let num2 = 0;


const buttonValues = [
    ['C', '←', '&divide'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '=',]
];

const buttonContainer = document.querySelector('.calculator-buttons');

buttonValues.forEach(row => {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('button-row');

    row.forEach(value => {
            const button = document.createElement('button');
            button.classList.add('btn');

        if (['&divide', '+', '-', 'x', 'C', '=', '←;'].includes(value)) {
            button.classList.add('blue', 'operator');
        }

        button.innerHTML = value;

        if (value === 'C'){
            button.classList.add('span-2');
        } else if (value === '0'){
            button.classList.add('span-3');
        }

        rowDiv.appendChild(button);
    });

    buttonContainer.appendChild(rowDiv);
});

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(array){
    return array.reduce((product, current) => product * current)
}

function divide(array) {
  return array.reduce((quotient, current) => quotient / current);
}

function operate(operator, a, b){

    if (operator === '+'){
        return add(a, b);
    } else if (operator === '-'){
        return subtract(a, b);
    } else if (operator === '*'){
        return multiply([a, b]);
    } else if (operator === '/'){
        if (b === 0) return 'ERROR: Devide by zero';
        return divide([a, b]);
    } else {
        return 'ERROR: Unknown operator';
    }
}

num1 = 2;
operator = '*';
num2 = 4;

let result = operate(operator, num1, num2);

console.log(result);