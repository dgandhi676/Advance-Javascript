let familyData = {
  name: "Sureshchandra Iswarlal Gandhi",
  age: 71,
  son: [
    {
      id: 1,
      name: "Parikshit Sureshchandra Gandhi",
      age: 46,
      occupation: "Business",
      vehicalDetails: [{ name: "Mahindra", no: 1754 }],
      son: [{ name: "Dev Parikshit Gandhi", age: 21,name: "Yaksh Parikshit Gandhi", age: 10 }],
    },
    {
      id: 2,
      name: "Mehul Sureshchandra Gandhi",
      age: 43,
      occupation: "Business",
      vehicalDetails: [{ name: "Toyota", no: 9142 }],
      daughter: [{ name: "Ishita Mehul Gandhi", age: 20, name: "Jahnavi Mehul Gandhi", age: 15}],
    },
    {
      id: 3,
      name: "Paresh Bachubhai Bhutwala",
      age: 55,
      occupation: "Employee",
      vehicalDetails: [{ name: "Honda", no: 9621 }],
      daughter: [{ name: "Parishi Paresh Bhutwala", age: 23, name: "Freya Bachubhai Bhutwala", age: 16 }],
    }
  ],
};

console.log(searchTree (tree, 5));

/*
1st task
let name = "Urvish V Patel"
output = Patel V Urvish

2nd task
let name = "Urvish          V             Patel        "
use for loop and trim

3rd task 
let name = "Urvish" //"u_r_v_i_s_h"

4th task
let name = "Urvish" //"u-r+v-i+s-h" // even/odd

5th task
let name = "Urvish v patel" //"Urvish V Patel"  // Split, Map/Loop=> Upper case, index 0
*/