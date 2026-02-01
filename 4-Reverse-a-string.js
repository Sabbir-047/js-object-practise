const sentence = 'Here we go to our challenge';

// method - 1
let reverse = '';
for (const letter of sentence) {
    reverse = letter + reverse;
}
console.log(reverse);


// method - 2
let rev1 = '';
for(let i = 0; i < sentence.length; i++){
    const letter = sentence[i];
    rev1 = letter + rev1;
}
console.log(rev1);


// method - 3
const reversed = sentence.split('').reverse().join('');
console.log(reversed);