const user = {
    username: "sk akib",
    age: 19,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
        
    }
}


// user.welcomeMessage()
// user.username = "umar"
// user.welcomeMessage()

// function chai(){
    // let username = "akib"
    // console.log(this.username); // "this" only use in objects
    // 
// }
// chai()

const chai = () => {
    let usename = "akib"
    console.log(this.username);
    
}

// chai()


// const addTwo = (num1, num2) => {
    // return num1 + num2
    // }                                    // basic arrow function syntax
// 
// console.log(addTwo(3, 4));


// const addTwo = (num1, num2) => num1 + num2    // implicit arrow sunction

// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(56, 88454));

const addTwo = (num1, num2) => ({usename: "akib"})  //you need to wrap the oject for return

console.log(addTwo(64545, 87848));


const myArray = [1, 4, 5, 8]

// myArray.forEach(() => {}) 




