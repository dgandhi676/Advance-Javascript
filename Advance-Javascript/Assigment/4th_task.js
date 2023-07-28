function customFormat(name) {
    return name.split('').join('-').split('-').join('+').split('+').join('-');
  }
  
  // Test the function
  const inputName = "urvish";
  const outputName = customFormat(inputName);
  console.log(outputName); // Output: "u-r+v-i+s-h"
  