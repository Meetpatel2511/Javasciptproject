//Q-1: Reverse Number

// Taking a number from user
let no = parseInt(prompt("Enter a number: "));
// make a variable name rev and assign a value 0
let rev = 0;
// making a while loop
while (no > 0) {
    let rem = no % 10; // here we get remainder by modulo
    rev = rev * 10 + rem; // stores a reversed number as a loop rotates until real value reversed
    no = parseInt(no / 10); // divide a number from 10
}
// print the answer in console log
console.log(rev);




