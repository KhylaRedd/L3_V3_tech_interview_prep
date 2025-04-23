// Reverse a string
function reverseString(str) {
     

    let reversed = str.split('').reverse().join('')
    return reversed;
}
reverseString("Hello")
  
// Find max in array
function findMax(arr) {
    let sortedArr = arr.sort((a,b)=> a - b);
    let max =sortedArr[sortedArr.length - 1];
    return max;

}
findMax([10,3,2,5,67])

// Check if palindrome
function isPalindrome(word) {
    

  let left = 0
  let right = word.length -1
  //declare variables that hold numbers to be used as index indicators

  while(left < right){
    if(word[left] !== word[right]){
        return false;
    }
    left++;
    right--;
  }
    return true;
    
}

module.exports = { reverseString, findMax, isPalindrome };