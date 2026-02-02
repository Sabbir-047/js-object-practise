// Task - 1
// ===========
// Access the golden rod color value in output.
const colors = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
  "golden rod": "#daa520",
};

console.log(colors["golden rod"]);



// Task - 2
// =========
// For this object below add a property named passenger capacity with value 5
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};
car["passenger capacity"] = 123;
console.log(car);




// Task - 3
// ========
//Display the physics marks as output.
const student = {
  name: "Hamim Sakep",
  id: 5421,
  physics: {
    subject: "HSC Physics",
    author: "Shahjahan Tapan",
    marks: 30,
  },
};
const phyMarks = student.physics.marks;
console.log(phyMarks);




// Task - 4
// ========
// Count the number of properties
let student1 = {
  name: "Ariana Grande",
  age: 21,
  city: "Gaibandha",
  isStudent: true,
};

const number = Object.keys(student1).length;
console.log(number);





// Task - 5
// =========
// Loop through an object and print the key-value pairs with their types
let myObj = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};

const key = Object.keys(myObj);
for (const key in myObj) {
    console.log('key: ', key,  '|', 'type: ', typeof myObj[key]);
}