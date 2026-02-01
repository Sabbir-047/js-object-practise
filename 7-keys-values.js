const desktop = {
  brand: "msi",
  price: 40000,
  processor: "AMD",
  ssd: 512,
};

// all keys in the object
const totalKeys = Object.keys(desktop);
console.log(totalKeys);

// all values in the object
const values = Object.values(desktop);
console.log(values);

// Nested objects
const varsity = {
  varsityName: "diu",
  ranking: 1,
  campus: "permanent",
  department: {
    science: "cse",
    commerce: "bba",
    engineering: "eee",
    club: {
        club1: 'cpc',
        club2: 'cyber security',
        club3: 'ai'
    },
  },
};

// how to access nested objects
console.log(varsity.department.science);
console.log(varsity.department.club.club3);
varsity.department.club.club2 = 'photography';
console.log(varsity.department.club.club2);

// we can also delete any property we want.
delete varsity.department.club;
console.log(varsity);
