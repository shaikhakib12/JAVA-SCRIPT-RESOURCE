const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (item) { // callback function me function ka name nahi hota ha 
//     console.log(item);
    
// })

// using arrow functions

// coding.forEach((value) => {
//     console.log(value);
    
// })

// function printMe(item){
//     console.log(item);
    
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     // console.log(item, index, arr);
    
// })

const myCoding = [
    {
        langName: "javascript",
        langFileName: "js"
    },
    {
        langName: "java",
        langFileName: "java"
    },
    {
        langName: "python",
        langFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.langFileName);
    
})