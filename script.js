let container = document.querySelector('.container');
let arithmatic = document.querySelector('.arithmatic');
let numpad = document.querySelector('.num-pad');
let screen = document.querySelector('.screen');
let firstNum = null;
let secondNum = null;
let arth = null;
let wasPreviousNum = null;

// Create arithmatic buttons

for (let i = 0; i < 4; i ++) {
    let aButton = document.createElement('button');
    aButton.classList.add('arith');
    aButton.addEventListener('click', buttonFunction);
    if (i == 0) {
        aButton.innerHTML = "+";
    } else if (i == 1) {
        aButton.innerHTML = "-";
    } else if (i == 2) {
        aButton.innerHTML = "x";
    } else if (i == 3) {
        aButton.innerHTML = "➗";
    }

    arithmatic.appendChild(aButton);
}

// Create numpad with operator buttons

for (let i = 1; i < 17; i ++) {
    let aButtons = document.createElement('button');
    // aButtons.classList.add('arith');
    aButtons.addEventListener('click', buttonFunction);
    if (i > 4 && i < 8) {
        aButtons.innerHTML = i - 1;
        aButtons.classList.add('digit');
    } else if (i > 8 && i < 12) {
        aButtons.innerHTML = i - 2;
        aButtons.classList.add('digit');
    } else if (i == 4){
        aButtons.innerHTML = '%';
    } else if (i == 8) {
        aButtons.innerHTML = '()';
    } else if (i == 12) {
        aButtons.innerHTML = 'AC';
    } else if (i == 16) {
        aButtons.innerHTML = '=';
    } else if (i == 13) {
        aButtons.innerHTML = '0';
        aButtons.classList.add('digit');
    } else if (i == 14) {
        aButtons.innerHTML = '.';
    } else if (i == 15) {
        aButtons.innerHTML = '⬅️';
    } else {
        aButtons.innerHTML = i;
        aButtons.classList.add('digit');
    }

    numpad.appendChild(aButtons);
}

// Display the digit and store it

function buttonFunction(e) {



    if (e.target.classList[0] == 'digit') {

        if (firstNum != null && arth != null) {
            if (wasPreviousNum == null || !wasPreviousNum) {
                document.getElementsByClassName('display')[0].innerHTML = firstNum + ' ' + arth + ' ' + e.target.innerHTML;
                wasPreviousNum = true;
            } else if (wasPreviousNum) {
                document.getElementsByClassName('display')[0].innerHTML += e.target.innerHTML;
                wasPreviousNum = true;
            } 
        } else {
            if (wasPreviousNum == null || !wasPreviousNum) {
                document.getElementsByClassName('display')[0].innerHTML = e.target.innerHTML;
                wasPreviousNum = true;
            } else if (wasPreviousNum) {
                document.getElementsByClassName('display')[0].innerHTML += e.target.innerHTML;
                wasPreviousNum = true;
            } 
        }
    } else if (e.target.classList[0] == 'arith'){
        if (arth == null && firstNum == null) {
            if (firstNum == null) {
                firstNum = parseInt(document.getElementsByClassName('display')[0].innerHTML);
            }
            arth = e.target.innerHTML;
            document.getElementsByClassName('display')[0].innerHTML = firstNum + ' ' + arth;
            wasPreviousNum = false;
        } 
    }
}

// Screen

let display = document.createElement('span');
display.classList.add('display');
display.innerHTML = '0';
display.style.position = 'absolute';
display.style.top = '80px';
display.style.left = '20px';

screen.appendChild(display);

// let dis = document.getElementsByClassName('display')[0].innerHTML;
