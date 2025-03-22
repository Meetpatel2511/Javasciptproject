// Q-4: Sort String Alphabetically

// Take word from user for sorting
let para = prompt("Enter a small word to sort in alphabetic way")
// take varaible sortpara in that para is split in indvidual character after that it will be sorted and join back without spaces !
let sortpara = para.split('').sort().join('')
// printing original and sorted alphabet using console log
console.log(`Original string is ${para}`)
console.log(`Sorted string is ${sortpara}`)
