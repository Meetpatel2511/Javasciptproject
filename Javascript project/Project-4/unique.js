// => find unique element from array
let arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]; // Create an array with numbers
let unique = []; // Initialize an empty array to store unique elements
arr.forEach((item) => { // Loop through each element in the array
    c=0;
    unique.forEach((i)=>{
        if(item===i){
            c++;
        }
    });
    if(c===0){
        unique.push(item);
    }
});
console.log(unique); // The output will be [1, 2, 3, 4, 5]. The code iterates through the original array and checks if each element is already in the unique array. If not, it adds the element to the unique array. Finally, it prints the unique elements.