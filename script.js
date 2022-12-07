// keep track of the numbers and the whole equation
let currentEquation = null;
let currentNumber = null;
let numberArray = [];

// keep track of the answer from the last executed function
let lastAnswer = null;

// Keep track of the operands being used
let operands = [];

// Create selector for updating the working part of the screen
const working = document.querySelector(".working");
working.innerText = 0;

// Selector for updating the answer section
const answer = document.querySelector(".answer");
answer.innerText = 0;

// function operate(a, b, operand) {
//     if(operand === "*") {return a*b;}
//     else if(operand === "+") {return a+b;}
//     else if(operand === "-") {return a-b;}
//     else if(operand === "/") {return a/b;};
// };

function getButton(e) {
    let number = e.target.innerText;

    if(isNaN(number) === false || number === ".") {
        updateEquation(number);
        updateNumber(number)
    } 
    else if (e.target.id === "clear-all") {
        clearAll();
    } 
    else if (e.target.id === "backspace") {
        currentEquation = currentEquation.slice(0, -1);
        updateDisplay();
    } 
    else if (e.target.id === "trig") {
        // switch buttons to trig options using a function
    } 
    else if (e.target.id === "more") {
        // switch the buttons to more things
    } 
    else if (e.target.id === "function") {
        // keep track of the operator used
        updateEquation(number);
        recordOperands(number);
        // update the screen with the number " " and the operand
    } 
    else {}; // run  the execute function
};

// Update the equation for display on the screen
function updateEquation(number) {
    if (!currentEquation) {
        currentEquation = number;
        updateDisplay()
    } else {
        currentEquation = currentEquation.concat(number);
        updateDisplay();
    };
};

// Update the number until an operand or execute is selected
function updateNumber(number) {
    if (!currentNumber) {
        currentNumber = number;
        console.log(number);
    } else {
        currentNumber = currentNumber.concat(number);
    };
};

function updateDisplay() {
    working.innerText = currentEquation;
};

function clearAll() {
    currentEquation = null;
    currentNumber = null;
    numberArray = [];
    operand = [];
    lastAnswer = null;
    working.innerText = 0;
};

function recordOperands(operand) {
    numberArray.push(currentNumber);
    currentNumber = null;
    operands.push(operand);
    console.log(numberArray);
    console.log(operands);
};

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", getButton);
});

