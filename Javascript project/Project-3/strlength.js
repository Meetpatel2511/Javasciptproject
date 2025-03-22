//Q-6: Find length of string without using length inbuilt method

// Get input from user
let word = prompt("Enter a word to calculate its lenght: ")

// take a varaible name count and assign value 0
let count = 0;
//  Taking a for loop and used for in method 
for (let l in word) {
    count++;
}
// print the output using console log
console.log("The length of string is " + count)


