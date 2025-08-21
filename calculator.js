//variables for holding the operands and operators
let firstNum = '';
let secondNum = '';
let operator = '';
let displayVal = '';
let isOperatorClicked = false;

//operator functions
function add(num1,num2){
    return num1 + num2;
}
function sub(num1,num2){
    return num1-num2;
}
function mul(num1,num2){
    return num1*num2;
}
function div(num1,num2){
    if (num2 == 0) {
        displayError("Who do you think you are!");
        return null; // signal error without breaking logic
    }
    return num1/num2;
}
//helper function to handle division errors
function displayError(message) {
    displayVal = message;
    updateDisplay();

    // Optionally reset state to avoid future problems
    firstNum = '';
    secondNum = '';
    operator = '';
    isOperatorClicked = false;
}


function operate(num1,num2,myOperator){
    switch(myOperator){
        case '+':
            return add(num1,num2);
            break;
        case '-':
            return sub(num1,num2);
            break;
        case '*':
            return mul(num1,num2);
            break;
        case '/':
            return div(num1,num2);
            break;
    }
}

function handleNumClick(num1){
    //if the operator has not been clicked yet, we are still on the first number
    if(!isOperatorClicked){
            firstNum+=num1;
            displayVal=firstNum;
        }
    else{
            secondNum += num1;
            displayVal = secondNum;
        }
        updateDisplay();
    
}

function handleOperatorClick(op) {
    if (firstNum === '') return; // Can't operate without a first number

    // If we already have a full expression, evaluate it first
    if (firstNum !== '' && operator !== '' && secondNum !== '') {
        const result = operate(Number(firstNum), Number(secondNum), operator);
        //The result will be null if there is an error
        if (result === null) return;

        displayVal = result;
        updateDisplay();

        // Prepare for next operation
        firstNum = result.toString();
        secondNum = '';
        operator = op; // Store the new operator
        isOperatorClicked = true;
    } else {
        // First time clicking operator
        operator = op;
        isOperatorClicked = true;
    }
}
function handleEqualsClick(){
    if (firstNum !== '' && operator !== '' && secondNum !== '') {
        const result = operate(Number(firstNum), Number(secondNum), operator);

        if (result === null) return;
      
        displayVal = result;
        updateDisplay();
        
        // Reset state for next calculation
        firstNum = result.toString();
        secondNum = '';
        operator = '';
        isOperatorClicked = false;
    }
}
function handleClearClick(){
     firstNum = '';
     secondNum = '';
     operator = '';
     displayVal = '';
     isOperatorClicked = false;
     updateDisplay();
}

function updateDisplay(){
    const display = document.querySelector('.display');
    display.textContent = displayVal;
}

function getUserInput(){
    const buttons = document.querySelectorAll('.digit');
    buttons.forEach(button=>{
        button.addEventListener('click',() => {
            handleNumClick(button.textContent);
        });
});
}

function getOperatorInput() {
    const operatorButtons = document.querySelectorAll('.operator');
    operatorButtons.forEach(button => {
        button.addEventListener('click', () => {
            handleOperatorClick(button.textContent);
        });
    });
}

function getEqualsInput() {
    const equalsButton = document.querySelector('.equal');
    equalsButton.addEventListener('click', handleEqualsClick);
}

function getClearInput(){
    const clearButton = document.querySelector('.clear');
    clearButton.addEventListener('click', handleClearClick);
}

function topLevel(){
    getUserInput();
    getOperatorInput();
    getEqualsInput();
    getClearInput();

}

topLevel();