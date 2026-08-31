const app = document.getElementById('calculator-app');

const heading = document.createElement('h2');
heading.innerText = 'Simple Calculator';
app.appendChild(heading);

const num1Input = document.createElement('input');
num1Input.type = 'number';
num1Input.placeholder = 'First number';
app.appendChild(num1Input);

const num2Input = document.createElement('input');
num2Input.type = 'number';
num2Input.placeholder = 'Second number';
app.appendChild(num2Input);

const buttonGroup = document.createElement('div');
buttonGroup.className = 'button-group';
app.appendChild(buttonGroup);

const resultDiv = document.createElement('div');
resultDiv.className = 'result-display';
app.appendChild(resultDiv);

const operations = ['Add', 'Subtract', 'Multiply', 'Divide'];

operations.forEach(op => {
    const btn = document.createElement('button');
    btn.innerText = op;
    
    btn.addEventListener('click', function() {
        calculate(op.toLowerCase());
    });

    buttonGroup.appendChild(btn);
});

function calculate(action) {
    resultDiv.className = 'result-display';
    resultDiv.innerText = '';

    if (num1Input.value === '' || num2Input.value === '') {
        resultDiv.innerText = 'Error: Please enter both numbers.';
        resultDiv.classList.add('error-text');
        return;
    }

    const value1 = parseFloat(num1Input.value);
    const value2 = parseFloat(num2Input.value);
    let finalResult = 0;

    if (action === 'add') {
        finalResult = value1 + value2;
    } else if (action === 'subtract') {
        finalResult = value1 - value2;
    } else if (action === 'multiply') {
        finalResult = value1 * value2;
    } else if (action === 'divide') {
        if (value2 === 0) {
            resultDiv.innerText = 'Error: Cannot divide by zero.';
            resultDiv.classList.add('error-text');
            return;
        }
        finalResult = value1 / value2;
    }

    resultDiv.innerText = 'Result: ' + finalResult;
    resultDiv.classList.add('success-text');
}