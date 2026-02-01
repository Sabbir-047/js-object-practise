const subject = "cse";
const book = "CSE";

// upperCase and LowerCase
if (subject.toLowerCase() == book.toLowerCase()) {
  console.log("matched");
} else {
  console.log("Not matched");
}

// trim
const drink = " water ";
const liqour = "water ";
if (drink.trim() === liqour.trim()) {
  console.log("removed");
} else {
  console.log("not removed");
}
