const rightArrowBtn = document.getElementById('changelyout');
const leftArrowBtn = document.getElementById('s-changelyout');
const simpleLayout = document.getElementById('btnsmaindiv');
const scientificLayout = document.getElementById('s-btnsmaindiv');

function switchToScientificLayout() {
    simpleLayout.style.display = 'none';
    scientificLayout.style.display = 'block';
}

function switchToSimpleLayout() {
    scientificLayout.style.display = 'none';
    simpleLayout.style.display = 'block';
}

rightArrowBtn.addEventListener('click', switchToScientificLayout);
leftArrowBtn.addEventListener('click', switchToSimpleLayout);

switchToSimpleLayout();


let input = document.getElementById("userInput");
let output = document.getElementById("output");

function clearInput() {
    input.value = '';
    output.innerHTML = '0';
}



function backSpace() {
    let currentValue = input.value;
    let lastChar = currentValue[currentValue.length - 1];

    let pattern = /[+\-*/^sin(cos(tan(pi(e(log(sqrt0-9]/;
    if (pattern.test(lastChar)) {
        input.value = currentValue.substring(0, currentValue.length - 1);
    } else {
        let i = currentValue.length - 1;
        while (i >= 0 && !pattern.test(currentValue[i])) {
            i--;
        }
        input.value = currentValue.substring(0, i);
    }
}

let numButtons = document.getElementsByClassName("numBtn");
let operators = ["%", "*", "/", "+", "-"];
let dotAdded = false;

for (let item of numButtons) {
    item.addEventListener('click', function (e) {
        let btnText = e.target.innerText;
        let lastChar = input.value.charAt(input.value.length - 1);

        if (operators.includes(lastChar)) {
            dotAdded = false;
        }
        if (lastChar === '.' && btnText === '.') {
            return;
        }
        if (btnText === '.') {
            if (dotAdded) {
                return;
            } else {
                dotAdded = true;
            }
        }
        input.value += btnText;
    });
}


// S-j
var scientificButtons = document.getElementsByClassName("s-Btn");
for (let item of scientificButtons) {
    item.addEventListener('click', function (e) {
        btnText = e.target.innerText;
        if (btnText === '.') {
            if (input.value.includes('.')) {
                return;
            }
        }
        input.value += btnText;
    });
}
//

let mathButtons = document.getElementsByClassName("mathSignBtn");
for (let item of mathButtons) {
    item.addEventListener('click', function (e) {
        let btnText = e.target.innerText;
        if (btnText == "=") {
            btnText.style.display = "none"
        } else if (btnText == "x") {
            btnText = "*"
        } else if (btnText == "÷") {
            btnText = "/"
        }
        input.value += btnText;
    });
}

// s-js
let smathButtons = document.getElementsByClassName("s-mathSignBtn");
for (let item of smathButtons) {
    item.addEventListener('click', function (e) {
        let btnText = e.target.innerText;
        if (btnText == "=") {
            btnText.style.display = "none"
        } else if (btnText == "x") {
            btnText = "*"
        } else if (btnText == "÷") {
            btnText = "/"
        }
        input.value += btnText;

    });
}

const sResultBtn = document.getElementById("s-resultBtn");
sResultBtn.addEventListener('click', function () {
    output.innerHTML = eval(input.value);
});

//

function calculate() {
    output.innerHTML = eval(input.value);
}

function sin() {
    input.value = Math.sin(parseFloat(input.value) * Math.PI / 180);
}
function cos() {
    input.value = Math.cos(parseFloat(input.value) * Math.PI / 180);
}
function tan() {
    input.value = Math.tan(parseFloat(input.value) * Math.PI / 180);
}
function squareRoot() {
    input.value = Math.sqrt(parseFloat(input.value));
}
function log() {
    input.value = Math.log10(parseFloat(input.value));
}
function e() {
    input.value = Math.E;
}
function pi() {
    input.value = Math.PI;
}


