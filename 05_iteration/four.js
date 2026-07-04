const myObject = {
    'game1': "sekiro",
    'game2': "elden ring",
    'game3': "resident evil"
}

for (const key in myObject) {
    
    console.log(`${key} is ${myObject[key]}`);
    
    
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key])
    
}