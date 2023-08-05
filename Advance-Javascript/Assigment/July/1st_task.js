function reverseName(fullName) {
    const nameArray = fullName.trim().split(' ');
  
    const reversedNameArray = nameArray.reverse();
  
    const reversedFullName = reversedNameArray.join(' ');
  
    return reversedFullName;
  }
 
  const fullName = "Urvish V Patel";
  const reversedName = reverseName(fullName);
  console.log(reversedName); 
  