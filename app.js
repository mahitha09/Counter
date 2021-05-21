let count = 0;
const countEl = document.getElementById('count-el');
const saveEl = document.getElementById('save-el');
const incBtn = document.getElementById('increment-btn');
const decBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset-btn');
const saveBtn = document.getElementById('save-btn');
const small = document.getElementsByTagName('small');


incBtn.addEventListener('click',()=>{
    count++;
    countEl.textContent = count;
    console.log("Inc!");
});

decBtn.addEventListener('click',()=>{
    count--;
    countEl.textContent = count;
    console.log("Dec!");
});

resetBtn.addEventListener('click',()=>{
    count = 0;
    countEl.textContent = 0;
    console.log("Reset!");
});

saveBtn.addEventListener('click',()=>{
    let countStr = ' ' + count + ' -';
    saveEl.textContent += countStr;
});
