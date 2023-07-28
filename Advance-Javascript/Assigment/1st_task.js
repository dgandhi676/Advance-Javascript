function reverseName(fullName) {
    // Split the full name into an array of words
    const nameArray = fullName.trim().split(' ');
  
    // Reverse the array elements
    const reversedNameArray = nameArray.reverse();
  
    // Join the array elements back into a string with a space in between
    const reversedFullName = reversedNameArray.join(' ');
  
    return reversedFullName;
  }
  
  // Test the function
  const fullName = "Urvish V Patel";
  const reversedName = reverseName(fullName);
  console.log(reversedName); // Output: "Gandhi P Dev"
  