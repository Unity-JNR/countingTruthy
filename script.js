

let btn = document.querySelector('[data-c]')

let display = document.getElementById('result')
// Display the result
// console.log("Number of true values: " + trueCount);
const trueandfalse = [true, false, true, false, true, true, false, false,true];

// Count the number of true values in the array
const trueCount = trueandfalse.filter(value => value === true).length;

btn.addEventListener('click',function(){
    display.innerText = `Number of true values: ${trueCount}`
})

