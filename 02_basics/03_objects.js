// singleton
// object literal 
// Object.create
// myArray = ["A", "K"]


const mysym = Symbol("key1")

const jsUser = {
    name: "AKib",
    "full name ": "sk akib", // cant acess by . method 
    [mysym]: "mykey1", // symbol syntax
    age: 19,
    location: "kolkata", 
    email: "akib@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name "]);
// console.log(jsUser[mysym]);


jsUser.email = "akib@chatgpt.com"
// Object.freeze(jsUser)
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("hello js user");
    
}

jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
    
}

console.log(jsUser.greetingTwo());


