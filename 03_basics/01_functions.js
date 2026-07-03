function saymyname(){
    console.log("a");
    console.log("k");
    console.log("i");
    console.log("b");
    
}

// saymyname()

// function addTwoNumbers(number1, number2){ // paramenters
    // console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){ // paramenters
    // let result = number1 + number2
    // return result
    // console.log("akib")

    return number1 + number2
}


const result = addTwoNumbers(3, 4) 

// console.log("Result: ", result);

function loginUserMessage(username = "user"){
    if(!username){
        console.log("Please enter a username");
        return    
    }
    return `${username} just logged in `
}

// console.log(loginUserMessage("akib"))
// console.log(loginUserMessage()) //undefined


function calculateCartPrice(val1, val2, ...num1){ //rest operator and spread but use case is different
    return num1
}

// console.log(calculateCartPrice(200, 400, 500)) // val1 = 200 , val2 = 400 and rest is num1 = 400 ...

const user = {
    username: "akib",
    age: 19
}

function handleObject (anyobject){
    console.log(`Username is ${anyobject.username} and age is ${anyobject.age}`);
    
}

// handleObject(user)


// handleObject({
    // username: "sk", // other method
    // age: 19
// })


const myNewArray = [100, 200, 500, 600]

function returnSecondaValue(getArray){
    return getArray[1]
}

// console.log(returnSecondaValue(myNewArray));
// console.log(returnSecondaValue([200, 500, 800 , 900]));


let val1 = 8723
let val2 = 5454864

function addvalue(num1 , num2){
    let total = num1 + num2
    return total
}

console.log(addvalue(val1 , val2))
console.log(addvalue(5454489, 8478454));
