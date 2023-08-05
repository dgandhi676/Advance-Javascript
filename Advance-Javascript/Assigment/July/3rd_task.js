function addUnderscore(name) {
    return name.split('').join('_');
  }
  

  const inputName = "Urvish";
  const outputName = addUnderscore(inputName);
  console.log(outputName); 
  