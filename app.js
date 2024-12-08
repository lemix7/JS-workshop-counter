let count = document.querySelector('.count') 
let incrementBtn = document.getElementById('increment')
let decrementBtn = document.getElementById('decrement')
let resetBtn = document.getElementById('reset')

let countValue = 0



function increment () {
    countValue++
    count.innerText = countValue
}

function decrement () {
    countValue--
    count.innerText = countValue
}

function reset() {
    countValue = 0
    count.innerText = countValue
}


incrementBtn.addEventListener('click',increment)
decrementBtn.addEventListener('click',decrement) 
resetBtn.addEventListener('click',reset)