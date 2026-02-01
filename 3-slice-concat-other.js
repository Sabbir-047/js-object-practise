// slice()
const address = "noakhali";
const part = address.slice(2, 5);
console.log(part);
// substring, substr. if needed search google

// split()
const sentence = "I am a good person who works lazy";
// console.log(sentence.split(' '));

const friendsStr = "rahim, karim, jasim, kasem";
const friends = friendsStr.split(",");
console.log(friends);


// join();
const realFriends = ["rahim", " karim", " jasim", " kasem"];
console.log(realFriends.join());
console.log(realFriends.join('+'));


// concat
const first = 'sabbir';
const last = 'bhuiyan';
const fullName = first.concat(' ').concat(last);
console.log(fullName);


// includes
console.log(last.includes('b'));