// create constants for the different part of the equation
let currentEquation = null;
let currentNumber = null;
let operand = null;
let numberArray = [];
let lastAnswer = 0; // Keep track of the last answer
let operands = []; // Keep track of the operands being used

// Create selector for updating the working part of the screen
const working = document.querySelector(".working");
working.innerText = 0;

// Selector for updating the answer section
const answer = document.querySelector(".answer");
answer.innerText = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", getButton);
});


function getResult() {
    // Set the starting value
    let a = numberArray[0];
    console.log(numberArray[0], numberArray[1]);
    console.log(numberArray, operands)
    // for each operand in the array
    for (i = 0; i < operands.length; i++) {
        let b = numberArray[i+1];
        // operate on the first two numbers
        a = operate(a, b, operands[i]);
    };
    
    lastAnswer = a;
    updateEquation(" =");
    updateDisplay();
    answer.innerText = lastAnswer;
};

function operate(a, b, operand) {
    if(operand === "*") {return a*b;}
    else if(operand === "+") {return a+b;}
    else if(operand === "-") {return a-b;}
    else if(operand === "/") {return a/b;};
}

function getButton(e) {
    if(isNaN(e.target.innerText) === false || e.target.innerText === ".") {
        updateEquation(e.target.innerText);
        updateNumber(e.target.innerText);
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
        updateEquation(" ");
        updateEquation(e.target.innerText);
        updateEquation(" ");
        operand = e.target.innerText;
        recordEquation();
        // update the screen with the number " " and the operand
    } 
    else if (e.target.id === "equals") {
        // run the execute function
        recordEquation();
        getResult();
    };
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
    operands = [];
    lastAnswer = null;
    working.innerText = 0;
};

function recordEquation() {
    numberArray.push(currentNumber);
    currentNumber = null;
    if (operand != null) {
        operands.push(operand);
        operand = null;
    };
};


