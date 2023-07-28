function capitalizeName(name) {
    const words = name.split(' ');
  
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
  
    return words.join(' ');
  }
  
  // Test the function
  const inputName = "urvish v patel";
  const outputName = capitalizeName(inputName);
  console.log(outputName); // Output: "Urvish V Patel"
  