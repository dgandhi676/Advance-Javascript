function customFormat(name) {
    return name.split('').join('-').split('+').join('-').split('+').join('-');
  }
  
  const inputName = "urvish";
  const outputName = customFormat(inputName);
  console.log(outputName); 
  