function formatName(fullName) {
    const nameArray = fullName.split(' ');
    let formattedName = '';
  
    for (let i = 0; i < nameArray.length; i++) {
      formattedName += nameArray[i];
      if (i !== nameArray.length - 1) {
        formattedName += '       '; // Add multiple spaces between words (adjust the number of spaces as needed)
      }
    }
  
    return formattedName;
  }
  
  // Test the function
  const fullName = "Urvish P Patel";
  const formattedName = formatName(fullName.trim());
  console.log(formattedName); // Output: "Dev       P       Gandhi"
  