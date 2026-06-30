// #primitive data types 

// 7 types : string , Number , Boolean , null , undefined , Symbol , BigInt 


const score = 100 
const scoreValue = 100.5

const idLoggedIn = true 
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId) // false
// Reference (Non primitive)

// Array, Object, Fuctions 


const heros = ["Shaktiman", "Naagraj", "Doga"]
let myObj ={
    name: "sk akib",
    age: 19,
}

const myfunction =function (){
    // console.log("Hello World")
}

// console.log(typeof outsideTemp) // BigInt
// console.log(typeof myfunction) // function




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Stack (primitive) , Heap (Reference)

let myYoutubeName = "abc"

let anothername = myYoutubeName
anothername = "xyz"

// console.log(myYoutubeName)
// console.log(anothername)

let userOne = {
    email: "user@google.com",
    upi: "user@upi"
}

let userTwo = userOne 

userTwo.email = "akib@google.com"
// console.log(userOne.email)
// console.log(userTwo.email)