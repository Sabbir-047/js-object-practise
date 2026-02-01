// if we want to express a pc sub parts then we have to declare it in many variables. But, we can do it simply by creating objects.
const desktop = ["cpu", "ram", "gpu", "ssd", "16gb", "512gb"];
const cpu = "core i -5";
const cpuPrice = '32423';


// primitive(numbers, boolean, string) data types = this is the lowest phase of datas. We can't make em more smaller

// object - Non-primitive data type. Means we can make em part by part
const desktopPc = {
    // property/key: value;
    brand: 'Ryzen',
    price: 23432,
    color: 'white',
    isDDR5: false
};

const subject = {
    name: 'Numerical Methods',
    teacher: 'Ami nijei',
    examDate: '3 feb',
    chapters: ['first', 'second', 'third'],
    exams: {
        examName: 'quiz',
        marks: 15,
    }
};