// Reverse a string
function reverseString(str) {
     

    let reversed = str.split('').reverse().join('')
    return reversed;
}
reverseString("Hello")
  
// Find max in array
function findMax(arr) {
    let sortedArr = arr.sort((a,b)=> a - b)
    return sortedArr.length - 1;

}
findMax([10,3,2,5,67])

// Check if palindrome
function isPalindrome(word) {
    
}

module.exports = { reverseString, findMax, isPalindrome };