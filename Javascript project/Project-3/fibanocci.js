//Q-3: Fibonacci Series

// Get input from user
let no = Number(prompt("Enter a number: "));
// taking variable and assign value 
let a = 0;
let b = 1;
let c;
// using console log we get output
console.log(a);
console.log(b);
// using a while loop we get a series
while (no > 2) {
    c = a + b; // addition of a & b
    console.log(c); // printing a c
    a = b; // here swapping is start b is store in a
    b = c; // c is store in b
    no--; // decrement 
}
