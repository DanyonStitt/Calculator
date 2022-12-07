function operate(a, b, operand) {
    if(operand === "*") {return a*b;}
    else if(operand === "+") {return a+b;}
    else if(operand === "-") {return a-b;}
    else if(operand === "/") {return a/b;};
};

// keep track of the current number
let currentNumber

// keep track of the answer from the last executed function
let lastAnswer

function getButton(e) {
    let number = e.target.innerText;

    if(isNaN(number) === false) {
        console.log(currentNumber);
        currentNumber = makeCurrentNumber(number);
        console.log(currentNumber);
    } else if (e.target.id === "clear all") {
        // Run a clear all function
    } else if (e.target.id === "backspace") {
        // Run a backspace function
    } else if (e.target.id === "trig") {
        // switch buttons to trig options using a function
    } else if (e.target.id === "more") {
        // switch the buttons to more things
    } else if (e.target.id === "function") {
        // keep track of the operator used
    } else {}; // run  the execute function
};

function makeCurrentNumber(currentNumber, string) {
    let newNumber = currentNumber.concat(string);
    console.log(newNumber);
    return newNumber;
};

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", getButton);
});