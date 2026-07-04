const myNums = [1, 2, 3]

// const initial_value = 0
// const myTotal = myNums.reduce(function (acumulator, currentvalue) {
//     console.log(`acc: ${acumulator} and current value ${currentvalue}`);
    
//     return acumulator + currentvalue
// }, 0)
// console.log(myTotal);


// using arrow functions 


const myTotal = myNums.reduce((acc, currvalue) => acc+currvalue, 0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const pricetopay = shoppingCart.reduce((acc, currvalue) => acc + currvalue.price, 0)
console.log(`your bill is ${pricetopay}`);
