function formatName(fullName) {
    const nameArray = fullName.split(' ');
    let formattedName = '';
  
    for (let i = 0; i < nameArray.length; i++) {
      formattedName += nameArray[i];
      if (i !== nameArray.length - 1) {
        formattedName += '       '; 
      }
    }
  
    return formattedName;
  }
  
  const fullName = "Urvish P Patel";
  const formattedName = formatName(fullName.trim());
  console.log(formattedName); 
  