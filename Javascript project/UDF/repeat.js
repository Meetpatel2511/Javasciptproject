// => Most Frequent Array Item
// Write a JavaScript program to find the most frequent item in an array.

const arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]; // Create an array with mixed values
let temp2=0; // Initialize a variable to keep track of the maximum count
let count; // Initialize a variable to keep track of the most frequent element
for(let i=0;i<arr.length;i++){ // Loop through each element in the array
    let temp1=0; 
    arr[i];
    for(let j=1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            temp1++;
        }  
       
    }
    if(temp1>temp2)  { // If the current count is greater than the maximum count
          temp2=temp1;  
          count=arr[i];
        }

}
console.log(`value ${count} is repeating ${temp2} times`); // The output will be "value a is repeating 5 times". The code counts the occurrences of each element in the array and keeps track of the maximum count and the corresponding element. Finally, it prints the most frequent element and its count.