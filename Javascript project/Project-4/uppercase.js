// Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

function uppercase(str) { // The function takes a string as an argument and returns a new string with the case of each letter swapped (uppercase letters become lowercase and vice versa).
    let swapedcase= ''; // Initialize an empty string to store the swapped case characters
  for (let i=0; i < str.length; i++) { // Loop through each character in the input string
    if (str[i] === str[i].toUpperCase()) {
        swapedcase += str[i].toLowerCase();
    } else {
        swapedcase += str[i].toUpperCase();
    }
  }
  return swapedcase;

}
console.log(uppercase("The Quick Brown Fox")); // The output will be "tHE qUICK bROWN fOX". The function iterates through each character in the input string, checks if it is uppercase or lowercase, and appends the swapped case character to the new string. Finally, it returns the new string with swapped case characters.