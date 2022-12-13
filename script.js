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
        updateEquation(" " + e.target.innerText + " ");
    } 
    else if (e.target.id === "equals") {
        updateEquation(" " + e.target.innerText)
        equation = currentEquation.split(" ");
        recordEquation(equation.slice(0, -1));
        getResult();
    };
};

// record what is on the screen
// when equals is pressed, split the display on the screen based on spaces
// for each number in the resulting array
// add it to a secondary array
// for each non-number in the array
// add it to an operands array
// run the already existing getResult function
// if another operand is pressed after this
// set the display to the answer and the operand
// continue as normal
// if a number is pressed after this
// run the clear all function
// set the number the user pressed as the start of the new display
// carry on as usual
// if the sqrt button is pushed
// display sqrt() with numbers between the brackets
// if the power button is pushed
// display the power icon, nothing fancy here

// Update the equation for display on the screen when equals is pressed
function updateEquation(number) {
    if (!currentEquation) {
        currentEquation = number;
        updateDisplay()
    } 
    // If an operand is pushed after the equals
    else if (currentEquation.includes("=") === true) {
        currentEquation = lastAnswer.toString();
        currentEquation.concat(" ");
        currentEquation.concat(number);
        updateDisplay();
    } else {
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
    currentNumber = null;
    numberArray = [];
    operands = [];
    lastAnswer = null;
    answer.innerText = 0;
    working.innerText = 0;
};


function getResult() {
    // convert the strings to numbers for calculation
    let numbers = numberArray.map(function(str) {
        return parseInt(str);
    });

    let a = numbers[0];

    console.log(numbers, operands)
    // for each operand in the array
    for (i = 0; i < operands.length; i++) {
        let b = numbers[i+1];
        // operate on the first two numbers
        a = operate(a, b, operands[i]);
    };
    
    lastAnswer = a;
    answer.innerText = lastAnswer;
};


function operate(a, b, operand) {
    if(operand === "*") {return a*b;}
    else if(operand === "+") {return a+b;}
    else if(operand === "-") {return a-b;}
    else if(operand === "/") {return a/b;};
}

// if the user adds data and an equals is on screen
// reset the number array and add the answer as the first index
// reset the operand array and add the current operator as the first entry
// add the answer to the top part
// add the operator to the display
// continue all other functions as normal past this point