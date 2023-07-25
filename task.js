let familyData = {
  name: "Sureshchandra Iswarlal Gandhi",
  age: 71,
  son: [
    {
      name: "Parikshit Sureshchandra Gandhi",
      age: 46,
      occupation: Business,
      vehicalDetails: [{ name: Mahindra, no: 1754 }],
      son: [{ name: "Dev Parikshit Gandhi", age: 21,name: "Yaksh Parikshit Gandhi", age: 10 }],
    },
    {
      name: "Mehul Sureshchandra Gandhi",
      age: 43,
      occupation: Business,
      vehicalDetails: [{ name: Toyota, no: 9142 }],
      daughter: [{ name: "Ishita Mehul Gandhi", age: 20, name: "Jahnavi Mehul Gandhi", age: 15}],
    },
    {
      name: "Paresh Bachubhai Bhutwala",
      age: 55,
      occupation: Employee,
      vehicalDetails: [{ name: Honda, no: 9621 }],
      daughter: [{ name: "Parishi Paresh Bhutwala", age: 23, name: "Freya Bachubhai Bhutwala", age: 16 }],
    }
  ],
};

function findAllSons(familyTree) {
  return familyTree
    .filter(person => person.gender === 'male') // Filter only males (sons)
    .map(son => son.name); // Extract the names of the sons
}

// Get all the sons' names from the family tree
const sonsNames = findAllSons(familyTree);

// Print the sons' names
sonsNames.forEach(sonName => console.log(sonName));