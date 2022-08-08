const NUMS = document.getElementsByClassName('numbers')
const SIGNS = document.getElementsByClassName('signs')
const EQUALS = document.getElementsByClassName('equals')[0]
const DEL = document.getElementsByClassName('delete')[0]
const C = document.getElementsByClassName('all-clear')[0]
const INVERSE = document.getElementsByClassName('inverse')[0]
const PREVIOUS_ELEMENT = document.getElementsByClassName('previous-output')[0]
const CURRENT_ELEMENT = document.getElementsByClassName('current-output')[0]

class Calculator {
  // clear initially
  constructor(previousElement, currentElement) {
    this.previousElement = previousElement
    this.currentElement = currentElement
    this.allClear()
  }

  // all clear method
  allClear() {
    this.currentNum = ''
    this.previousNum = ''
    this.sign = undefined
  }

  // delete one by one
  delete() {
    this.currentNum = this.currentNum.toString().slice(0, -1)
  }

  // number concatenation
  appendNumber(num) {
    if (num === '.' && this.currentNum.toString().includes('.')) return
    this.currentNum = this.currentNum.toString() + num.toString()
  }

  // choose operation
  chooseSign(sign) {
    if (this.currentNum === '') {
      if (this.previousNum === '') return
      else {
        this.sign = sign
        return
      }
    } else if (
      this.currentNum.toString().includes('.') &&
      this.currentNum.length === 1
    )
      return
    else if (this.previousNum !== '') this.calculate()

    this.sign = sign
    this.previousNum = this.currentNum
    this.currentNum = ''
  }

  // inverse
  inverse() {
    this.currentNum = 1 / parseFloat(this.currentNum)
  }

  // calculation process
  calculate() {
    let calculation
    const prev = parseFloat(this.previousNum)
    const current = parseFloat(this.currentNum)
    if (isNaN(prev) || isNaN(current)) return
    switch (this.sign) {
      case '+':
        calculation = prev + current
        break
      case '-':
        calculation = prev - current
        break
      case 'x':
        calculation = prev * current
        break
      case '/':
        calculation = prev / current
        break
      default:
        return
    }

    this.currentNum = calculation
    this.sign = undefined
    this.previousNum = ''
  }

  // whenever user click a button, update output.
  updateOutput() {
    this.currentElement.innerText = this.currentNum
    if (this.sign != null) {
      this.previousElement.innerText = this.previousNum + ' ' + this.sign
    } else {
      this.previousElement.innerText = ''
    }
  }
}

// create a calculator abject
const calculator = new Calculator(PREVIOUS_ELEMENT, CURRENT_ELEMENT)

// button activities
for (const e of NUMS) {
  e.addEventListener('click', () => {
    calculator.appendNumber(e.innerText)
    calculator.updateOutput()
  })
}

for (const e of SIGNS) {
  e.addEventListener('click', () => {
    calculator.chooseSign(e.innerText)
    calculator.updateOutput()
  })
}

EQUALS.addEventListener('click', () => {
  calculator.calculate()
  calculator.updateOutput()
})

C.addEventListener('click', () => {
  calculator.allClear()
  calculator.updateOutput()
})

DEL.addEventListener('click', () => {
  calculator.delete()
  calculator.updateOutput()
})

INVERSE.addEventListener('click', () => {
  calculator.inverse()
  calculator.updateOutput()
})
