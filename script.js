// keep track of the current number
let currentNumber = null;

// keep track of the answer from the last executed function
let lastAnswer = null;

// Keep track of the operand
let operand;

// Create selector for updating the working part of the screen
const working = document.querySelector(".working");
working.innerText = 0;

// Selector for updating the answer section
const answer = document.querySelector(".answer");
answer.innerText = 0;

function operate(a, b, operand) {
    if(operand === "*") {return a*b;}
    else if(operand === "+") {return a+b;}
    else if(operand === "-") {return a-b;}
    else if(operand === "/") {return a/b;};
};


function getButton(e) {
    let number = e.target.innerText;

    if(isNaN(number) === false || number === ".") {
        makeCurrentNumber(number);
        updateDisplay();
    } 
    else if (e.target.id === "clear-all") {
        clearAll();
    } 
    else if (e.target.id === "backspace") {
        // backSpace();
    } 
    else if (e.target.id === "trig") {
        // switch buttons to trig options using a function
    } 
    else if (e.target.id === "more") {
        // switch the buttons to more things
    } 
    else if (e.target.id === "function") {
        // keep track of the operator used
        console.log(e.target.innerText);
    } 
    else {}; // run  the execute function
};

function makeCurrentNumber(number) {
    if (!currentNumber) {
        currentNumber = number;
    } else {
        currentNumber = currentNumber.concat(number);
    };
};

function updateDisplay() {
    working.innerText = currentNumber;
};

function clearAll() {
    currentNumber = null;
    lastAnswer = null;
    working.innerText = 0;
};

function getOperand() {
    
};

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", getButton);
});

