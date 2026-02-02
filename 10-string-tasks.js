// Task - 1
// ========
// Count how many times a string has the letter a
let myName = "khAlid al walid";
let count = 0;
for (const element of myName) {
  if (element.includes("a")) {
    count++;
  }
}
console.log(count);




// Task - 2
// ========
// Count how many times a string has the letter a or A
let myName1 = "khalid al walid";
let count1 = 0;
for (const element of myName) {
  if (element.includes("a") || element.includes("A")) {
    count1++;
  }
}
console.log(count1);




// Task - 3
// =========
// Check whether a string contains all the vowels a, e, i, o, u
let myStr = "education";
if (
  myStr.includes("a") &&
  myStr.includes("e") &&
  myStr.includes("i") &&
  myStr.includes("o") &&
  myStr.includes("u")
) {
  console.log("Yes contains all");
} else {
  console.log("No");
}



// Task - 4
// =========
// If a given string has either x, replace x by y. If the given string has X, replace it by Y.
let words = 'x-man X-man';
if (words.includes('x') && words.includes('X')) {
    let replaceText = words.replace('x', 'y');
    let replaceText1 = words.replace('X', 'Y');
    console.log(replaceText);
    console.log(replaceText1);
}



// Task - 5
// ========
// Capitalize Every first letter of each word in a string
const capitalize = 'education hello welcome';
const word = capitalize.split(" ");

for (const element of word) {
    console.log(element[0].toUpperCase() + element.slice(1));
}
// console.log(word);

