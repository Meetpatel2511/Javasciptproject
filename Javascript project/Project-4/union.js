//=>Union of Two Arrays
//Write a JavaScript program to compute the union of two arrays and display array in sorting order



arr1=[1,2,3,4,5] // Create an array with numbers
arr2=[4,5,6,7,8] // Create another array with numbers
let arr3; // Initialize a variable to store the union of the two arrays
function union(arr1, arr2) { // Create a function name union
    return [...new Set([...arr1, ...arr2])]; // The spread operator (...) is used to expand the elements of the arrays. The Set object is used to create a unique collection of values from both arrays. The Array.from() method creates a new array from the Set object, effectively removing duplicates.
};
console.log(union(arr1,arr2)); // The union function is called with two arrays as arguments. The function will return a new array containing the unique values from both arrays. The output will be [1, 2, 3, 4, 5, 6, 7, 8]. The union of the two arrays is calculated by combining their elements and removing duplicates using the Set object.