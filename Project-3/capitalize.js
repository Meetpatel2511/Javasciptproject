//Q-5 Capitalize First letter of each word in  a string

// Take a sentence from user
let stri = prompt("Enter a string");
// take a varaiable array and split the sentence taken from user
let array = stri.split(" ")
// take another varaiable name ans and give already space
let ans = "";
// using for we start from 0 if i is less than arrray length then it goes in this loop and condition work acoording statement
for (let i = 0; i < array.length; i++) {
    ans += array[i].charAt(0).toUpperCase() + array[i].slice(1) + " "
}
// using console print the answer
console.log(ans)