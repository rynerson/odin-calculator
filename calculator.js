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
    return num1/num2;
}
let firstNum = 10;
let secondNum = 5;
let operator = '-';
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
console.log(operate(firstNum,secondNum,operator));