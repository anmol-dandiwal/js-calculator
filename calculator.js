//HTML constants and functions
const display = document.getElementById("display");
const clrButton = document.getElementById("clrButton");
const numButtons = document.querySelectorAll(".numButtons");
const opButtons = document.querySelectorAll(".opButton");
const eqButton = document.getElementById("equalsButton");

//Variables
let displayVal; 
let x = 0; 
let result;
let currentOp = "z"; 

//Populate display with numbers clicked
numButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        opButtons.forEach((button) => {
            button.style["background-color"] = "rgb(255, 86, 120)";
        })
        if (display.textContent == "0"){
            display.textContent = button.textContent;
        } else if (display.textContent.length <= 10){
            display.textContent = display.textContent + button.textContent;
        }
        displayVal = parseFloat(display.textContent);
    })
})

//Clear Display
clrButton.addEventListener("click", (e) => {
    display.textContent = "0";
    x = result = 0; 
    currentOp = "z";
})

//Use operators to operate on current numbers
opButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        button.style["background-color"] = "red";
        evaluate();
        x = parseFloat(display.textContent, 10);
        display.textContent = "0";
        currentOp = button.textContent;
    })
})

eqButton.addEventListener("click", evaluate);

//Methods
function evaluate(){
    result = operate(x, displayVal, currentOp);
    if (result.toString().length <= 11){
        display.textContent = result;
    } else {
        display.textContent = result.toPrecision(5);
    }
}

function operate(x, y, op){
    console.log(x, y, currentOp);
    switch (op){
        case "+":
            return x + y;
        case "-":
            return x - y;
        case "*":
            return x * y;
        case "/":
            if (y == 0){
                display.textContent == "error";
            } else {
                return x / y;
            }
        default:
            return y;
    }
}