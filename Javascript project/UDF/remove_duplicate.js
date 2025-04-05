// Remove Duplicates
// Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).


function removeDuplicates(arr) {   // Create a function name removeDuplicates
    const uniqueElements = new Set(arr); // The set object in JavaScript is a unique collection of values that cannot contain duplicates. It comes with methods to perform various operations.
    return Array.from(uniqueElements); // The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object. In this case, we are converting the Set object back into an array.
}
console.log(removeDuplicates([1, 2, 3, 4, 5, 1, 2, 3])); // The removeDuplicates function is called with an array containing duplicate values. The function will return a new array with all duplicate values removed. The output will be [1, 2, 3, 4, 5].
