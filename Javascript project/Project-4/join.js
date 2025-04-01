// Join Array Elements
//Write a simple JavaScript program to join all elements of the following array into a string

let arr=["Red","Green","White","Black"]; //  Create an array with string values
let str=arr.join("+");  // The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.
console.log(str); // The output will be "Red+Green+White+Black". The join() method is called on the arr array, and the "+" character is passed as the separator. This means that the elements of the array will be joined together with a "+" character between each element.