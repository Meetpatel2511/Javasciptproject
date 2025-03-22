//Q-7: Find factorial using recursion

//Making a function name factorial
function factorial(n) {
    //Condition to check num is 0 or 1 then return 1
    if (n == 0 || n == 1) {
        return 1;
    }
    // recursion of function (function call itself)
    return n * factorial(n - 1);
}
// get a number from user 
let number = prompt("Enter a number");
// take a new variable and store the function in it
let ans = factorial(number);
// print the output through console by call 
console.log(`Factorial of ${number} is ${ans}`)


