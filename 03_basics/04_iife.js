// Immediately Invoked Function Expressions (IIFE)

(function chai(){

    // Named IIFE 
    console.log(`DB CONNECTED`);
    
})();


( (name) => {

    // unnamed IIFE (using arrow functions)
    console.log(`DB CONNECTED TWO ${name}`);
    
})('sk akib');