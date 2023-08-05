function removeDuplicatesWithFilter(array) {
    return array.filter((item, index) => array.indexOf(item) === index);
  }
const originalArray = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicatesWithFilter(originalArray)); 
  