function addUnderscore(name) {
    return name.split('').join('_');
  }
  
  // Test the function
  const inputName = "Urvish";
  const outputName = addUnderscore(inputName);
  console.log(outputName); // Output: "u_r_v_i_s_h"
  