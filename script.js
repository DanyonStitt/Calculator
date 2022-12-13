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


function getButton(e) {
    if(isNaN(e.target.innerText) === false || e.target.innerText === ".") {
        updateEquation(e.target.innerText);
    } 
    else if (e.target.id === "clear-all") {
        clearAll();
    } 
    else if (e.target.id === "backspace") {
        currentEquation = currentEquation.slice(0, -1);
        updateDisplay();
    }
    else if (e.target.id === "function") {
        // keep track of the operator used
        operandString = " " + e.target.innerText + " ";
        updateEquation(operandString);
    } 
    else if (e.target.id === "equals") {
        updateEquation(" " + e.target.innerText)
        equation = currentEquation.split(" ");
        recordEquation(equation.slice(0, -1));
        getResult();
    };
};


// if the sqrt button is pushed
// display sqrt() with numbers between the brackets

// Update the equation for display on the screen when equals is pressed
function updateEquation(number) {
    if (!currentEquation) {
        currentEquation = number;
        updateDisplay()
    } 
    // If an operand is pushed after the equals
    else if (currentEquation.includes("=") === true && isNaN(number) === true) {
        numberArray = [];
        operands = [];
        currentEquation = lastAnswer.toString().concat(number);
        console.log(currentEquation)
        updateDisplay();
    } 
    // If a number is pushed after the equals
    else if (currentEquation.includes("=") === true && isNaN(number) === false) {
        numberArray = [];
        operands = [];
        currentEquation = number;
        console.log(currentEquation)
        updateDisplay();
    }
    // if 
    else {
        currentEquation = currentEquation.concat(number);
        updateDisplay();
    };
};


function updateDisplay() {
    working.innerText = currentEquation;
};


function recordEquation(equation) {
    for (i = 0; i < equation.length; i++) {
        if (isNaN(equation[i]) === false) {
            numberArray.push(equation[i]);
        } else {
            operands.push(equation[i]);
        };
    };
    console.log(numberArray, operands)
};


function clearAll() {
    currentEquation = null;
    numberArray = [];
    operands = [];
    lastAnswer = null;
    answer.innerText = 0;
    working.innerText = 0;
};


function getResult() {
    // convert the strings to numbers for calculation
    let numbers = numberArray.map(function(str) {
        return parseFloat(str);
    });

    let a = numbers[0];

    console.log(numbers, operands)
    // for each operand in the array
    for (i = 0; i < operands.length; i++) {
        let b = numbers[i+1];
        // operate on the first two numbers
        a = operate(a, b, operands[i]);
    };
    
    if (a % 1 != 0) {
        lastAnswer = a.toFixed(2);
    } else {lastAnswer = a}
    
    answer.innerText = lastAnswer;
};


function operate(a, b, operand) {
    if(operand === "*") {return a*b;}
    else if(operand === "+") {return a+b;}
    else if(operand === "-") {return a-b;}
    else if(operand === "/") {return a/b;}
    else if(operand === "^") {return a**b};
}

// if the user adds data and an equals is on screen
// reset the number array and add the answer as the first index
// reset the operand array and add the current operator as the first entry
// add the answer to the top part
// add the operator to the display
// continue all other functions as normal past this point