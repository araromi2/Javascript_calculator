// Build a basic arithmetic calculator without a frontend

let num1 = window.prompt("Enter a number");
let num2 = window.prompt("Enter another number");
let operator = window.prompt("Enter an operator (+, -, *, /)");

if (operator === "+") {
    alert(parseFloat(num1) + parseFloat(num2));
} else if(operator === "-") {
    alert(parseFloat(num1) - parseFloat(num2));
} else if(operator === "*") {
    alert(parseFloat(num1) * parseFloat(num2));
} else if(operator === "/") {
    alert(parseFloat(num1) / parseFloat(num2));
} else{
    alert("Invalid operator");
}