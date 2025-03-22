//Q-2: Check Palindrome

// making function for find palindrome
function pal() {
    // Taking a number from user
    let num = prompt("Enter a number: ");
    // Convert number into string 
    let no = num.toString();
    // Reverse the string ----"we use reverse method for reverse the string"-----
    let reverse = no.split("").reverse().join("");
    //check if original and reversed are same 
    if (no === reverse) {
        console.log(`${num} ia a palindrome`)
    }
    else {
        console.log(`${num} ia not palindrome`)
    }
}
// call the function
pal();


