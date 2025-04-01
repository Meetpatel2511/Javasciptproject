// Sum and Product of Array
// Write a JavaScript program to compute the sum and product of an array of integers.


let  no=Number(prompt("Enter the number:")); // Prompt the user to enter a number
let sum=0; // Initialize a variable to store the sum of natural numbers
let fact=1; // Initialize a variable to store the factorial of the number

while(no>0){ // Loop until no is greater than 0
    sum+=no;
    no--;
}


while(no>0){
    fact*=no;
    no--;
}

console.log(`Sum of natural numbers is ${sum}`); // The output will be the sum of all natural numbers from the entered number down to 1. The code uses a while loop to iterate through the numbers and add them to the sum variable.
console.log(`Factorial of the number is ${fact}`); // The output will be the factorial of the entered number. The code uses a while loop to iterate through the numbers and multiply them to the fact variable.