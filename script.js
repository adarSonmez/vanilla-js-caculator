// DOM constants
const nums = document.querySelectorAll('[data-number]');
const signs = document.querySelectorAll('[data-sign]');
const equals = document.querySelector('[data-equals]');
const DEL = document.querySelector('[data-DEL]');
const AC = document.querySelector('[data-AC]');
const previousElement = document.querySelector('[data-previous-output]');
const currentElement = document.querySelector('[data-current-output]');

class Calculator {
    // constructor function
    constructor(previousElement, currentElement) {
        this.previousElement = previousElement;
        this.currentElement = currentElement;
        this.allClear();
    };

    // all clear method
    allClear() {
        this.currentNum = '';
        this.previousNum = '';
        this.sign = undefined;
    };

    // delete one number
    delete() {
        this.currentNum = this.currentNum.toString().slice(0, -1);
    };

    // number concatenation
    appendNumber(num) {
        if (num === '.' && this.currentNum.includes('.')) return;
        this.currentNum = this.currentNum.toString() + num.toString();
    }

    // choose operation
    chooseSign(sign) {
        if (this.currentNum === '') return;
        if (this.previousNum !== '') {
            this.calculate();
        }

        this.sign = sign;
        this.previousNum = this.currentNum;
        this.currentNum = '';
    }

    // calculation process
    calculate() {
        let calculation;
        const prev = parseFloat(this.previousNum);
        const current = parseFloat(this.currentNum);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.sign) {
            case '+':
                calculation = prev + current;
                break;
            case '-':
                calculation = prev - current;
                break;
            case 'x':
                calculation = prev * current;
                break;
            case '÷':
                calculation = prev / current;
                break;
            default:
                return;
        }

        this.currentNum = calculation;
        this.sign = undefined;
        this.previousNum = '';
    }

    // whenever user click a button, update output.
    updateOutput() {
        this.currentElement.innerText = this.currentNum;
        if (this.sign != null) {
            this.previousElement.innerText = this.previousNum + ' ' + this.sign;
        } else {
            this.previousElement.innerText = '';
        }
    }
}

// create a calculator abject
const calculator = new Calculator(previousElement, currentElement);

// button activities
nums.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateOutput();
    });
});

signs.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseSign(button.innerText);
        calculator.updateOutput();
    });
});

equals.addEventListener('click', button => {
    calculator.calculate();
    calculator.updateOutput();
});

AC.addEventListener('click', button => {
    calculator.allClear();
    calculator.updateOutput();
});

DEL.addEventListener('click', button => {
    calculator.delete();
    calculator.updateOutput();
});

document.addEventListener('keyup', control);

// activate keyboard
function control(e) {
    if (e.keyCode === 8) {
        calculator.delete();
        calculator.updateOutput();
    } else if (e.keyCode === 46) {
        calculator.allClear();
        calculator.updateOutput();
    } else if (e.keyCode == 13) {
        calculator.calculate();
        calculator.updateOutput();
    } else if (e.keyCode === 48) {
        calculator.appendNumber(0);
        calculator.updateOutput();
    } else if (e.keyCode === 49) {
        calculator.appendNumber(1);
        calculator.updateOutput();
    } else if (e.keyCode === 50) {
        calculator.appendNumber(2);
        calculator.updateOutput();
    } else if (e.keyCode === 51) {
        calculator.appendNumber(3);
        calculator.updateOutput();
    } else if (e.keyCode === 52) {
        calculator.appendNumber(4);
        calculator.updateOutput();
    } else if (e.keyCode === 53) {
        calculator.appendNumber(5);
        calculator.updateOutput();
    } else if (e.keyCode === 54) {
        calculator.appendNumber(6);
        calculator.updateOutput();
    } else if (e.keyCode === 55) {
        calculator.appendNumber(7);
        calculator.updateOutput();
    } else if (e.keyCode === 56) {
        calculator.appendNumber(8)
        calculator.updateOutput();
    } else if (e.keyCode === 57) {
        calculator.appendNumber(9);
        calculator.updateOutput();
    } else if (e.keyCode === 96) {
        calculator.appendNumber(0);
        calculator.updateOutput();
    } else if (e.keyCode === 97) {
        calculator.appendNumber(1);
        calculator.updateOutput();
    } else if (e.keyCode === 98) {
        calculator.appendNumber(2);
        calculator.updateOutput();
    } else if (e.keyCode === 99) {
        calculator.appendNumber(3);
        calculator.updateOutput();
    } else if (e.keyCode === 100) {
        calculator.appendNumber(4);
        calculator.updateOutput();
    } else if (e.keyCode === 101) {
        calculator.appendNumber(5);
        calculator.updateOutput();
    } else if (e.keyCode === 102) {
        calculator.appendNumber(6);
        calculator.updateOutput();
    } else if (e.keyCode === 103) {
        calculator.appendNumber(7);
        calculator.updateOutput();
    } else if (e.keyCode === 104) {
        calculator.appendNumber(8)
        calculator.updateOutput();
    } else if (e.keyCode === 105) {
        calculator.appendNumber(9);
        calculator.updateOutput();
    } else if (e.keyCode === 109) {
        calculator.chooseSign("-");
        calculator.updateOutput();
    } else if (e.keyCode === 189) {
        calculator.chooseSign("-");
        calculator.updateOutput();
    } else if (e.keyCode === 107) {
        calculator.chooseSign("+");
        calculator.updateOutput();
    } else if (e.keyCode === 106) {
        calculator.chooseSign("x");
        calculator.updateOutput();
    } else if (e.keyCode === 223) {
        calculator.chooseSign("x");
        calculator.updateOutput();
    } else if (e.keyCode === 111) {
        calculator.chooseSign("÷");
        calculator.updateOutput();
    } else if (e.keyCode === 110) {
        calculator.appendNumber(".");
        calculator.updateOutput();
    } else if (e.keyCode === 190) {
        calculator.appendNumber(".");
        calculator.updateOutput();
    } else if (e.keyCode === 188) {
        calculator.appendNumber(".");
        calculator.updateOutput();
    } else {
        alert("Invalid Input!")
    }
}