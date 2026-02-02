const mobile = {
    brand: 'realme',
    price: 24000,
    color: 'starry galaxy',
    camera: '60mpx'
}

// for of: array
// for in: object

// 1st approach
for(const prop in mobile){
    console.log(prop, ': ', mobile[prop]);
}


// 2nd approach
// this way it stores all the keys into an array. and we can loop through it.
const allKey = Object.keys(mobile);
console.log(allKey);
for(const key of allKey){
    console.log(key, ': ', mobile[key]);
}



// more ways to create object.
const pencil = new Object();
console.log(pencil);
const pen = Object.create({});
console.log(pen);