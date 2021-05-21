let count = 0;
const countEl = document.getElementById('count-el');
const incBtn = document.getElementById('increment-btn');
const decBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset-btn');


incBtn.addEventListener('click',()=>{
    count++;
    countEl.innerText = count;
    console.log("Inc!");
});

decBtn.addEventListener('click',()=>{
    count--;
    countEl.innerText = count;
    console.log("Dec!");
});

resetBtn.addEventListener('click',()=>{
    count = 0;
    countEl.innerText = 0;
    console.log("Reset!");
});