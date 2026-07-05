const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")
const h1 = document.querySelector("h1")
// console.log(buttons);

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e);
        // console.log(e.target.id);

        if (e.target.id === "box1") {
            body.style.backgroundColor = "yellow"   
        }
        if (e.target.id === "box2") {
            body.style.backgroundColor = "pink"   
        }
        if (e.target.id === "box3") {
            body.style.backgroundColor = "blue"   
        }
        if (e.target.id === "box4") {
            body.style.backgroundColor = "white" 
            h1.style.color = "black" 
        }
        
        
    })
});




