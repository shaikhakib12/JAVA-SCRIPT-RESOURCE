// for of

// {"", "", ""}

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
    
// }   

// const greeting = "Hello world!!!"
// for (const greet of greeting) {
//     if (greet == " ") {
//         continue;
//     }
//     console.log(`Each char is ${greet}`);
    
// }

// MAPS


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}


const myObject = {
    'game1': "sekiro",
    'game2': "elden ring",
    'game3': "resident evil"
}

// for (const [game, gameName] of myObject) {
//     console.log(game, ":", gameName);
    
// }