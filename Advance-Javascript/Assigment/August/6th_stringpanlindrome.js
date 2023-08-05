function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Compare characters from start and end
    for (let i = 0; i < Math.floor(cleanStr.length / 2); i++) {
      if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) {
        return false;
      }
    }
    
    return true;
  }
console.log(isPalindrome("racecar"));    
console.log(isPalindrome("hello"));      
console.log(isPalindrome("A man a plan, a canal, Panama")); 
  