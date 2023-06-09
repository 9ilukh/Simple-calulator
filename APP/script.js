const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator-keys');
const display = calculator.querySelector('.calculator-screen');

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.value;

    Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'));
    if (!action) {
      if (displayedNum === '0') {
        display.value = keyContent;
      } else {
        display.value = displayedNum + keyContent;
      }
    }

    if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
      key.classList.add('is-depressed');
      calculator.dataset.previousKeyType = 'operator';
      calculator.dataset.firstValue = displayedNum;
      calculator.dataset.operator = action;
    }

    if (action === 'decimal') {
      display.value = displayedNum + '.';
    }

    if (action === 'all-clear') {
      display.value = '0';
    }

    if (action === 'calculate') {
      const secondValue = displayedNum;
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      display.value = calculate(firstValue, operator, secondValue);
    }
  }
});

const calculate = (n1, operator, n2) => {
  let result = '';

  if (operator === 'add') {
    result = parseFloat(n1) + parseFloat(n2);
  } else if (operator === 'subtract') {
    result = parseFloat(n1) - parseFloat(n2);
  } else if (operator === 'multiply') {
    result = parseFloat(n1) * parseFloat(n2);\n  } else if (operator === 'divide') {
    result = parseFloat(n1) / parseFloat(n2);
  }

  return result;
};