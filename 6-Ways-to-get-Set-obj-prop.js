const person = {
  name: "khalid",
  age: 22,
  profession: "developer",
  salary: 25000,
  married: true,
  'ghurte jabo': ['bandarban', 'coxs bazar', 'sunamganj']
};

// console.log(person);

// Dot notation
// ---------------
/**
    if we want to access a object property value. then we have to do it by 
    -> object.property_name

    Note: we can't access any property that has space, bracket, highfen inside the name. If we want to use these then we have to take it inside a semi-colon.
    We have to access it through []
*/
console.log(person.profession);
const income = person.salary;
// we can also store it in a variable
console.log('Current salary:', income);
// we can also change the values through it
person.salary = 30000;
console.log('updated salary: ', person.salary);



// $ bracket Notation
// ---------------------
// we have to access the property through '' in bracket notation
console.log(person['age']);
const boyos = person['age'];
console.log(boyos);
console.log(person['ghurte jabo']);
person['age'] = 25;
console.log(person.age);

// bracket notation can also exist in a variable
const keyName = 'profession';
console.log(person[keyName]);