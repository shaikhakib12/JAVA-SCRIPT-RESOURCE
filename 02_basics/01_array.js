// array 

const myArray = [1, 2, 3, 4, 5];
const myHeroes = ["Ironman", "Spiderman", "Hulk", "Thor", "Captain America"];

const myArr2 = new Array(10, 20, 30, 40, 50);


// console.log(myArray[1]);

// Array methods

// myArray.push(6);
// myArray.push(7, 8, 9);
// myArray.pop();

// myArray.unshift(10);
// myArray.shift();

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(1));

// const newarr = myArray.join()
// console.log(myArray);
// console.log(typeof newarr);

// slice and splice


console.log("A ", myArray);

const myn1 = myArray.slice(1, 4);

console.log(myn1);
console.log("B ", myArr2);

const myn2 = myArray.splice(1, 4);
console.log(myn2);


