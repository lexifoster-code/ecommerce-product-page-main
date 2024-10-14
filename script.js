
let value = 0
const display = document.querySelector('.display'); 
const increment = document.querySelector('.plus'); 
const decrement = document.querySelector('.minus'); 

//Test to see values/updates
//console.log(display)
//console.log(display)//
//

function updateDisplay() {
    display.textContent = value;
}

increment.addEventListener('click', ()=> {
    value++;
    updateDisplay();
})
console.log(increment)


decrement.addEventListener('click', ()=> {
    value--;
    updateDisplay();;
})

updateDisplay();