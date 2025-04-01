// Find Element in Array
// Write a JavaScript function to find an array containing a specific element.


const arr1 = [14,17,20,12,11]; // array of ages

function specificElement(age){ // Create a function name specificElement
    return age>18; // The specificElement function takes an age as an argument and returns true if the age is greater than 18, otherwise false. This function will be used as a callback for the find() method.
}
console.log(arr1.find(specificElement)) // The find() method returns the value of the first element in the array that satisfies the provided testing function. In this case, it will return the first age that is greater than 18. The output will be 20, as it is the first age in the array that is greater than 18.