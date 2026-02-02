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
let myStr = "aeiou";
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
