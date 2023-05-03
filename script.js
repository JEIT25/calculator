let calculatorContainer = document.querySelector('form');
let Buttons = document.querySelectorAll('button');
calculatorContainer.addEventListener('submit', (evt) => { evt.preventDefault() });
for (let i = 0; i < Buttons.length; i++) {
    if (i === 0) {
        Buttons[i].addEventListener('click', (evy) => {
            calculatorContainer.elements[0].value = '';
        })
    } else if (i === 1) {
        Buttons[i].addEventListener('click', (evy) => {
            calculatorContainer.elements[0].value = calculatorContainer.elements[0].value.slice(0, -1);
        })
    } else if (i === 2) {
        Buttons[i].addEventListener('click', (evy) => {
            calculatorContainer.elements[0].value += "%";
        })
    } else if (i === 3) {
        Buttons[i].addEventListener('click', (evy) => {
            calculatorContainer.elements[0].value += "/";
        })
    } else if (i === 4) {
        Buttons[i].addEventListener('click', (evy) => {
            calculatorContainer.elements[0].value += "7";
        })
    } else if (i === 5) {
        Buttons[i].addEventListener('click', (evy) => {
            calculatorContainer.elements[0].value += "8";
        })
    } else if (i === 6) {
        Buttons[i].addEventListener('click', (evy) => {
            calculatorContainer.elements[0].value += "9";
        })
    } else if (i === 7) {
        Buttons[i].addEventListener('click', (evy) => {
            calculatorContainer.elements[0].value += "*";
        })
    } else if (i === 8) {
        Buttons[i].addEventListener('click', (evy) => {
            calculatorContainer.elements[0].value += "4";
        })
    } else if (i === 9) {
        Buttons[i].addEventListener('click', (evy) => {
            calculatorContainer.elements[0].value += "5";
        })
    } else if (i === 10) {
        Buttons[i].addEventListener('click', (evy) => {
            calculatorContainer.elements[0].value += "6";
        })
    } else if (i === 11) {
        Buttons[i].addEventListener('click', (evy) => {
            calculatorContainer.elements[0].value += "-";
        })
    } else if (i === 12) {
        Buttons[i].addEventListener('click', (evy) => {
            calculatorContainer.elements[0].value += "1";
        })
    } else if (i === 13) {
        Buttons[i].addEventListener('click', (evy) => {
            calculatorContainer.elements[0].value += "2";
        })
    } else if (i === 14) {
        Buttons[i].addEventListener('click', (evy) => {
            calculatorContainer.elements[0].value += "3";
        })
    } else if (i === 15) {
        Buttons[i].addEventListener('click', (evy) => {
            calculatorContainer.elements[0].value += "+";
        })
    } else if (i === 16) {
        Buttons[i].addEventListener('click', (evy) => {
            calculatorContainer.elements[0].value += "0";
        })
    } else if (i === 17) {
        Buttons[i].addEventListener('click', (evy) => {
            calculatorContainer.elements[0].value += ".";
        })
    } else if (i === 18) {
        Buttons[i].addEventListener('click', (evy) => {
            calculatorContainer.elements.input.value = parseInt(eval(calculatorContainer.elements.input.value));
        })
    }
}
