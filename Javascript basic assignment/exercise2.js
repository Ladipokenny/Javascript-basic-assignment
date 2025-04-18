//Basic Calculator
let num1 = parseFloat(prompt("Enter the first number"));
let operator = prompt("Enter the operator (+,-,*,/)");
let num2 = parseFloat(prompt("Enter the second number"));
if (operator == "+") {
    alert("Result: " + (num1 + num2));
} else if (operator == "-") {
    alert("Result: " + (num1-num2));
}else if (operator == "*") {
    alert("Result: " + (num1*num2));
}else if (operator == "/") {
    if (num2 != 0){
        alert("Result: " + (num1/num2));
}else {
    alert("Error: Division by zero is not allowed");
}else {
    alert("Error: Invalid operator");
}

//Sample output
//First number:8
//Operator:/
//Second Number:2
//Alert:Result: 4
