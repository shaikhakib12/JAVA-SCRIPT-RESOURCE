const userEmail = []

if (userEmail) {
    console.log(`got the user email`);
    
}else {
    console.log(`Don 't have user email`);
    
}



// falsy values false, 0 , -0, BigInt 0n, "", null, undefined, NaN
// truthy values "0", 'false' , " ", [], {}, function(){} empty functions

// checking for empty array 
if (userEmail.length === 0) {
    console.log(`Array is empty`);
    
}
//checking for empty object 
const emptyobj = {
    name: "sk akib"
}

if (Object.keys(emptyobj).length === 0) {
    // console.log(`object is empty`);
       
}

// console.log(emptyobj.name);

// Nullish Coalescing Operator (??): null undefined

let val1;

// val1 = 5 ?? 10      // special case for database calling like firebase...
// val1 = null ?? 10 
val1 = undefined ?? 10
console.log(val1);


// terniary operator

const iceTeaPrice = 100

iceTeaPrice <= 80? console.log(`less than 80`) : console.log(`greater than 80`);

