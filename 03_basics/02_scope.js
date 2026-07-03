let c = 300 // global scope 


if (true) {
    let a = 10
    const b = 20        // block scope cannot access from global scope untill u return 
    // var c = 30
    // console.log("INNER: ", a);
    
}

// console.log(c);


function one(){
    const username = "akib"

    function two(){
        const website = "google"
        console.log(username);
    }
    // console.log(website);
    
    two()
}

// one()

if (true) {
    const username = "akib"
    if(username === "akib"){
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);

// ++++++++++++++++++++++++++++ interesting (hoisting) ++++++++++++++++++++++++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1;
}



const addTwo = function(num){  // expressions 
    return num + 2;
}

addTwo(5)
