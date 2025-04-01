// Filter Array Values
// Write a JavaScript function to filter false, null, 0 and blank values from an array.

function filterArray(arr){ // Create a function name filterArray
    return arr.filter(Boolean) // The filter() method creates a new array with all elements that pass the test implemented by the provided function. In this case, we are using the Boolean constructor as the test function, which will remove all falsy values from the array.
}
console.log(filterArray([58,'','abcd',true,null,false,0])); // The filterArray function is called with an array containing various values, including numbers, strings, booleans, null, and undefined. The function will return a new array with all falsy values removed. The output will be [58, 'abcd', true].

