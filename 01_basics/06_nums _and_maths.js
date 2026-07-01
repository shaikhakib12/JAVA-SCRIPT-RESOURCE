const score = 400
// console.log(score) // 400


const balance = new Number(100)
// console.log(balance) // [Number: 100]


// console.log(balance.toString(). length);
// console.log(balance.toFixed(2));

const otherNumber = 123.456789

// console.log(otherNumber.toPrecision(4)); // 123.5

const hundreds  = 1000000
console.log(hundreds.toLocaleString('en-IN')); // 1,000,000



// +++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++


// console.log(Math); // [Math: Math]

// console.log(Math.abs(-4)); // 4
// console.log(Math.round(50.2)); // 50
// console.log(Math.ceil(50.2)); // 51
// console.log(Math.floor(50.2)); // 50


// console.log(Math.min(4, 54,8)); // 4
// console.log(Math.max(4, 54,8)); // 54

// console.log(Math.random()); // 0.123456789...


// console.log((Math.random() * 10) + 1); // 0.123456789... * 10 + 1 => 1.123456789... to 10.123456789...


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)